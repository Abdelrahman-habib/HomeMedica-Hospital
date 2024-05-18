const path = require("path");
const { app } = require(path.join(__dirname, "init"));
const { getFirestore, FieldValue } = require("firebase-admin/firestore");
const { ipcMain } = require("electron");

const { formatHospitalDepartmentsData } = require(path.join(
  __dirname,
  "dataFormatters"
));

//////////////////////////////////
//********** variables ********//
////////////////////////////////
const db = getFirestore(app);
const hospitalID = "Naixh18q1XduadsyB8XG";

//////////////////////////////////
//*********** getters *********//
////////////////////////////////

const getHospitalDepartmentsList = async () => {
  const hospitalDepartments = await db
    .collection("HOSPITALS")
    .doc(hospitalID)
    .collection("DEPARTMENTS")
    .get();
  if (hospitalDepartments.empty) {
    return [];
  }
  let formattedData = [];
  hospitalDepartments.forEach((department) => {
    formattedData.push(formatHospitalDepartmentsData(department));
  });
  return formattedData;
};

const getHospitalDepartment = async (event, departmentID) => {
  console.log(departmentID);

  const hospitalDepartment = await db
    .collection("HOSPITALS")
    .doc(hospitalID)
    .collection("DEPARTMENTS")
    .doc(departmentID)
    .get();
  if (hospitalDepartment.empty) {
    return [];
  }
  console.log(hospitalDepartment);
  return formatHospitalDepartmentsData(hospitalDepartment);
};

//////////////////////////////////
//*********** setters *********//
////////////////////////////////

//add a Hospital Department
async function addHospitalDepartment(event, departmentData) {
  // Get a new write batch
  const batch = db.batch();

  // Set the value in HOSPITALS/hospitalID/DEPARTMENTS
  const hospitalDepartment = db
    .collection("HOSPITALS")
    .doc(hospitalID)
    .collection("DEPARTMENTS")
    .doc(departmentData.name);
  batch.set(hospitalDepartment, departmentData, { merge: true });

  // set the value in HOSPITALTABLE/[dayname]/DEPARTMENTS
  Object.keys(departmentData.workingHours).forEach((day) => {
    if (departmentData.workingHours[day].open) {
      const time = `${departmentData.workingHours[day].from} - ${departmentData.workingHours[day].to}`;
      const price = departmentData.price;
      const dayRef = db.collection("HOSPITALTABLE").doc(day);
      batch.set(
        dayRef,
        {
          [`${departmentData.name}`]: {
            name: departmentData.name,
            time: time,
            price: price,
          },
        },
        { merge: true }
      );
    }
  });

  // Commit the batch
  const result = await batch.commit();
  if (result) {
    return true;
  } else {
    return false;
  }
}

//edit a Hospital Department data
async function editHospitalDepartment(event, departmentData) {
  // Get a new write batch
  const batch = db.batch();
  // Set the value in HOSPITALS/hospitalID/DEPARTMENTS
  const hospitalDepartment = db
    .collection("HOSPITALS")
    .doc(hospitalID)
    .collection("DEPARTMENTS")
    .doc(departmentData.name);
  batch.update(hospitalDepartment, departmentData);

  // set the values in HOSPITALTABLE/[dayname]/DEPARTMENTS
  Object.keys(departmentData.workingHours).forEach((day) => {
    if (departmentData.workingHours[day].open) {
      const time = `${departmentData.workingHours[day].from} - ${departmentData.workingHours[day].to}`;
      const price = departmentData.price;
      const dayRef = db.collection("HOSPITALTABLE").doc(day);
      batch.set(
        dayRef,
        {
          [`${departmentData.name}`]: {
            name: departmentData.name,
            time: time,
            price: price,
          },
        },
        { merge: true }
      );
    }
  });

  // Commit the batch
  const result = await batch.commit();
  if (result) {
    return true;
  } else {
    return false;
  }
}

//edit a Hospital Department data
async function deleteHospitalDepartment(event, departmentID) {
  try {
    // Get a new write batch
    const batch = db.batch();
    // delete the doc in HOSPITALS/hospitalID/DEPARTMENTS
    const hospitalDepartment = db
      .collection("HOSPITALS")
      .doc(hospitalID)
      .collection("DEPARTMENTS")
      .doc(departmentID);
    batch.delete(hospitalDepartment);

    let days = [
      "FRIDAY",
      "MONDAY",
      "SATURDAY",
      "SUNDAY",
      "THURSDAY",
      "TUESDAY",
      "WEDNESDAY",
    ];
    // delete the values in HOSPITALTABLE/[dayname]/DEPARTMENTS
    for (let index = 0; index < days.length; index++) {
      const dayRef = db.collection("HOSPITALTABLE").doc(days[index]);
      batch.update(dayRef, {
        [`${departmentID}`]: FieldValue.delete(),
      });
    }
    // Commit the batch
    await batch.commit();
    return true;
  } catch (error) {
    return false;
  }
}
//////////////////////////////////
//************ main ***********//
////////////////////////////////

ipcMain.handle("addHospitalDepartment", addHospitalDepartment);

ipcMain.handle("getHospitalDepartmentsList", getHospitalDepartmentsList);
ipcMain.handle("getHospitalDepartment", getHospitalDepartment);
ipcMain.handle("editHospitalDepartment", editHospitalDepartment);
ipcMain.handle("deleteHospitalDepartment", deleteHospitalDepartment);
