const path = require("path");

const {
    readData,
    writeData
} = require("../utils/fileHandler");

const incidentPath =
path.join(__dirname, "../data/incidents.json");

const getIncidents = (req, res) => {

    const incidents =
    readData(incidentPath);

    res.json(incidents);
};

const addIncident = (req, res) => {

    const incidents =
    readData(incidentPath);

    const newIncident = {
        id: Date.now(),
        ...req.body
    };

    incidents.push(newIncident);

    writeData(incidentPath, incidents);

    res.json({
        message: "Incident Logged",
        incident: newIncident
    });
};

module.exports = {
    getIncidents,
    addIncident
};