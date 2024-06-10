import React, { useEffect, useState } from 'react';
import { Card, TextField, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import LockIcon from '@mui/icons-material/Lock';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import axios from 'axios';
import image from './image/wp.png';

const Login = () => {
  // const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   axios.get("http://localhost:3000/login")
  //     .then((res) => {
  //       console.log(res.data);
  //       setUsers(res.data);
  //     })
  //     .catch(err => console.log(err));
  // }, []);

  const backgroundImageStyle = {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    zIndex: -1,
  };

  return (
    <div>
      <img src={image} alt='err' style={backgroundImageStyle} />
      <Card variant='outlined' style={{
        padding: '40px',
        margin: 'auto',
        marginTop: '50px',
        alignContent: 'center',
        width: '300px',
        backgroundColor: '',
        border: '0.5px solid black',
        cursor: 'pointer',
        borderRadius: '20px',
        opacity: '80%',
      }}>
        <Typography variant='h5' color='grey'>LOGIN</Typography>
        <TextField
          label="username"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
          variant='standard'
          style={{ cursor: 'pointer' }} /><br /><br /><br />
        <TextField
          label="password"
          type='password'
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockIcon />
              </InputAdornment>
            )
          }}
        /><br /><br />
        <Button variant='contained'>LOGIN</Button>
        {/* {users.map((val, i) => {
          return (
            <div key={i}>
              <Typography>{val.ename}</Typography>
              <Typography>{val.email}</Typography> */}
              {/* Do not display sensitive information like passwords */}
            {/* </div>
          );
        })} */}
      </Card>
    </div>
  );
}

export default Login;
