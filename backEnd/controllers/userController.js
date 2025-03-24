const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  const { name, email, password, role } = req.body;

  try {
      const existingUser = await User.findOne({ email });
      if (existingUser) {
          return res.status(400).json({ message: "البريد الإلكتروني مستخدم بالفعل" });
      }

      const newUser = new User({ name, email, password, role });
      await newUser.save();

      // إنشاء التوكن
      const token = jwt.sign({ id: newUser._id, role: newUser.role, }, process.env.JWT_SECRET, { expiresIn: "1h" });

      // تخزين التوكن في الكوكيز
      res.cookie("token", token, {
          httpOnly: true,  // لا يمكن الوصول إليه من JavaScript في المتصفح
          secure: false,   // عند التطوير، ولكن يجب أن يكون `true` في الإنتاج مع HTTPS
          sameSite: "lax", // منع مشكلات CORS
          maxAge: 3600000  // مدة الصلاحية: 1 ساعة
      });

      res.status(201).json({ message: "تم التسجيل بنجاح" });
  } catch (error) {
      res.status(500).json({ message: "خطأ في التسجيل", error });
  }
};


exports.login = async (req, res) => {
    const { email, password } = req.body;
    
    try {
      // العثور على المستخدم بواسطة البريد الإلكتروني
      const user = await User.findOne({ email });
      
      if (!user) {
        return res.status(400).json({ message: "البريد الإلكتروني أو كلمة المرور غير صحيحة" });
      }
      
      // التحقق من كلمة المرور
      const isMatch = await user.matchPassword(password);  // تأكد من وجود هذه الدالة في النموذج
      
      if (!isMatch) {
        return res.status(400).json({ message: "البريد الإلكتروني أو كلمة المرور غير صحيحة" });
      }
  
      // إذا كانت كلمة المرور صحيحة، قم بإنشاء توكن JWT
      const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "1h" });

      // console.log("Token:", token);  // تأكد من أن التوكن يتم إنشاؤه بنجاح
          // تخزين التوكن في الكوكيز
    res.cookie("token", token, {
        httpOnly: true,  // لا يمكن الوصول إليه من الجافا سكريبت
        secure: false,
        maxAge: 3600000,  // 1 ساعة (تحديد صلاحية الكوكيز)
      });

      res.status(200).json({ message: "تم تسجيل الدخول بنجاح", token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "حدث خطأ غير متوقع" });
    }
  };
  


  exports.logout = (req, res) => {
    res.clearCookie("token", {
        httpOnly: true,
        secure: false, // اجعلها `true` إذا كنت تستخدم HTTPS
        sameSite: "lax",
    });
    res.json({ message: "تم تسجيل الخروج بنجاح" });
};


  exports.checkAuth = (req, res) => {
    const token = req.cookies.token;

    if (!token) {
        return res.json({ authenticated: false });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        res.json({ authenticated: true, user: decoded });
    } catch (error) {
        res.json({ authenticated: false });
    }
};
