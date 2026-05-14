const calculateReadiness = (
    app,
    incidents
) => {

    let riskScore = 0;

    const appIncidents =
    incidents.filter(
        incident =>
        incident.applicationId === app.id
    );

    const criticalIncident =
    appIncidents.find(
        incident =>
        incident.severity === "Critical" &&
        incident.currentStatus !== "Resolved"
    );

    if (criticalIncident) {

        riskScore += 50;
    }

    if (!app.backupStatus) {

        riskScore += 20;
    }

    if (!app.monitoringStatus) {

        riskScore += 20;
    }

    if (
        app.dataSensitivity ===
        "Confidential"
    ) {

        riskScore += 10;
    }

    if (app.dependencies > 5) {

        riskScore += 15;
    }

    let readiness;

    if (riskScore <= 20) {

        readiness = "Ready";
    }

    else if (riskScore <= 50) {

        readiness =
        "Partially Ready";
    }

    else {

        readiness = "Not Ready";
    }

    return {
        readiness,
        riskScore
    };
};

module.exports =
calculateReadiness;