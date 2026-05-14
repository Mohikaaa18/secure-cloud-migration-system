const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const appRoutes =
require("./routes/appRoutes");

const incidentRoutes =
require("./routes/incidentRoutes");

const reportRoutes =
require("./routes/reportRoutes");

app.use("/applications", appRoutes);

app.use("/incidents", incidentRoutes);

app.use("/reports", reportRoutes);

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});