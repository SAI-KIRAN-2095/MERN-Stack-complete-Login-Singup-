import React, { useEffect, useState } from 'react'



function Home() {
    const [loggedInUser, setLoggedInUser] = useState('');
    useEffect(() => {
        setLoggedInUser(localStorage.getItem('loggedInUser'))
    }, [])

    return (
        <a href="/navbar" ><div className='homepage'>
            <div className='wellcome'>
            <h1><a href='/navbar' >Welcome {loggedInUser} </a>  </h1>
            </div>
        </div>
         </a>
    )
}

export default Home