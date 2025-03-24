require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const cookieParser = require("cookie-parser");

const app = express();

// 📌 تفعيل قراءة JSON والكوكيز
app.use(express.json());
app.use(cookieParser());

// 📌 إعداد CORS للسماح بالطلبات من React مع الكوكيز
app.use(
  cors({
    origin: "http://localhost:5173", // السماح فقط لواجهة React
    credentials: true, // السماح بإرسال الكوكيز
  })
);

// 📌 توصيل قاعدة البيانات
connectDB();

// 📌 تحميل المسارات
const carRoutes = require("./routes/carRoutes");
const userRoutes = require("./routes/userRoutes");
app.use('/api', require('./routes/contactRoutes'));

app.use("/api/cars", carRoutes);
app.use("/api/users", userRoutes);

// 📌 تشغيل السيرفر
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));














// require("dotenv").config();
// const express = require("express");
// const cors = require("cors");
// const connectDB = require("./config/db");
// const cookieParser = require("cookie-parser");
// // require('./models');

// const app = express();
// app.use(express.json());
// app.use(cookieParser());


// const carRoutes = require("./routes/carRoutes");
// const userRoutes = require("./routes/userRoutes");////////////



// // const path = require("path");


// app.use("/api/cars", carRoutes);
// app.use("/api/users", userRoutes);/////////////////

// // app.use("/uploads", express.static(path.join(__dirname, "uploads")));
// // يجعل مجلد uploads متاحًا عبر HTTP، بحيث يمكن الوصول إلى الملفات المرفوعة.



// // يسمح للخادم بقراءة الكوكيز (Cookies) التي يرسلها المستخدم في الطلبات


// app.use(
//   cors({
//     origin: (_, callback) => {
//       callback(null, true);
//     },
//     credentials: true,
//   })
// );
// connectDB();





// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

