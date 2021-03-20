const firebase = require('./firebase/config')
require("firebase/firestore");

const express  = require('express');
const router = require("./router/index");
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');
const port = process.env.API_PORT || 4000;
const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.get('/',router.gallery)
app.post('/api/new-phone',router.admin)

app.listen(port,()=>{
    console.log('server running at 4000')
})