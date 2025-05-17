const express = require('express');
const sequelize = require('sequelize')
const multer = require('multer');
const app = express();
const route = require('./route/route');
require('dotenv').config();
const port = 3000 ;

app.use(express.json());
app.use('/api', route)

// Multter

app.use('/uploads', express.static('uploads'));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); 
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
 
const upload = multer({ storage: storage });
app.post('/upload', upload.single('single'), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).send('No file uploaded.');
    }
    res.send(`File upload successfully: ${req.file.filename}`);
  } catch (error) {
    console.error('Error during file upload:', error);
    res.status(500).send('An error occurred during file upload.');
  }
});
 
app.post('/uploads', upload.array('multi', 3), (req, res) => {
  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).send('No files uploaded.');
    }
    res.send(`${req.files.length} files uploaded successfully.`);
  } catch (error) {
    console.error('Error during multiple file upload:', error);
    res.status(400).send('An error occurred during multiple file upload.');
  }
});


app.listen(port , ()=>{
    console.log("Its Server is work");    
})





