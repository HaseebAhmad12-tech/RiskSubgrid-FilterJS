
function filterSubgridByProjectOrWorkOrder(executionContext) {
    try {
        var formContext = executionContext.getFormContext();

        // Retrieve lookup field values
        var projectField = formContext.getAttribute("msdyn_projectid");
        var workOrderField = formContext.getAttribute("cr31a_nsworkorder");

        var projectId = projectField && projectField.getValue() ? projectField.getValue()[0].id.replace(/[{}]/g, "") : null;
        var workOrderId = workOrderField && workOrderField.getValue() ? workOrderField.getValue()[0].id.replace(/[{}]/g, "") : null;

        // Get the subgrid control
        var subgrid = formContext.getControl("Risks"); // Replace "Risks" with your actual subgrid name

        if (subgrid) {
            let fetchXml = "";

            if (workOrderId) {
                // Filter by work order
                fetchXml = `
                    <fetch>
                        <entity name="msdyn_projectrisk">
                            <filter>
                                <condition attribute="cr31a_nsworkorder" operator="eq" value="${workOrderId}" />
                            </filter>
                        </entity>
                    </fetch>
                `;
            } else if (projectId) {
                // Filter by project
                fetchXml = `
                    <fetch>
                        <entity name="msdyn_projectrisk">
                            <filter>
                                <condition attribute="msdyn_project" operator="eq" value="${projectId}" />
                            </filter>
                        </entity>
                    </fetch>
                `;
            } else {
                // Show no records if both lookups are null
                fetchXml = `
                    <fetch>
                        <entity name="msdyn_projectrisk">
                            <filter>
                                <condition attribute="msdyn_project" operator="null" />
                                <condition attribute="cr31a_nsworkorder" operator="null" />
                            </filter>
                        </entity>
                    </fetch>
                `;
            }

            // Apply FetchXML filter and refresh the subgrid
            subgrid.setFilterXml(fetchXml);
            subgrid.refresh();
        } else {
            console.error("Subgrid control not found.");
        }
    } catch (error) {
        console.error("Error in filterSubgridByProjectOrWorkOrder function:", error);
    }
}
