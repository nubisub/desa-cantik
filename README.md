# Desa Cantik

## Overview

This project is designed to provide a seamless solution for managing and displaying data using Google Sheets as the database, Google Apps Script for automation, Next.js hosted on Vercel for the front-end, and Firebase for authentication. It allows easy data updates for your client while maintaining robust security and scalability.

## Table of Contents

- [Project Name](#desa-cantik)
  - [Overview](#overview)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Setup](#setup)
    - [Google Sheets Setup](#google-sheets-setup)
    - [Google Apps Script Setup](#google-apps-script-setup)
    - [Next.js Setup](#nextjs-setup)
    - [Firebase Setup](#firebase-setup)
  - [Usage](#usage)
  - [Deployment](#deployment)
  - [Contributing](#contributing)
  - [License](#license)

## Features
![Desa Cantik](/docs/app-architecture.svg)

- **Google Sheets Database**: Utilize Google Sheets as a database to easily update and manage data.
- **Google Apps Script**: Automate processes and data manipulation within Google Sheets.
- **Next.js Frontend**: Build a responsive and fast front-end using Next.js, hosted on Vercel.
- **Firebase Authentication**: Secure your application with Firebase authentication.

## Setup

### Google Sheets Setup

1. Create a Google Sheet document or use an existing one as your database.
2. Share the Google Sheet with the appropriate permissions to allow your client to update data.
3. Note the Google Sheet's ID from the URL (e.g., `https://docs.google.com/spreadsheets/d/SPREADSHEET_ID/edit`).

### Google Apps Script Setup

1. Open your Google Sheet.
2. Click on "Extensions" > "Apps Script" to open the Google Apps Script editor.
3. Write the necessary scripts to interact with your Google Sheet data and perform any required automations.

### Next.js Setup

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Run `npm install` to install project dependencies.
4. Update the environment variables in a `.env` file to include your Firebase configuration.
5. Customize the Next.js application to fetch data from Google Sheets and display it as needed.

### Firebase Setup

1. Set up a Firebase project on the [Firebase Console](https://console.firebase.google.com/).
2. Obtain the Firebase configuration object (apiKey, authDomain, projectId, etc.).
3. Configure Firebase authentication methods (e.g., email/password, Google sign-in) as per your requirements.
4. Update the Firebase configuration in your Next.js application's `.env` file.



## Usage


## Deployment

## Roadmap
- When data is bigger and need to be updated frequently, maybe we need to use database instead of google sheets because it will be slow to update the data


## Contributing

Provide guidelines for contributing to your project, including how to report issues and submit pull requests.

## License

This project is licensed under the terms of the [MIT License](https://opensource.org/licenses/MIT).
