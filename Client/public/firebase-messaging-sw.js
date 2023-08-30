importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js");

const firebaseConfig = {
    apiKey: "AIzaSyCZV6rhnHzbuwBrHqBAv8xxcddKuKsvbYA",
    authDomain: "notify-client-db165.firebaseapp.com",
    projectId: "notify-client-db165",
    storageBucket: "notify-client-db165.appspot.com",
    messagingSenderId: "82906327348",
    appId: "1:82906327348:web:6ab5319659607b70f69d61",
    measurementId: "G-CP2J25FJGH"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log("[firebase-messaging-sw.js] Received background message SHAHZAIB HERE", payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: payload.notification.image,
    };
    self.registration.showNotification(notificationTitle, notificationOptions);
});