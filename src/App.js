import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Navbar from './components/Navbar';
import { Navigate, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Home from './components/Home';
import Order from './components/Order';
import Nav from './components/Nav';
import Drawer from './components/Drawer';
function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      {/* <Contact/> */}
      
      <Routes>
        <Route path="/" element={<Navigate to="home"/>}/>
        <Route path='/home' element={<><Navbar/><Home/></>}/>
        <Route path='/login' element={<><Navbar/><Login/></>}/>
        <Route path='/signup' element={<><Navbar/><Signup/></>}/>
        <Route path='/d' element={<><Nav/><Order/></>}/>
      </Routes>
    </div>
  );
}

export default App;
