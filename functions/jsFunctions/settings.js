exports.initializeAdmin = function initializeAdmin() {
    console.log("Inside Initialize Firestore Method")
    const admin = require("firebase-admin");
    const serviceAccount = require("./keys/lovelocal-24df9-firebase-adminsdk-pkpu6-05ca5be417.json");
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
    });
    return admin;
};
