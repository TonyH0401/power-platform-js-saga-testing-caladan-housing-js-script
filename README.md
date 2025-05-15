# Power Platform Project: JS Saga Testing - Javascript Client-side Scripting

Welcome to a Power Platform project called **JS Saga Testing**. In this project, we will use Javascript to manipulate UI components and retrieve data from UI properties and query data from Dataverse using Odata (you can also retrive data using FetchXML).

## Table of Contents

- [Introduction](#introduction)
- [Development Documentation](#development-documentation)

## Introduction

This Power Platform project: **JS Saga Testing** is about learning how to use Javascript for UI manipulation and data retrieval. We will learn how to retrieve data using the `Xrm` WebAPI, the query used will be Odata (there is also a FetchXML version in the docs). We will learn how to get values and data from the UI as well as manipulate UI components.

The Javascript scripts for the Power Platform project **JS Saga Testing** contain **two type** of scripts:

- The Javascript scripts used for **client-side**, it's used for manipulating the UI based on the event handlers.
- The Javascript scripts used for the **ribbon buttons**, it has similar functionality as the scripts used for client-side but it's for the ribbon button.

Each script type will have its corresponding folder and `README.md` file.

Here is a list of documents I used for client-side scripting. The Microsoft documentations are very hard and confusing to read because it leads you to different places based on 1 topic and have duplicate sections for the same topic, so use them with the addition of ChatGPT:

- Start here: https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/client-scripting.

- Client-side reference: https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference.

  - There are multiple instances where there 2 functions that perform the same operations such as `formContext.getControl()` and `formContext.ui.contols.get()`, so watch out
  - There are some functions that can get the attributes from the controls and the controls from the attributes.

- The first thing you want to do is to get the record GUID. The simplest and most modern method to get the record GUID: https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data-entity/getid.

  - This is the older method of getting the record GUID, you can get the GUID without using the `executionContext`: https://learn.microsoft.com/en-us/previous-versions/dynamicscrm-2015/developers-guide/gg334720(v=crm.7)#getid. This method has been deprecated (but MS is still supporting it) so use it with care.

- Use this to get the **Global Context**: https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext. The older appoarch is to use `Xrm.Page.context` which is deprecated but MS still supports it.

## Development Documentation

_Ordered from newest to oldest_

### 2025/04/16

Here is some additional function offered by `Xrm`, the modern and still supported by Microsoft:

- Displaying the progress indicator: https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/showprogressindicator.
- Open the alert dialog: https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-navigation/openalertdialog. There are different dialogs.

Some functions have been deprecated but they are still being supported by Microsoft:

- The list of functions deprecated: https://learn.microsoft.com/en-us/power-platform/important-changes-coming#some-client-apis-are-deprecated.
- Client-side programming reference (deprecated): https://learn.microsoft.com/en-us/previous-versions/dynamicscrm-2015/developers-guide/gg328255(v=crm.7).

### 2025/04/14

Create a client-side scripting function and upload it as a web resource and bind it to an event handler. A client-side function can have these as the arguments:

- Empty arguments, no arguments: You can create a function without any arguments.

  - Without arguments, you can still get the GUID: https://chatgpt.com/share/6820ad62-6fa8-8002-b469-52a90ba2bdc0. However, this method has been deprecated, so use it with caution. You can use ChatGPT for suggestion of method getting the attributes and controls without arguments.

- With arguments:

  - There are 2 types of arguments, argument for the **client-side** and argument for the **ribbon button**.

    - Client-side uses `executionContext` as the input argument, we use `.getFormContext()` to get the `formContext`. From the `formContext`, we will be able to access and get the attributes and controls.

      - With client-side, you can access the grids/sub-grids using `.getControl()`: https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/clientapi-grid-context.

    - Ribbon button uses `primaryControl` as input argument and we can get the `formContext` directly from the `primaryControl` input argument.

      - With ribbon button, accessing the grids/sub-grids is a little bit complicated and confusing because you can access them using both `primaryControl` and `selectedControl` arguments.

        - Quote from MS document "`SelectedControl` will pass in the grid context, for **both subgrids and homepage grids**" (I guess this means ribbon button for the homepage grid and subgrid button for the subgrid): https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/pass-data-page-parameter-ribbon-actions.

      - Beside the generic `selectedControl`, you can "flavor" it with additional variations, here the list: https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/pass-data-page-parameter-ribbon-actions#grid-values.

      - Here is a list I made to compare which arguments should and can be used in different senarios:

        - Homepage: It's mostly a homepage grid. You can access the controls and attributes using `primaryControl` and `selectedControl`.
        - Main form ribbon button: It's a ribbon button on the main form of a record. You can access the controls and attributes using `primaryControl`. You can also access the controls and attribute of a grid/sub-grid using `primaryControl`.
        - Sub-grid button: It's a **button on the sub-grid** form. You can access the control and attributes using `selectedControl`.

      - I implemented an example where I used `SelectedControl` for the homepage grid and this video used `SelectedControl` for the sub-grid: https://youtu.be/BQtxOJBUouk?si=K6pJ39rGAsNpVJ_R&t=108.

- With **additional** arguments: Beside the `executionContext` and `primaryControl` (and grids/sub-grids) as input arguments, you can add additional extra arguments as input parameter.
