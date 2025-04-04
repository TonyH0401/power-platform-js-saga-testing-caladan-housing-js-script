function aleartOnLoad(executionContext) {
  try {
    debugger; // debugger is used as a stopper
    // Get the 'formContext' from 'executionContext'
    let formContext = executionContext.getFormContext();
    // debugger;
    // Get values from attributes
    let houseAddress =
      formContext.getAttribute("crff8_caladanhouseaddresscustom").getValue() ||
      "default address";
    let yearBuilt =
      formContext.getAttribute("crff8_yearbuilt").getValue() ||
      "default year built";
    // let inspectionRequired = formContext
    //   .getAttribute("crff8_caladanhouseinspectionrequiredcustom")
    //   .getValue();
    // inspectionRequired =
    //   inspectionRequired === undefined ? null : inspectionRequired;
    // // debugger;
    // // Define object
    // const caladanHouse = {
    //   houseAddress: houseAddress,
    //   yearBuilt: yearBuilt,
    //   inspectionRequired: inspectionRequired,
    // };
    // console.log("This is the value: " + JSON.stringify(caladanHouse, null, 2));
    // alert("This is the value: " + JSON.stringify(caladanHouse, null, 2));
    formContext
      .getAttribute("crff8_caladanhouseinspectionrequiredcustom")
      .addOnChange(displayDateOnChange);
    setTimeout(function () {
      displayDateOnChange(executionContext); // Manually invoke if needed
    }, 500);
  } catch (error) {
    debugger;
    console.error("Error message: " + error);
  }
}
function displayDateOnChange(executionContext) {
  try {
    debugger;
    let formContext = executionContext.getFormContext();
    alert(formContext);
    // let inspectionRequired = formContext
    //   .getAttribute("crff8_caladanhouseinspectionrequiredcustom")
    //   .getValue();
    // console.log(inspectionRequired);
  } catch (error) {
    debugger;
    console.error("Error message: " + error);
  }
}
