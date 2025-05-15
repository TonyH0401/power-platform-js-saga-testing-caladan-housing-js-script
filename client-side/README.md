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
