const express = require("express");
const router = express.Router();
const admin = require('firebase-admin');

// Initialize the Firebase Admin SDK using service account credentials:
const serviceAccount = require('../service_account.json');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

// router.post('/send-notification', (req, res) => {
//     const registrationToken = 'device_registration_token_here';
//     const message = {
//         notification: {
//             title: 'Test Notification Title',
//             body: 'Test Notification Body',
//         },
//         token: registrationToken,
//     };
//     admin.messaging().send(message)
//         .then((response) => {
//             console.log('Successfully sent notification:', response);
//             res.status(200).json({ message: 'Notification sent successfully', response });
//         })
//         .catch((error) => {
//             console.log('Error sending notification:', error);
//             res.status(500).json({ message: 'Error sending notification', error });
//         });
// });


router.post('/send-notification', (req, res) => {
    const registrationToken = req.body.registrationToken;
    const message = {
        notification: {
            title: 'Test Notification Title',
            body: 'Test Notification Body',
        },
        token: registrationToken,
    };


    console.log(message)
    console.log(registrationToken)


    admin.messaging().send(message)
        .then((response) => {
            console.log('Successfully sent notification:', response);
            res.status(200).json({ message: 'Notification sent successfully', response });
        })
        .catch((error) => {
            console.log('Error sending notification:', error);
            res.status(500).json({ message: 'Error sending notification', error });
        });
});

module.exports = router;