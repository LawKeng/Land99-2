// ตั้งค่า Firebase Config ที่นี่
// คุณต้องไปที่ https://console.firebase.google.com/
// แล้วสร้างโปรเจกต์ใหม่ เพื่อเอาค่า config จริงมาใส่

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
