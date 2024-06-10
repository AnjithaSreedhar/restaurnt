import  React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import i from './Images/biriyani.jpg'
import a from './Images/ney.jpeg'
import b from './Images/kuzhy.jpg'
import c from './Images/kappa.jpg'
import d from './Images/Kizhi-Parotta.jpg'
import e from './Images/chatty.jpg'
import f from './Images/masalado.jpg'
import g from './Images/kallapam.jpg'
import h from './Images/chapti.jpg'
import j from './Images/alfa.jpg'
import image from './image/wp.png'
import { Grid } from '@mui/material';


export default function ImgMediaCard() {
  const backgroundImageStyle={
    position: 'fixed',
    top: '0',
    left:'0',
    width: '100%',
    height: '100%',
    zIndex: -1,
};
  return (
    <>
    <div style={{paddingTop:'400px'}}>
    <img src={image} alt='err' style={backgroundImageStyle}/>
    
    <Typography></Typography>
    
    
    <Grid>
    <Card sx={{ maxWidth: 300 ,marginTop:" -320px" ,marginLeft:"50px"}}>
      <CardMedia
        component="img"
        alt=""
        height="140"
        image={i}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          Veg Biriyani
        </Typography>
        <Typography variant="body2" color="text.secondary">
            $ 300
        </Typography>
      </CardContent><br /><br/>

      <CardActions><br /><br/>

 
        <Button variant="contained">Buy</Button>
      </CardActions>
    </Card>

   
    <Card sx={{ maxWidth: 300, marginTop:" -320px" ,marginLeft:"400px"}}>
      <CardMedia
        sx={{ height: 140 }}
        image={a}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          ney choru
        </Typography>
        <Typography variant="body2" color="text.secondary">
         $ 200
        </Typography>
      </CardContent>

      <CardActions>
        
        <Button variant="contained">Buy</Button><br /><br/>

      </CardActions><br /><br/>

    </Card><br /><br/>


    <Card sx={{ maxWidth: 300, marginTop:" -360px" ,marginLeft:"750px"}}>
      <CardMedia
        sx={{ height: 140 }}
        image={b}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          Kuzhy Mandhi
        </Typography>
        <Typography variant="body2" color="text.secondary">
          $ 800
        </Typography>
      </CardContent>
      <CardActions>
       
        <Button variant="contained">Buy</Button><br /><br/>

      </CardActions><br /><br/>

    </Card><br /><br/>


    <Card sx={{ maxWidth: 300 ,marginLeft:"50px" }}>
      <CardMedia
        component="img"
        alt=""
        height="140"
        image={c}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
         Kappa Biriyani
        </Typography>
        <Typography variant="body2" color="text.secondary">
         $ 200
        </Typography>
      </CardContent>
      <CardActions>
   
        <Button variant="contained">Buy</Button><br /><br/>

      </CardActions><br /><br/>

    </Card><br /><br/>


    <Card sx={{ maxWidth: 300, marginTop:" -360px" ,marginLeft:"400px"}}>
      <CardMedia
        sx={{ height: 140 }}
        image={d}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          kizhy Porotta
        </Typography>
        <Typography variant="body2" color="text.secondary">
       $ 250
        </Typography>
      </CardContent>
      <CardActions>
  
        <Button variant="contained">Buy</Button><br /><br/>

      </CardActions><br /><br/>

    </Card><br /><br/><br/>


    <Card sx={{ maxWidth: 300, marginTop:" -380px" ,marginLeft:"750px"}}>
      <CardMedia
        sx={{ height: 140 }}
        image={e}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          Chatty Choru
        </Typography>
        <Typography variant="body2" color="text.secondary">
          $ 250
        </Typography>
      </CardContent>
      <CardActions>
        
        <Button variant="contained">Buy</Button><br /><br/>

      </CardActions><br /><br/>

    </Card><br /><br/>


    <Card sx={{ maxWidth: 300,marginLeft:"50px" }}>
      <CardMedia
        component="img"
        alt=""
        height="140"
        image={f}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          masala dosa
        </Typography>
        <Typography variant="body2" color="text.secondary">
        $ 50
        </Typography>
      </CardContent>
      <CardActions>
  
        <Button variant="contained">Buy</Button>
      </CardActions><br/><br/>
    </Card>
    <br/><br/> &nbsp; &nbsp; &nbsp;


   
    <Card sx={{ maxWidth: 300, marginTop:" -380px" ,marginLeft:"400px"}}>
      <CardMedia
        sx={{ height: 140 }}
        image={g}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          kallapam and chiken curry
        </Typography>
        <Typography variant="body2" color="text.secondary">
          $ 200
        </Typography>
      </CardContent>
      <CardActions>
     
        <Button variant="contained">Buy</Button>
      </CardActions><br/><br/>
    </Card><br/><br/>&nbsp; &nbsp; &nbsp;



    
    <Card sx={{ maxWidth: 300, marginTop:" -380px" ,marginLeft:"750px"}}>
      <CardMedia
        sx={{ height: 140 }}
        image={j}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          al faham
        </Typography>
        <Typography variant="body2" color="text.secondary">
       $ 450
        </Typography>
      </CardContent>
      <CardActions>
  
        <Button variant="contained">Buy</Button><br /><br/>

      </CardActions><br /><br/>

    </Card><br /><br/>
    </Grid>
    </div>

    </>
  );
}


       


