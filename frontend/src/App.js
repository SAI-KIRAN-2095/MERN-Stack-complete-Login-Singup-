import { Navigate,Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import { useState } from 'react';
import RefrshHandler from './RefrshHandler';
import F1cars from './pages/F1cars';
import Mercedebenze from './pages/Mercedebenze'
import MerecedeAMG from './pages/MerecedeAMG';
import Maybach from './pages/Maybach';
import Chatbot from './pages/Chatbot';
import Imagetotext from './pages/Imagetotext';
import Gle from './pages/Gle';

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const PrivateRoute = ({ element }) => {
       return isAuthenticated ? element : <Navigate to="/login" />
  }
  return (
    <div >
        <RefrshHandler setIsAuthenticated={setIsAuthenticated} />
        <Routes>
          <Route path='/' element={<Navigate to="/login"/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route
          path='/home'
          element={<PrivateRoute element={<Home />} />}/>          
          <Route path='/navbar' element={<Navbar/>}/>
          <Route path='/f1cars' element={<F1cars/>}/>
          <Route path='/mercedebenze' element={<Mercedebenze/>}/>
          <Route path='/MerecedeAMG' element={<MerecedeAMG/>}/>
          <Route path='/Maybach' element={<Maybach/>}/>
          <Route path='/chatbot' element={<Chatbot/>}/>
          <Route path='/imagetotext' element={<Imagetotext/>}/>
          <Route path='/gle' element={<Gle/>}/>
        </Routes>      
    </div>
  );
}

export default App;
