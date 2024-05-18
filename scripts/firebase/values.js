const path = require("path");
const { app } = require(path.join(__dirname, "init"));
const { getFirestore } = require("firebase-admin/firestore");
const { ipcMain } = require("electron");

const {
  formatMedicalSpecialtiesData,
  formatDoctorTypesData,
  formatDepartmentsData,
} = require(path.join(__dirname, "dataFormatters"));

//////////////////////////////////
//********** variables ********//
////////////////////////////////
const db = getFirestore(app);

//////////////////////////////////
//*********** getters *********//
////////////////////////////////
const getMedicalSpecialties = async () => {
  const medicalSpecialties = await db
    .collection("VALUES")
    .doc("MedicalSpecialties")
    .get();
  const formattedData = formatMedicalSpecialtiesData(medicalSpecialties);
  return formattedData;
};
const getDoctorTypes = async () => {
  const doctorTypes = await db.collection("VALUES").doc("DoctorsTypes").get();
  const formattedData = formatDoctorTypesData(doctorTypes);
  return formattedData;
};
const getDepartmentsList = async () => {
  const hospitalDepartments = await db
    .collection("VALUES")
    .doc("HospitalDepartments")
    .get();
  const formattedData = formatDepartmentsData(hospitalDepartments);
  return formattedData;
};

//////////////////////////////////
//************ main ***********//
////////////////////////////////

ipcMain.handle("getMedicalSpecialties", getMedicalSpecialties);
ipcMain.handle("getDoctorTypes", getDoctorTypes);
ipcMain.handle("getDepartmentsList", getDepartmentsList);
