const express = require("express");

const router = express.Router();

const {
    getIncidents,
    addIncident
} = require("../controllers/incidentController");

const roleCheck =
require("../middleware/roleCheck");

const {
    validateIncident
} = require("../middleware/validation");

router.get("/", getIncidents);

router.post(
    "/",
    roleCheck(["Submitter", "Reviewer"]),
    validateIncident,
    addIncident
);

module.exports = router;