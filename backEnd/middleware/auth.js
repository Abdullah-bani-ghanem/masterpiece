const jwt = require("jsonwebtoken");

const checkAuth = (req, res) => {
    try {
        const token = req.cookies.token; // استخراج التوكن من الكوكيز
        if (!token) {
            return res.status(401).json({ authenticated: false, message: "Unauthorized" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET); // فك تشفير التوكن

        // استخراج بيانات المستخدم من التوكن
        const user = {
            id: decoded.id,
            name: decoded.name,  // تأكد من أن الاسم موجود في التوكن عند إنشائه
            email: decoded.email,
        };

        return res.json({
            authenticated: true,
            user: user, // إرسال بيانات المستخدم كاملة
        });
    } catch (error) {
        return res.status(401).json({ authenticated: false, message: "Invalid token" });
    }
};

module.exports = checkAuth;
