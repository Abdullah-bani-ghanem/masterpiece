const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
router.get("/check-auth", userController.checkAuth);
// المسارات
router.post("/register", userController.register);  // التسجيل
router.post("/login", userController.login);        // تسجيل الدخول
router.post("/logout", userController.logout);        // تسجيل الدخول

module.exports = router;
