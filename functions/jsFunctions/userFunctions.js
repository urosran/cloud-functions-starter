const functions = require('firebase-functions');
const axios = require('axios');
const cors = require('cors')({
    origin: true,
});

const {
    db, auth
} = require('../admin');

exports.templateFunction = functions.https.onRequest((request, response) => {
    cors(request, response, async () => {
        //Do something
        response.sendStatus(200)
    })
})
