const path = require("path");
const { app } = require(path.join(__dirname, "init"));
const { getFirestore } = require("firebase-admin/firestore");
const { ipcMain } = require("electron");

const { formatHospitalData } = require(path.join(__dirname, "dataFormatters"));

//////////////////////////////////
//********** variables ********//
////////////////////////////////
const db = getFirestore(app);
const hospitalID = "Naixh18q1XduadsyB8XG";

//////////////////////////////////
//*********** getters *********//
////////////////////////////////

// gets a list of users with the field hospitalPatient as true
const getHospitalInfo = async () => {
  const hospitalInfo = await db.collection("HOSPITALS").doc(hospitalID).get();
  if (hospitalInfo.empty) {
    return [];
  }
  return formatHospitalData(hospitalInfo);
};

//////////////////////////////////
//************ main ***********//
////////////////////////////////

ipcMain.handle("getHospitalInfo", getHospitalInfo);
