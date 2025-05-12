# Overview
This project is a **Hospital Patient Dashboard** built with Next.js (App Router), Tailwind CSS, and Supabase. It provides hospital staff with an interface to view patient statistics, browse patient records, and inspect individual patient details.

## find the live demo here [https://hospital-patient-dashboard.vercel.app](https://hospital-patient-dashboard.vercel.app)

### Features
- **Dashboard Overview:** Displays total patients, average age at first pregnancy, and male/female counts (fetched from the `basic_information` table in Supabase).  
- **Patient List:** Tabular view of all patients with a gender filter. Clickable Patient ID links to detail pages.  
- **Patient Detail:** Shows full details for an individual patient.

## Setup Instructions
1. **Clone the repository** and navigate into it:  
   ```
   git clone <repo-url>
   cd <project-directory>
   npm i
   npm run dev
   ```
