const path = require("path");
const { app } = require(path.join(__dirname, "init"));
const { getAuth } = require("firebase-admin/auth");
const { getFirestore } = require("firebase-admin/firestore");
const { ipcMain } = require("electron");

const appMainWindow = require(path.join(
  __dirname,
  "..",
  "electron",
  "mainWindow"
)).get();
const { formatDoctorData, formatDoctorDataAll } = require(path.join(
  __dirname,
  "dataFormatters"
));

//////////////////////////////////
//********** variables ********//
////////////////////////////////
const db = getFirestore(app);

const auth = getAuth(app);
const hospitalID = "Naixh18q1XduadsyB8XG";

//////////////////////////////////
//*********** getters *********//
////////////////////////////////

const getDoctorsList = async () => {
  const doctors = await db
    .collection("HOSPITALS")
    .doc(hospitalID)
    .collection("Doctors")
    .get();
  let formattedData = [];
  doctors.forEach((doctor) => {
    formattedData.push(formatDoctorData(doctor.id, doctor.data()));
  });
  return formattedData;
};

const getDoctor = async (event, doctorID) => {
  console.log(doctorID);
  const doctor = await db
    .collection("HOSPITALS")
    .doc(hospitalID)
    .collection("Doctors")
    .doc(doctorID)
    .get();
  if (doctor.empty) {
    return [];
  }
  return formatDoctorDataAll(doctor.id, doctor.data());
};

///////////////////////////////////
//******* helper methods *******//
/////////////////////////////////

function userEmailExists(email) {
  auth
    .getUserByEmail(email)
    .then((userRecord) => {
      return true;
    })
    .catch((error) => {
      return false;
    });
}

function getUserByEmail(email) {
  auth
    .getUserByEmail(email)
    .then((userRecord) => {
      return userRecord;
    })
    .catch((error) => {
      return false;
    });
}
//////////////////////////////////
//*********** setters *********//
////////////////////////////////

// creates a user account for doctor to use in HomeMedica Doctors application
async function _createDoctorAccount(doctorData) {
  try {
    let user = await auth.getUserByEmail(doctorData.email);
    if (user) {
      return user.uid;
    } else {
    }
  } catch (error) {
    if (error.errorInfo.code == "auth/user-not-found") {
    }
    user = await auth.createUser({
      email: doctorData.email,
      emailVerified: false,
      password: doctorData.password,
      displayName: doctorData.name,
    });
    if (user) {
      return user.uid;
    }
  }
}

// removes a user account for doctor to use in HomeMedica Doctors application
async function _removeDoctorAccount(uid) {
  try {
    const deleted = await auth.deleteUser(uid);
    if (deleted) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    if (error.errorInfo.code == "auth/user-not-found") {
      return true;
    }
    return false;
  }
}

//adds a Hospital Doctor to firebase
async function addHospitalDoctor(event, doctorData) {
  const doctorID = await _createDoctorAccount(doctorData);
  const result = await db
    .collection("HOSPITALS")
    .doc(hospitalID)
    .collection("Doctors")
    .doc(doctorID)
    .set(
      {
        address: doctorData.address,
        email: doctorData.email,
        name: doctorData.name,
        phone: doctorData.phone,
        specialty: doctorData.specialty,
        type: doctorData.type,
        birthDate: doctorData.birthDate,
        additionalInfo: doctorData.additionalInfo,
      },
      { merge: true }
    );

  if (result) {
    return true;
  } else {
    return false;
  }
}
//edit a Hospital Doctor record
async function editHospitalDoctor(event, doctorData) {
  const result = await db
    .collection("HOSPITALS")
    .doc(hospitalID)
    .collection("Doctors")
    .doc(doctorData.id)
    .update({
      address: doctorData.address,
      email: doctorData.email,
      name: doctorData.name,
      phone: doctorData.phone,
      specialty: doctorData.specialty,
      type: doctorData.type,
      birthDate: doctorData.birthDate,
      additionalInfo: doctorData.additionalInfo,
    });

  if (result) {
    return true;
  } else {
    return false;
  }
}
//deletes a Hospital Doctor record
async function deleteHospitalDoctor(event, doctorID) {
  const removed = await _removeDoctorAccount(doctorID);
  console.log("1", removed);
  if (removed) {
    const result = await db
      .collection("HOSPITALS")
      .doc(hospitalID)
      .collection("Doctors")
      .doc(doctorID)
      .delete();
    console.log("2", result);

    if (result) {
      return true;
    }
  } else {
    return false;
  }
}
//////////////////////////////////
//************ main ***********//
////////////////////////////////

ipcMain.handle("getDoctorsList", getDoctorsList);
ipcMain.handle("getDoctor", getDoctor);
ipcMain.handle("addHospitalDoctor", addHospitalDoctor);
ipcMain.handle("editHospitalDoctor", editHospitalDoctor);
ipcMain.handle("deleteHospitalDoctor", deleteHospitalDoctor);
