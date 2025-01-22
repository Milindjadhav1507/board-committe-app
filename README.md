# Project Name

## Overview
This project is built using Angular and leverages the Angular CLI to streamline development. It incorporates modern tooling to ensure robust and efficient application development.

---

## System Specifications

- **Angular CLI**: 17.3.11
- **Node.js**: 18.20.5
- **Package Manager**: npm 10.8.2
- **Operating System**: Windows OS (win32 x64)

---

## Angular Packages

| Package                     | Version    |
|-----------------------------|------------|
| @angular-devkit/architect   | 0.1703.11  |
| @angular-devkit/core        | 17.3.11    |
| @angular-devkit/schematics  | 17.3.11    |
| @angular/cli                | 17.3.11    |
| @schematics/angular         | 17.3.11    |

---

## Libraries Used

| Library           | Version    | Installation Command                        |
|-------------------|------------|--------------------------------------------|
| PrimeNG           | ^17.0.0    | `npm install primeng@^17.0.0 --save`       |
| PrimeIcons        | ^6.0.0     | `npm install primeicons@^6.0.0 --save`     |
| Bootstrap         | 5.3.3      | `npm i bootstrap@5.3.3`                    |
| Bootstrap Icons   | latest     | `npm i bootstrap-icons`                    |

---

## Core Features

- **Agenda and Board Book Builder**: Automatically generates and updates agendas and board books.
- **Agenda Time Management**: Efficiently manages meeting times and agenda items.
- **Unlimited Groups**: Allows for the creation of multiple groups within the system.
- **Mobile App Support**: Available on iOS, Android, and Windows Mobile.
- **Zoom Integration**: Seamlessly integrates with Zoom for virtual meetings.
- **News & Announcements**: A platform for sharing news and updates.
- **RSVP Tracking**: Tracks attendance and RSVPs for meetings.
- **Calendar Integration**: Syncs with calendars for easy scheduling.
- **Resource Library**: Stores essential documents and resources.
- **Homepage/Dashboard**: Provides a customizable landing page for users.
- **Document Markup & Annotation Tools**: Enables collaborative review and annotation of documents.
- **Advanced Search**: Powerful search capabilities to quickly find relevant materials.
- **Meeting Feedback**: Collects feedback post-meeting for continuous improvement.

---

## Add-ons

- **Voting & Approvals**: Facilitates decision-making within meetings.
- **Surveys**: Create and distribute surveys for gathering opinions or feedback.
- **eSignatures**: Integrates digital signing functionality for documents.
- **Minutes Builder**: Automatically generates meeting minutes.
- **Microsoft 365 Integration**: Syncs with Microsoft Office apps.
- **Roles & Terms**: Manages roles, terms, and tenure of board members.
- **Diversity Reporting**: Tracks diversity metrics for compliance and reporting.
- **Shared Annotations**: Collaborative document annotations across users.
- **In-app Messenger**: Messaging system for easy communication.
- **Task Management**: Assign and track tasks related to meetings.
- **Engagement Analytics**: Insights into member engagement and participation.
- **Public Posting**: Allows posting of public-facing content.
- **Skills Tracking**: Tracks members’ skills and qualifications.
- **Single Sign-On (SSO)**: Secure and simplified user authentication.
- **Board Assessments**: Tools for evaluating board performance.
- **D&O Questionnaire**: Collects director and officer questionnaires.
- **Agenda Collaboration**: Allows for real-time collaborative editing of agendas.
- **Linked Subsidiary Accounts**: Manages and links subsidiary boards to the main account.

---

## Prerequisites
Ensure the following are installed on your system:

1. **Node.js**: [Download](https://nodejs.org/)
2. **npm**: Comes with Node.js installation
3. **Angular CLI**: Install globally using:
   ```bash
   npm install -g @angular/cli@17.3.11
   ```

---

## Getting Started

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd <project-directory>
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Run the development server:
   ```bash
   ng serve
   ```

5. Open your browser and navigate to:
   ```
   http://localhost:4200/
   ```

---

## Additional Notes

- Ensure compatibility of Node.js and npm versions to avoid runtime issues.
- Use the Angular CLI commands for generating components, modules, and services.
- For production builds, execute:
  ```bash
  ng build --prod
  ```

---

## Application Configuration (For PrimeNG Libraries Imports)

### appConfig.ts

```typescript
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideAnimations()
  ]
};
```

---

## Author
[Milind Jadhav](https://github.com/Milindjadhav1507)

---

## License
This project is licensed under the [MIT License](LICENSE).
