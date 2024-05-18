blockForm();

async function displayDoctorData(doctorData, unblock) {
  $("#doctor-id").val(doctorData[0]);
  $("#doctor-name").val(doctorData[1]);
  $("#doctor-phone").val(doctorData[2]);
  $("#doctor-address").val(doctorData[3]);
  $("#doctor-birthDate").val(doctorData[4]);
  $("#doctor-additional-information").val(doctorData[5]);
  $("#doctor-specialty").val(doctorData[6]).trigger("change");
  $("#doctor-type").val(doctorData[7]).trigger("change");
  if (unblock) $("#edit-doctor-form").unblock();
}

async function getDoctorData(unblock) {
  const doctorData = await window.firebase.getDoctor(
    new URL(window.location.href).searchParams.get("doctorId")
  );
  console.log(doctorData);
  displayDoctorData(doctorData, unblock);
}

function blockForm() {
  $("#edit-doctor-form").block({
    message:
      'getting doctor data...<div class="bx bx-revision icon-spin font-medium-2"></div>',
    overlayCSS: {
      backgroundColor: "#fff",
      opacity: 0.8,
      cursor: "wait",
    },
    css: {
      border: 0,
      padding: 0,
      backgroundColor: "transparent",
    },
  });
}
getDoctorData(true);
