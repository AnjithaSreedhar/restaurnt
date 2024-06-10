import React from 'react'
import image from './image/wp.png';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
const Home = () => {
    const backgroundImageStyle={
        position: 'fixed',
        top: '0',
        left:'0',
        width: '100%',
        height: '100%',
        zIndex: -1,
    };
    return (
        <div>
            <img src={image} alt='err' style={backgroundImageStyle}/>
            <div style={{ textAlign: 'center', paddingTop: '100px',color:'white' }}>        
            <h1>WELCOME TO OUR RESTAURANT</h1>
            <p>"RAIN OR SHINE,IT'S A FINE TIME TO DINE  "</p>

        <Button variant='contained' color='error'><Link to={'/d'} style={{textDecoration:'none',color:'white'}}>ORDER NOW</Link></Button>
        </div>
        </div>
    )
    
    }
  


export default Home