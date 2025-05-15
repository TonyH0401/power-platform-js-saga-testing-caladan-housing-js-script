# Client-side Script

Use Javascript for the **client-side scripting** for JS Saga Testing Solution - JS Saga Testing Application - Power Platform Project.

## Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Development Documentation](#development-documentation)

## Introduction

The Javascript **client-side scripting** is used to manipulate UI controls, components and to retrieve data. It uses the `namespace` method for creating functions, this fixes a lot of problems later on.

## Installation

Upload the Javascript file to Power Platform as a web resource. Go to your solution then your app. Select the event handler. Select the web resource.
Enter the `namespace.function-name` and turn on `Pass execution context and first parameter`.

For more information:

- https://learn.microsoft.com/en-us/training/modules/actions-client-script-power-platform/exercise.
- https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/walkthrough-write-your-first-client-script#step-2-write-your-javascript-code.

## Development Documentation

_Ordered from newest to oldest_

### 2025/04/19

The usage of `setSubmitMode("always")` ensures that the data is **always submitted** when the record is saved. There is also `dirty` where the data is submitted when the record is saved but **the data actual changed** and `never` is where the data is **never submitted** when the record is saved.

- More information: https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/setsubmitmode.

Normally, the changing of data in the UI will trigger the `onChange` event handler but changing the data using code will not trigger the `onChange` event handler. So, in order to trigger it, we will need to use the `fireOnChange()` function immediately after changing the value.

- https://chatgpt.com/share/67f4996d-71bc-8010-ad07-6432c4fc865d.
- https://chatgpt.com/share/67f49d20-e55c-8010-9792-e120560c067c*/

### 2025/04/18

Originally, I used a Javascript without `namespace`, it ran into problems such as there can't be two running scripts (but different scripts) at the same time, I can't correctly disable a script, etc. Using the `namespace` structure fixes these problems, I also only use `var` once when I declare the `namespace`, this also fixed the problem.

If you want to use the function, call the function with the namespace like this `Example.loadLayout()`:

- https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/walkthrough-write-your-first-client-script#configure-form-on-load-event.
- https://learn.microsoft.com/en-us/training/modules/actions-client-script-power-platform/exercise. This method doesn't use a namespace, it works with simple and basic script but it will cause problems later on, especially with multiple scripts.

There isn't a true `main()` function, the `main()` function is the function mainly used when we declare it in the "Event Handler". From this `main()` function, we can call other functions using `this` keyword, but if other functions call other different functions, the `this` keyword doesn't work and we need to use `namespace`. This means the deeper the layer it goes, the more we have to use the `namespace` to call other functions.

### 2025/04/17

We can use `onChange` event handler to execute the script when there are changes within the file, we can also use `addOnChange()` to add functions that will be executed when specific controls are changed. There are no big differences between those two, the only difference is `addOnChange()` ensure all of the controls and fields are loaded before any on change events can be performed.

- https://chatgpt.com/c/67f203d3-c3d4-8010-bc7a-092e80b9f631
- https://chatgpt.com/share/67f3fa66-fda4-8010-a03b-c204a12820e2.

Comparing between using `executionContext` and `primaryControl`:

- https://chatgpt.com/c/67f1ef10-cf94-8010-b28d-3771dba9beb3
- https://chatgpt.com/share/68262371-2978-8010-a08b-aff9580355fb.

Pass **Additional Parameters** to a Webresource in Dynamics CRM

- https://community.dynamics.com/blogs/post/?postid=3ed2568b-9ff4-4ed0-9e95-d1059a4a09f1
- https://www.crmonce.com/how-to-pass-parameters-to-a-webresource-in-dynamics-crm/
