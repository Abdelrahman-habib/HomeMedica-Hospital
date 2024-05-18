const { initializeApp, cert } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");

const path = require("path");

///initializ firebase with hospital' service account
const serviceAccount = require(path.join(__dirname, "serviceAccount.json"));

app = initializeApp({
  credential: cert(serviceAccount),
});
getFirestore(app).settings({ ignoreUndefinedProperties: true });
module.exports.app = app;

///////////////////////////////
//*****firebase scripts*****//
/////////////////////////////

require(path.join(__dirname, "chat"));
require(path.join(__dirname, "appointments"));
require(path.join(__dirname, "departments"));
require(path.join(__dirname, "doctors"));
require(path.join(__dirname, "hospitalTable"));
require(path.join(__dirname, "patients"));
require(path.join(__dirname, "SOS"));
require(path.join(__dirname, "hospital"));
require(path.join(__dirname, "values"));
