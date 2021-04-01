import firestoreService from "firestore-export-import";

import serviceAccount from "./serviceAccountKey.json";

// If you want to pass settings for firestore, you can add to the options parameters
const options = {
  firestore: {
    host: "gs://reactthreeobj.appspot.com",
    ssl: false,
  },
};

const db = "";

// Initiate Firebase App
firestoreService.initializeApp(serviceAccount, options);
firestoreService.restore("data.json");

// the appName & options are OPTIONAL
// you can initalize the app without them
// initializeApp(serviceAccount)
