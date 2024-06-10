const express = require('express');
const login = require('./Model');
const cors = require('cors');


const app = express();
app.use(express.json());
app.use(cors());


// Api to add data to db
app.post('/login', async (req, res) => {
    try {
      const existingUser = await login.findOne({ email: req.body.email });
      if (existingUser) {
        return res.status(400).send("Email already exists");
      }
 
      const newUser = new login(req.body);
      await newUser.save();
      res.send("User added");
    } catch (error) {
      res.status(500).send(error);
    }
  });
 
// Api to view data from db
app.get('/view', async (req, res) => {
    try {
        let result = await login.find();
        res.json(result);
    } catch (error) {
        res.status(500).send(error);
    }
});


// Deleting a data
// app.delete('/remove/:id', async (req, res) => {
//     try {
//         let id = req.params.id;
//         await login.findByIdAndDelete(id);
//         res.send("Deleted");
//     } catch (error) {
//         res.status(500).send(error);
//     }
// });


// Other routes
// app.get('/', (req, res) => {
//     res.send("Message from server");
// });


// app.get('/trial', (req, res) => {
//     res.send("trial server");
// });


// app.post('/trouble', (req, res) => {
//     res.send("troubleshooter");
// });


// Add this route to your Express server


// app.post('/verify', async (req, res) => {
//     const { email, password } = req.body;
//     try {
//         const user = await login.findOne({ email, password });
//         if (user) {
//             res.json({ message: 'User exists in the database.' });
//         } else {
//             res.json({ message: 'User does not exist in the database.' });
//         }
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Error verifying user.' });
//     }
// });




// Port
app.listen(8080, () => {
    console.log('port is running at 8080');
});
