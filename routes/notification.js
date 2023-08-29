const express = require("express");
const router = express.Router();
const admin = require('firebase-admin');

// Initialize the Firebase Admin SDK using service account credentials.
const serviceAccount = require('../service_account.json');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

// Check server response.
router.get("/check", (req, res) => {
    try {
        res.status(200).json({ message: 'success' });
    } catch (error) {
        res.status(500).json({ message: 'Error sending notification', error });
    }
})

// Handle notification sending.
router.post('/send-notification', async (req, res) => {
    try {
        const { registrationToken, title, body } = req.body;
        const message = {
            notification: { title, body },
            token: registrationToken,
        };
        const response = await admin.messaging().send(message);
        console.log('Notification sent:', response);
        res.status(200).json({ message: 'Notification sent successfully', response });
    } catch (error) {
        console.error('Error sending notification:', error);
        res.status(500).json({ message: 'Error sending notification', error });
    }
});

module.exports = router;