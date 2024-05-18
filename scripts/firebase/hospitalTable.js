const path = require("path");
const { app } = require(path.join(__dirname, "init"));
const { getFirestore, FieldValue } = require("firebase-admin/firestore");
const { ipcMain } = require("electron");
const { formatDoctorsHoursData } = require(path.join(
  __dirname,
  "dataFormatters"
));
const appMainWindow = require(path.join(
  __dirname,
  "..",
  "electron",
  "mainWindow"
)).get();

//////////////////////////////////
//********** variables ********//
////////////////////////////////
const db = getFirestore(app);

//////////////////////////////////
//**********  setters  ********//
////////////////////////////////

//remove a doctor working hours
async function removeDoctorHours(event, removeData) {
  try {
    if (removeData) {
      await db
        .collection("HOSPITALTABLE")
        .doc(removeData.day.toUpperCase())
        .update(
          {
            [`${removeData.department}.doctors`]: FieldValue.arrayRemove({
              doctorID: removeData.doctorID,
              from: removeData.from,
              to: removeData.to,
            }),
          },
          { merge: true }
        );
      return true;
    }
  } catch (e) {
    return false;
  }
  return false;
}

//add a doctor working hours
async function addDoctorHours(event, doctorHoursData) {
  /*
      doctorHoursData = {
        doctor,
        department,
        day,
        from,
        to,
      };
  */

  try {
    const result = await db
      .collection("HOSPITALTABLE")
      .doc(doctorHoursData.day.toUpperCase())
      .set(
        {
          [`${doctorHoursData.department}`]: {
            doctors: FieldValue.arrayUnion({
              doctorID: doctorHoursData.doctor,
              from: doctorHoursData.from,
              to: doctorHoursData.to,
            }),
          },
        },
        { merge: true }
      );
    return `${doctorHoursData.doctor}${doctorHoursData.from},${doctorHoursData.to}`;
  } catch (e) {
    return false;
  }
}

//edit a doctor working hours
async function editDoctorHours(event, doctorHoursData, editData) {
  /*
      editData: {
        id
        department,
        day,
        from,
        to,
        doctorID,
      }
      doctorHoursData = {
        doctor,
        department,
        day,
        from,
        to,
      };
  */

  try {
    await removeDoctorHours(event, editData);

    const result = await db
      .collection("HOSPITALTABLE")
      .doc(doctorHoursData.day.toUpperCase())
      .set(
        {
          [`${doctorHoursData.department}`]: {
            doctors: FieldValue.arrayUnion({
              doctorID: doctorHoursData.doctor,
              from: doctorHoursData.from,
              to: doctorHoursData.to,
            }),
          },
        },
        { merge: true }
      );
    return `${doctorHoursData.doctor}${doctorHoursData.from},${doctorHoursData.to}`;
  } catch (e) {
    return false;
  }
}
//////////////////////////////////
//**********  getters  ********//
////////////////////////////////

function getDepartmentDoctorHoursAndSend(day, department, departmentData) {
  let DepartmentDoctorHours = [];
  if (departmentData.doctors) {
    let doctors = departmentData.doctors;
    doctors.forEach((doctor) => {
      DepartmentDoctorHours.push(
        formatDoctorsHoursData(day, department, doctor)
      );
    });
  }
  if (DepartmentDoctorHours.length > 0) {
    appMainWindow.webContents.send("addTableEvent", DepartmentDoctorHours);
  }
}

function getHospitalTable() {
  let days = [
    "SATURDAY",
    "SUNDAY",
    "MONDAY",
    "TUESDAAY",
    "WEDNESDAY",
    "THURSDAY",
    "FRIDAY",
  ];
  days.forEach((day) => {
    db.collection("HOSPITALTABLE")
      .doc(day)
      .get()
      .then((departments) => {
        if (departments) {
          Object.keys(departments.data()).forEach((department) => {
            getDepartmentDoctorHoursAndSend(
              day,
              department,
              departments.data()[department]
            );
          });
        }
      })
      .catch(() => {});
  });
}

//////////////////////////////////
//************ main ***********//
////////////////////////////////

ipcMain.handle("addDoctorHours", addDoctorHours);
ipcMain.handle("getHospitalTable", getHospitalTable);
ipcMain.handle("editDoctorHours", editDoctorHours);
ipcMain.handle("removeDoctorHours", removeDoctorHours);
