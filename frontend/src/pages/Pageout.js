import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { handleError, handleSuccess } from '../utils';
import { ToastContainer } from 'react-toastify';

function Pageout() {
    // const [ setLoggedInUser] = useState('');
        const [products, setProducts] = useState('');
        const navigate = useNavigate();
        // useEffect(() => {
        //     setLoggedInUser(localStorage.getItem('loggedInUser'))
        // }, [])
    
        const handleLogout = (e) => {
            localStorage.removeItem('token');
            localStorage.removeItem('loggedInUser');
            handleSuccess('User Loggedout');
            setTimeout(() => {
                navigate('/login');
            }, 1000)
        }
    
        const fetchProducts = async () => {
            try {
                const url = "https://mern-stack-complete-login-singup.vercel.app/products";
                const headers = {
                    headers: {
                        'Authorization': localStorage.getItem('token')
                    }
                }
                const response = await fetch(url, headers);
                const result = await response.json();
                console.log(result);
                setProducts(result);
            } catch (err) {
                handleError(err);
            }
        }
        useEffect(() => {
            fetchProducts()
        }, [])
  return (
    <div>
                  {/* <a href='/' className='wellcome'>Welcome {loggedInUser}</a> */}
                  <div className='btn'>
                  <button  onClick={handleLogout}>Logout</button>
                  </div>
                  <div>
                      {
                          products && products?.map((item, index) => (
                              <ul key={index}>
                                  <span>{item.name} : {item.price}</span>
                              </ul>
                          ))
                      }
                  </div>
                  <ToastContainer />
    </div>
  )
}

export default Pageout
