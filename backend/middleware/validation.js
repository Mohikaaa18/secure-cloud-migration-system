const validateApplication = (req, res, next) => {

    const app = req.body;

    if (!app.applicationName) {
        return res.status(400).json({
            message: "Application name required"
        });
    }

    if (!app.owner) {
        return res.status(400).json({
            message: "Owner required"
        });
    }

    next();
};

const validateIncident = (req, res, next) => {

    const incident = req.body;

    if (!incident.description) {
        return res.status(400).json({
            message: "Incident description required"
        });
    }

    next();
};

module.exports = {
    validateApplication,
    validateIncident
};