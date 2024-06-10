import React from 'react';
import fb from'./Images/fb.png'
import insta from'./Images/insta.jpg'
import twiter from'./Images/twiter.png'
import { Box } from '@mui/material';

const ContactUs = () => {
    const boxStyle = {
        width: '200px',
        height: '200px',
        backgroundColor: '#ccc',
        border: '1px solid #000',
        padding: '20px',
        boxSizing: 'border-box' // Ensures padding is included in the box dimensions
      };
    return (
      <div style={{paddingInline:"500px", paddingBottom:'10px',paddingTop:'100px'}}>
      <Box
      height={50}
      width={180}
      my={4}
      display="flex"
      alignItems={"center"}
      gap={4}
      p={7}
      sx={{border:"5px solid grey"}}
      >
        <footer>
      <div className="container">
        <p>&copy; {new Date().getFullYear()} My Website</p>
        <div/>
        <div className={boxStyle}>
            <h3>Contact Us</h3>
            <p>Follow us on social media:</p>
            <a href="https://www.facebook.com/YourPage" target="_blank" rel="noopener noreferrer"><img src={fb} alt="Facebook" style={{width:'30px',height:'30px'}} /></a>&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://www.instagram.com/YourProfile" target="_blank" rel="noopener noreferrer"><img src={insta} alt="Instagram"style={{width:'30px',height:'30px'}} /></a>&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://twitter.com/YourHandle" target="_blank" rel="noopener noreferrer"><img src={twiter} alt="Twitter"style={{width:'30px',height:'30px'}} /></a>
  
        </div>
      </div>
    </footer>
    </Box>
    </div>
  );
};

export default ContactUs;