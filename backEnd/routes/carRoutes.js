const express = require("express");
const router = express.Router();
const carController = require("../controllers/carController");
const verifyToken = require("../middleware/auth");

// المسارات
router.get("/", carController.getAllCars);       // جلب جميع السيارات
router.get("/:id", carController.getCarById);   // جلب سيارة معينة
// router.post("/", carController.createCar);      // إضافة سيارة جديدة
// router.put("/:id", carController.updateCar);    // تعديل بيانات سيارة
router.delete("/:id", carController.deleteCar); // حذف سيارة



// إضافة سيارة جديدة فقط للبائعين
router.post("/", verifyToken, (req, res, next) => {
    if (req.userRole !== "seller") {
        return res.status(403).json({ message: "غير مسموح لك بإضافة سيارة" });
    }
    next();
}, carController.createCar);



// تعديل سيارة فقط للبائعين
router.put("/:id", verifyToken, (req, res, next) => {
    if (req.userRole !== "seller") {
        return res.status(403).json({ message: "غير مسموح لك بتعديل السيارة" });
    }
    next();
}, carController.updateCar);

module.exports = router;