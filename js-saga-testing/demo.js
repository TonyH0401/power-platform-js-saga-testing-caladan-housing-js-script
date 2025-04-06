function alertOnLoad(executionContext) {
  try {
    debugger;
    // Get the 'formContext' from 'executionContext':
    let formContext = executionContext.getFormContext();
    // debugger;
    // Get values from attributes:
    let houseAddress =
      formContext.getAttribute("crff8_caladanhouseaddresscustom").getValue() ||
      "default address";
    let yearBuilt =
      formContext.getAttribute("crff8_yearbuilt").getValue() ||
      "default year built";
    let inspectionRequired = formContext
      .getAttribute("crff8_caladanhouseinspectionrequiredcustom")
      .getValue();
    inspectionRequired =
      inspectionRequired === undefined ? null : inspectionRequired;
    let inspectionDate = "";
    if (inspectionRequired) {
      inspectionDate = formContext
        .getAttribute("crff8_inspectiondatecustom")
        .getValue();
    }
    // debugger;
    // Define object with values:
    const caladanHouse = {
      houseAddress: houseAddress,
      yearBuilt: new Date(yearBuilt).toLocaleDateString(),
      inspectionRequired: inspectionRequired,
      ...(inspectionDate
        ? { inspectionDate: new Date(inspectionDate).toLocaleDateString() }
        : {}),
    };
    debugger;
    // Set visibility for 'Timeline tab'
    let timelineTab = formContext.ui.tabs.get("timeline_tab");
    if (!inspectionRequired) {
      timelineTab.setVisible(false);
    }
    debugger;
    console.log("This is the value: " + JSON.stringify(caladanHouse, null, 2));
    // alert("This is the value: " + JSON.stringify(caladanHouse, null, 2));
    // formContext
    //   .getAttribute("crff8_caladanhouseinspectionrequiredcustom")
    //   .addOnChange(displayDateOnChange);
    // setTimeout(function () {
    //   displayDateOnChange(executionContext); // Manually invoke if needed
    // }, 500);
  } catch (error) {
    debugger;
    console.error("Error message: " + error);
  }
}
// function displayDateOnChange(executionContext) {
//   try {
//     debugger;
//     let formContext = executionContext.getFormContext();
//     alert(formContext);
//     // let inspectionRequired = formContext
//     //   .getAttribute("crff8_caladanhouseinspectionrequiredcustom")
//     //   .getValue();
//     // console.log(inspectionRequired);
//   } catch (error) {
//     debugger;
//     console.error("Error message: " + error);
//   }
// }
