function alertOnLoadMajestic(executionContext) {
    try {
      console.log("This is majestic value");
    } catch (error) {
      debugger;
      console.error(`Error message for "alertOnLoad2()": ` + error);
    }
  }
  