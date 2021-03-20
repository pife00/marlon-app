const admin = require('firebase-admin');

const serviceAccount = require('./key.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket:'gs://celu-max.appspot.com'
});

module.exports = admin