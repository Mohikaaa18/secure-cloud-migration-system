const path = require("path");

const {
    readData
} = require("../utils/fileHandler");

const appPath =
path.join(__dirname, "../data/applications.json");

const incidentPath =
path.join(__dirname, "../data/incidents.json");

const getReport = (req, res) => {

    const apps = readData(appPath);
    const incidents = readData(incidentPath);

    const report = apps.map(app => {

        const appIncidents =
        incidents.filter(
            i => i.applicationId === app.id
        );

        return {
            application: app.applicationName,
            readiness: app.readiness,
            incidents: appIncidents.length
        };
    });

    res.json(report);
};

module.exports = {
    getReport
};