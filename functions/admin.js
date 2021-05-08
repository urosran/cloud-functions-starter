const admin = require('firebase-admin');

const serviceAccount = require("./jsFunctions/keys/lovelocal-24df9-firebase-adminsdk-pkpu6-05ca5be417.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});
const settings = {
    timestampsInSnapshots: true,
};

const db = admin.firestore();
db.settings(settings);

const auth = admin.auth();

module.exports = {
    db, auth
};
