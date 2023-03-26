## To run this project

First, make sure all the configurations are done. Below the required configurations guide.

## GA4

Go to https://console.cloud.google.com/

1. Select project
2. Click on Navigation menu (hamburger menu to the left)
3. API and Services > Enabled APIs and services > Search bar: Google Analytics Data API > Enable
4. Inside Google Analytics Data API > Credentials > Create Credentials > Service account > provide service account name (ID gets auto generated)
5. Click on Done
6. Click on new service account > KEYS > ADD KEY > Create new key
7. Save .json file

Go to https://analytics.google.com/

1. Select project
2. Click on Admin > Property Access Management > Add (plus icon)
3. Add Service Account email from previous step on Google Cloud (ends with .iam.gserviceaccount.com) with Viewer role

YouTube Tutorial: [How to use Google Analytics Reporting API with Nodejs | TutsCoder](https://www.youtube.com/watch?v=2qa98xBSivw)

## Firebase

Go to https://firebase.google.com/ and get started

1. Select project
2. Click on Project settings > Service accounts > Generate new private key
3. Copy databaseURL

## ENV file

With about Keys fill in the following:

```
HOST= // localhost:3000

GSA_CLIENT_EMAIL= // Google Service Account for GA4
GSA_PRIVATE_KEY= // Google Service Account for GA4

FIREBASE_PROJECT_ID=
FIREBASE_PRIVATE_KEY=
FIREBASE_CLIENT_EMAIL=
FIREBASE_DB_URL=
```

## Vercel

Private keys have unix "\n" new lines, not needed on Vercel.

## Run Project

```
npm i
```

Then

```
npm run dev
```
