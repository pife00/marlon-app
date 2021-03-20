const express = require('express');
const routerAdmin = express.Router();
const adminDB = require('../firebase/firebase');
const formidable = require('formidable');
const uuid = require('uuid-v4');
const inspect = require('util').inspect;

const Busboy = require('busboy');


const db = adminDB.firestore();
const bucket = adminDB.storage().bucket()


const metadata = {
    metadata:{
        firebaseStorageDownloadToken: uuid(),
    },
    contentType:'image/png',
    cacheControl: 'public, max-age=31536000',
}



routerAdmin.post('/api/new-phone',async (req,res,next)=>{
    const form = formidable({ multiples: true });

    form.parse(req, (err, fields, files) => {
        if (err) {
          next(err);
          return;
        }

        //res.json({ fields, files });
        
      });
})


module.exports = routerAdmin