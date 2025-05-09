function alertOnLoadTemp(executionContext) {
  try {
    console.log("This is temp value");
  } catch (error) {
    debugger;
    console.error(`Error message for "alertOnLoad2()": ` + error);
  }
}
