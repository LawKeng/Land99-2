# Land99-2 Web Project

โปรเจกต์เว็บไซต์แผนที่แปลงที่ดิน พร้อมระบบล็อกอิน และแสดงข้อมูลจาก Google Sheets

---

## โครงสร้างโปรเจกต์

- `index.html` : หน้าแสดงแผนที่และตารางข้อมูล
- `login.html` : หน้าเข้าสู่ระบบ (Login)
- `style.css` : ไฟล์ตกแต่งหน้าตา
- `app.js` : สคริปต์ควบคุมระบบล็อกอิน ดึงข้อมูล และค้นหา
- `firebase-config.js` : ตั้งค่า Firebase Authentication
- `LandPlan.svg` : ไฟล์แผนที่ SVG ของคุณ

---

## วิธีเซ็ตระบบ

### 1. ตั้งค่า Firebase Authentication

1. เข้าไปที่ [Firebase Console](https://console.firebase.google.com/)
2. กด "สร้างโปรเจกต์ใหม่" ➔ ตั้งชื่อโปรเจกต์
3. ไปที่ **Authentication** > เปิดใช้งานระบบล็อกอินด้วย Email/Password
4. เพิ่มผู้ใช้ใหม่ (Email ของคุณ + Password ตามที่ตั้ง)
5. คัดลอก **Firebase Config** มาใส่ในไฟล์ `firebase-config.js`

ตัวอย่าง Config:
```javascript
const firebaseConfig = {
  apiKey: "xxxxxx",
  authDomain: "xxxxx.firebaseapp.com",
  projectId: "xxxxx",
  storageBucket: "xxxxx.appspot.com",
  messagingSenderId: "xxxxx",
  appId: "xxxxx"
};
