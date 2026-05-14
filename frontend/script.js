const API =
"http://localhost:5000/applications";

async function fetchApplications() {

    try {

        const response =
        await fetch(API);

        const apps =
        await response.json();

        const container =
        document.getElementById(
            "applications"
        );

        container.innerHTML = "";

        let readyCount = 0;
        let blockedCount = 0;

        apps.forEach(app => {

            // Risk Badge Color
            let badgeColor = "green";

            if (app.riskScore > 50) {

                badgeColor = "red";
            }

            else if (app.riskScore > 20) {

                badgeColor = "orange";
            }

            // Count Readiness
            if (
                app.readiness === "Ready"
            ) {
                readyCount++;
            }

            if (
                app.readiness ===
                "Not Ready"
            ) {
                blockedCount++;
            }

            container.innerHTML += `

            <div class="card">

                <h2>
                    ${app.applicationName}
                </h2>

                <p>
                    <strong>Owner:</strong>
                    ${app.owner}
                </p>

                <p>
                    <strong>Status:</strong>
                    ${app.readiness}
                </p>

                <p>
                    <strong>Risk Score:</strong>

                    <span
                    style="
                    background:${badgeColor};
                    color:white;
                    padding:5px 12px;
                    border-radius:20px;
                    font-weight:bold;
                    "
                    >

                    ${app.riskScore}

                    </span>
                </p>

                <p>
                    <strong>Data Sensitivity:</strong>
                    ${app.dataSensitivity}
                </p>

                <p>
                    <strong>Dependencies:</strong>
                    ${app.dependencies}
                </p>

            </div>
            `;
        });

        // Dashboard Metrics
        document.getElementById(
            "totalApps"
        ).innerText =
        apps.length;

        document.getElementById(
            "readyApps"
        ).innerText =
        readyCount;

        document.getElementById(
            "blockedApps"
        ).innerText =
        blockedCount;

        // Update Readiness Bar
        updateReadinessPercentage(apps);

    }

    catch (error) {

        console.log(
            "Error fetching applications",
            error
        );
    }
}

async function addApplication() {

    try {

        const applicationName =
        document.getElementById(
            "appName"
        ).value;

        const owner =
        document.getElementById(
            "owner"
        ).value;

        const dataSensitivity =
        document.getElementById(
            "dataSensitivity"
        ).value;

        const dependencies =
        parseInt(
            document.getElementById(
                "dependencies"
            ).value
        );

        const backupStatus =
        document.getElementById(
            "backupStatus"
        ).checked;

        const monitoringStatus =
        document.getElementById(
            "monitoringStatus"
        ).checked;

        await fetch(API, {

            method: "POST",

            headers: {

                "Content-Type":
                "application/json",

                role: "Submitter"
            },

            body: JSON.stringify({

                applicationName,

                owner,

                dataSensitivity,

                dependencies,

                backupStatus,

                monitoringStatus
            })
        });

        // Clear Form
        document.getElementById(
            "appName"
        ).value = "";

        document.getElementById(
            "owner"
        ).value = "";

        document.getElementById(
            "dependencies"
        ).value = "";

        fetchApplications();
    }

    catch (error) {

        console.log(
            "Error adding application",
            error
        );
    }
}

function updateReadinessPercentage(apps) {

    let totalScore = 0;

    apps.forEach(app => {

        if (
            app.readiness === "Ready"
        ) {

            totalScore += 100;
        }

        else if (
            app.readiness ===
            "Partially Ready"
        ) {

            totalScore += 60;
        }

        else {

            totalScore += 20;
        }
    });

    const percentage =
    apps.length > 0
    ?
    Math.round(
        totalScore / apps.length
    )
    :
    0;

    const progressBar =
    document.getElementById(
        "progressBar"
    );

    progressBar.style.width =
    percentage + "%";

    progressBar.innerText =
    percentage + "% Ready";

    // Dynamic Colors
    if (percentage >= 80) {

        progressBar.style.background =
        "green";
    }

    else if (percentage >= 50) {

        progressBar.style.background =
        "orange";
    }

    else {

        progressBar.style.background =
        "red";
    }
}
container.innerHTML += `
<div class="card">

    <h3>
        ${app.applicationName}
    </h3>

    <p>
        Owner:
        ${app.owner}
    </p>

    <p>
        Readiness:
        ${app.readiness}
    </p>

    <p>
        Risk Score:
        ${app.riskScore}
    </p>

</div>
`;
// Initial Load
fetchApplications();