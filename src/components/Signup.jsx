import { Button, Card, TextField, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import image from './image/wp.png';

const Signup = () => {
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
      <Card variant='outlined' style={{padding:'40px',
        margin: 'auto',
        marginTop: '50px',
        alignContent: 'center',
        width: '300px',
        backgroundColor: '',
        border:'0.5px solid black',
        cursor:'pointer',
        borderRadius: '20px',
        opacity:'80%',
        }}>
<Typography variant='h5' color='grey'>SIGN UP</Typography>
<TextField type='name' label="Enter Username"variant='standard'/><br/><br/>
<TextField type='email' label="Enter e-mail Id"variant='standard'/><br/><br/>
<TextField type='password' label="Enter Password"variant='standard'/><br/><br/>
<TextField type='password' label="Confirm Password"variant='standard'/><br/><br/>
<Button variant='contained' color='error'><Link to={'/home'} style={{textDecoration:'none',color:'white'}}>CANCEL</Link>
</Button>&nbsp; &nbsp; &nbsp;
<Button variant='contained'>SIGN UP</Button>
</Card>


    </div>
  )
}

export default Signup