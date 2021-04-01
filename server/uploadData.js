const firestoreService = require("firestore-export-import");
const serviceAccount = require("./fbCred.json");

// If you want to pass settings for firestore, you can add to the options parameters
const options = {
  firestore: {
    host: "gs://reactthreeobj.appspot.com",
    ssl: false,
  },
};

const db = "";

const appName = "react-three-obj-viewer";

// Initiate Firebase App
firestoreService.initializeApp(serviceAccount);
firestoreService.restore('./data/data.json');

// the appName & options are OPTIONAL
// you can initalize the app without them
// initializeApp(serviceAccount)
