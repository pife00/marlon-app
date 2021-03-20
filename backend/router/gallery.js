var express = require('express');
var galleryRouter = express.Router();
const admin = require('../firebase/firebase');

const db = admin.firestore();

galleryRouter.get('/', async(req,res)=>{
  const phone = await db.collection('phones').get();
  const docRecived = [];
  phone.forEach((doc)=>{
   docRecived.push(doc.data());
  })
  res.send(docRecived);
})


module.exports = galleryRouter;