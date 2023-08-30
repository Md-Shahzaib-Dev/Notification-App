import { useEffect } from "react"
import { messaging } from "./config/firebase";
import { getToken } from "firebase/messaging";

const App = () => {

  // Request Notification Permissions:
  const requestPermission = async () => {
    // console.log('Requesting permission...');
    const permission = await Notification.requestPermission();
    if (permission === 'granted') {
      // console.log('Notification permission granted.');
      // Get the FCM Token:
      const token = await getToken(messaging, { vapidKey: "BMjv0Vwq3Omy1k7xFzi9bzRiGqOvLr61A7iZ2kv1iS5ZWR6wj_08YZBHAMDPHxT-euaUMT7Woa2zeTTkTMjkZyU" });
      if (!token) {
        return console.log('No registration token available. Request permission to generate one.');
      }
      // Send FCM Token To Server:
      sendTokenToServer(token);
      console.log('token => ', token);
    } else {
      console.log('Notification permission denied.');
    }
  }

  // Send the token to your server
  const sendTokenToServer = async (token) => {
    try {
      const response = await fetch('http://localhost:5000/notify/send-one', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token }), // Send the token to the server.
      });
      if (response.ok) {
        console.log('Token sent to server.');
      } else {
        console.log('Failed to send token to server.');
      }
    } catch (error) {
      console.log('Error sending token to server.', error);
    }
  };

  useEffect(() => {
    requestPermission();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="my-10 text-center bg-slate-200">Notification Client App</div>
  );
}

export default App;
