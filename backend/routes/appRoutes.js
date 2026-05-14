const express = require("express");

const router = express.Router();

const {
    getApplications,
    addApplication
} = require("../controllers/appController");

const roleCheck =
require("../middleware/roleCheck");

const {
    validateApplication
} = require("../middleware/validation");

router.get("/", getApplications);

router.post(
    "/",
    roleCheck(["Submitter", "Admin"]),
    validateApplication,
    addApplication
);

module.exports = router;