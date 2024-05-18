const path = require("path");
const { app } = require(path.join(__dirname, "init"));
const { getFirestore } = require("firebase-admin/firestore");
const { ipcMain } = require("electron");

const { formatPatientData, formatPrescriptionData } = require(path.join(
  __dirname,
  "dataFormatters"
));

//////////////////////////////////
//********** variables ********//
////////////////////////////////
const db = getFirestore(app);

//////////////////////////////////
//*********** getters *********//
////////////////////////////////

// gets a list of users with the field hospitalPatient as true
const getPatientsList = async () => {
  const patients = await db
    .collection("USERS")
    .where("hospitalPatient", "==", true)
    .get();
  if (patients.empty) {
    return [];
  }
  let formattedData = [];
  patients.forEach((patient) => {
    formattedData.push(formatPatientData(patient.id, patient.data()));
  });
  return formattedData;
};

// gets a patient data
const getPatient = async (event, id) => {
  const patient = await db.collection("USERS").doc(id).get();
  if (patient.empty) {
    return [];
  }
  return formatPatientData(patient.id, patient.data());
};

// gets a list of a Patient' Prescriptions
const getPatientPrescriptions = async (event, patientID) => {
  const prescriptions = await db
    .collection("USERS")
    .doc(patientID)
    .collection("Prescriptions")
    .get();
  if (prescriptions.empty) {
    return [];
  }
  let formattedData = [];
  prescriptions.forEach((prescription) => {
    formattedData.push(
      formatPrescriptionData(prescription.id, prescription.data())
    );
  });
  return formattedData;
};
//////////////////////////////////
//************ main ***********//
////////////////////////////////

ipcMain.handle("getPatientsList", getPatientsList);
ipcMain.handle("getPatientPrescriptions", getPatientPrescriptions);
ipcMain.handle("getPatient", getPatient);
