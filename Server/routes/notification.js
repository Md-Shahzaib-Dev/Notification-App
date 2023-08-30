const express = require("express");
const router = express.Router();
const admin = require('firebase-admin');

// Initialize the Firebase Admin SDK using service account credentials.
const serviceAccount = require('../service_account.json');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

// Send messages to specific devices.
router.post('/send-one', async (req, res) => {
    try {
        // const { registrationToken, title, body } = req.body;
        const { token } = req.body;
        const message = {
            notification: { title: "title", body: "body" },
            token: token,
        };

        // console.log("registrationToken ==> ", registrationToken, "title ==> ", title, "body ==> ", body);
        console.log("token ==> ", token, "message ==> ", message);

        const response = await admin.messaging().send(message);
        console.log('Notification sent:', response);
        res.status(200).json({ message: 'Notification sent successfully', response });
    } catch (error) {
        console.error('Error sending notification:', error);
        res.status(500).json({ message: 'Error sending notification', error });
    }
});


// Send messages to multiple devices.
// router.post('/send-multiple', async (req, res) => {
//     try {
//         const { registrationTokens, title, body } = req.body;
//         const message = {
//             notification: { title, body },
//             token: registrationTokens,
//         };
//         const response = await admin.messaging().sendEachForMulticast(message);

//         // if (response.failureCount > 0) {
//         //     const failedTokens = [];
//         //     response.responses.forEach((resp, idx) => {
//         //       if (!resp.success) {
//         //         failedTokens.push(registrationTokens[idx]);
//         //       }
//         //     });
//         //     console.log('List of tokens that caused failures: ' + failedTokens);
//         //   }


//         console.log('Notification sent:', response);
//         res.status(200).json({ message: 'Notification sent successfully', response });
//     } catch (error) {
//         console.error('Error sending notification:', error);
//         res.status(500).json({ message: 'Error sending notification', error });
//     }
// });

module.exports = router;