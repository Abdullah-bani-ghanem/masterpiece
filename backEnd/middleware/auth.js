// const jwt = require("jsonwebtoken");

// const checkAuth = (req, res) => {
//     try {
//         const token = req.cookies.token; // استخراج التوكن من الكوكيز
//         if (!token) {
//             return res.status(401).json({ authenticated: false, message: "Unauthorized" });
//         }

//         const decoded = jwt.verify(token, process.env.JWT_SECRET); // فك تشفير التوكن
//         console.log(decoded,"decoded")
//         console.log(decoded,"decoded")
//         // استخراج بيانات المستخدم من التوكن
//         const user = {
//             id: decoded.id,
//             name: decoded.name,  // تأكد من أن الاسم موجود في التوكن عند إنشائه
//             email: decoded.email,
//         };

//         return res.json({
//             authenticated: true,
//             user: user, // إرسال بيانات المستخدم كاملة
//         });
//     } catch (error) {
//         return res.status(401).json({ authenticated: false, message: "Invalid token" });
//     }
// };

// module.exports = checkAuth;





// const jwt = require("jsonwebtoken");
// const User = require("../models/User");

// const checkAuth = async (req, res) => {
//   try {
//     const token = req.cookies.token;
//     if (!token) {
//       return res.status(401).json({ authenticated: false, message: "Unauthorized" });
//     }

//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     const user = await User.findById(decoded.id).select("-password");

//     if (!user) {
//       return res.status(404).json({ authenticated: false, message: "المستخدم غير موجود" });
//     }

//     return res.json({
//       authenticated: true,
//       user,
//     });
//   } catch (error) {
//     return res.status(401).json({ authenticated: false, message: "Invalid token" });
//   }
// };

// module.exports = checkAuth;




const jwt = require("jsonwebtoken");
const User = require("../models/User");

const protect = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ message: "Unauthorized" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id).select("-password");
    next();
  } catch (error) {
    res.status(401).json({ message: "Token failed" });
  }
};

const isAdmin = (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    next();
  } else {
    res.status(403).json({ message: "Access denied. Admins only." });
  }
};

module.exports = { protect, isAdmin };
