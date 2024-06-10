import { Button, Chip } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
// import logo from './image/Logo.png'; 
function Nav() {
  return (
    <div>
    <nav style={{ backgroundColor: '#333', color: '#fff', padding: '1rem' }}>
       {/* <img src={logo} alt="Logo" style={{ width: '100px', marginTop: ''}} /> */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ margin: 0 }}>ARCADO</h1>
        <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', alignItems: 'center', }}>
          <li style={{ marginRight: '1rem' }} ><Link to={'/home'} style={{color:'white'}}>HOME</Link></li>
        </ul>
        
      </div>
    </nav>
    </div>
  );
}

export default Nav;