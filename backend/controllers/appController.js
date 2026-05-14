const path = require("path");

const {
    readData,
    writeData
} = require("../utils/fileHandler");

const calculateReadiness = require("../utils/readinessCalculator");

const appPath = path.join(__dirname, "../data/applications.json");
const incidentPath = path.join(__dirname, "../data/incidents.json");

const getApplications = (req, res) => {

    const apps = readData(appPath);

    res.json(apps);
};

const addApplication = (req, res) => {

    const apps = readData(appPath);
    const incidents = readData(incidentPath);

    const result =
calculateReadiness(
    newApp,
    incidents
);

newApp.readiness =
result.readiness;

newApp.riskScore =
result.riskScore;

    apps.push(newApp);

    writeData(appPath, apps);

    res.json({
        message: "Application Added",
        app: newApp
    });
};

module.exports = {
    getApplications,
    addApplication
};