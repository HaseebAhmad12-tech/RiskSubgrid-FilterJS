# FilterSubgrid-JS
**Master Dynamic Subgrid Filtering in Model-Driven Apps**

**Introduction**

In Model-Driven Apps, filtering subgrids dynamically based on lookup fields provides users with relevant and contextual data. This guide explains how to filter a subgrid based on Project and Work Order lookup fields.

This repository contains a working example, JavaScript code snippets, and step-by-step instructions to enhance your Microsoft Dataverse and Power Apps customization journey.

Features

Dynamically filter a subgrid based on lookup fields.

Display relevant data without manual searches.

Improve user experience and data accuracy.

Prerequisites

Before implementing this functionality, ensure that you:

Have access to Power Apps and Microsoft Dataverse.

Have a Bookable Resource Booking form with a subgrid.

Have Project (msdyn_project) and Work Order (msdyn_workorder) lookup fields in the form.

How It Works

The JavaScript function dynamically filters the subgrid by checking whether the Project or Work Order lookup fields are populated. The function applies the corresponding FetchXML filter and refreshes the subgrid.

Installation

Download the JavaScript file from filterBookableResourceSubgrid.js.

Upload the JavaScript file as a web resource in Power Platform:

Navigate to Solutions in Power Apps.

Add a JavaScript Web Resource.

Upload the JavaScript file.

Attach the function to Lookup Field Events:

Open the Bookable Resource Booking form.

Add the filterBookableResourceSubgrid function to the OnChange event of both the Project and Work Order lookup fields.

Save and publish the customizations.

Testing the Implementation

Scenario 1: Populate the Project field and leave Work Order empty → Subgrid should show records filtered by Project.

Scenario 2: Populate the Work Order field and leave Project empty → Subgrid should show records filtered by Work Order.

Scenario 3: Leave both fields empty → Subgrid should show no records.

Benefits of Dynamic Filtering

✅ Improves Usability – Users see only relevant data.
✅ Enhances Data Accuracy – Ensures users interact with valid records.
✅ Streamlines Workflows – Reduces the need for manual searches.

Contributing

If you have any improvements or suggestions, feel free to submit a Pull Request or open an Issue.

**Haseeb Ahmad**
