# Secure Cloud Migration Readiness & Incident Tracking System

## Overview

The Secure Cloud Migration Readiness & Incident Tracking System is an enterprise-style governance dashboard developed to evaluate application readiness for cloud migration, track operational incidents, calculate migration risks, and generate governance reports.

The system provides a centralized platform for managing cloud migration workflows using lightweight technologies without requiring databases or complex cloud infrastructure.

---

# Features

## Application Inventory Management
- Add and manage applications
- Track application owners and dependencies
- Manage data sensitivity classification

## Migration Readiness Assessment
- Ready
- Partially Ready
- Not Ready

## Risk Evaluation Engine
- Automated risk score calculation
- Governance scoring
- Operational risk assessment

## Incident Management
- Track incidents
- Severity management
- Recovery tracking
- Status updates

## Governance Dashboard
- Total applications
- Ready applications
- Blocked applications
- Migration readiness percentage

## Role-Based Access Control (RBAC)
- Submitter
- Reviewer
- Admin

## Advanced UI Features
- Sidebar navigation
- Dashboard cards
- Readiness progress bar
- Search and filters
- Risk badges
- Dark mode
- Responsive enterprise UI

---

# Technologies Used

| Technology | Purpose |
|---|---|
| HTML | Frontend structure |
| CSS | Styling and UI |
| JavaScript | Frontend logic |
| Node.js | Backend runtime |
| Express.js | REST APIs |
| JSON | File-based storage |
| Nodemon | Development server |

---

# Project Architecture

Frontend (HTML/CSS/JavaScript)
↓
Express.js Backend APIs
↓
JSON File Storage

---

# Folder Structure

```plaintext
secure-cloud-migration-system/
│
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── middleware/
│   ├── utils/
│   ├── data/
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
└── README.md
```

---

# Installation & Setup

## Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/secure-cloud-migration-system.git
```

## Open Project

```bash
cd secure-cloud-migration-system/backend
```

## Install Dependencies

```bash
npm install
```

## Start Backend Server

```bash
npm run dev
```

Server runs on:

```bash
http://localhost:5000
```

---

# Run Frontend

Open:

```plaintext
frontend/index.html
```

using Live Server extension in VS Code.

---

# API Endpoints

## Applications

| Method | Endpoint | Description |
|---|---|---|
| GET | /applications | Fetch applications |
| POST | /applications | Add application |

## Incidents

| Method | Endpoint | Description |
|---|---|---|
| GET | /incidents | Fetch incidents |
| POST | /incidents | Add incident |

## Reports

| Method | Endpoint | Description |
|---|---|---|
| GET | /reports | Generate migration report |

---

# Readiness Logic

## Ready
- Backup enabled
- Monitoring enabled
- No critical incidents

## Partially Ready
- Missing monitoring
- Medium operational risk

## Not Ready
- Critical unresolved incidents
- Missing backup
- High operational risk

---

# Risk Scoring

| Score | Risk Level |
|---|---|
| 0–20 | Low |
| 21–50 | Medium |
| 51+ | High |

---

# Advanced Features

- Governance dashboard
- Migration readiness percentage
- Automated risk engine
- Search and filtering
- Dynamic risk badges
- Dark mode
- Enterprise dashboard UI
- Incident management workflows

---

# Future Enhancements

- MongoDB integration
- JWT authentication
- Cloud deployment
- AI-based risk prediction
- Real-time notifications
- PDF report export
- Kubernetes integration

---

# Learning Outcomes

This project demonstrates:
- REST API development
- Cloud governance concepts
- Risk management systems
- Role-based access control
- Enterprise dashboard development
- Incident tracking workflows

---

# Author

Mohika

---

# License

This project is developed for educational and portfolio purposes.
