const Car = require("../models/Car");

// جلب جميع السيارات
exports.getAllCars = async (req, res) => {
    try {
        const cars = await Car.find();
        res.status(200).json(cars);
    } catch (error) {
        res.status(500).json({ message: "خطأ في جلب البيانات", error });
    }
};

// جلب سيارة معينة
exports.getCarById = async (req, res) => {
    try {
        const car = await Car.findById(req.params.id);
        if (!car) return res.status(404).json({ message: "السيارة غير موجودة" });
        res.status(200).json(car);
    } catch (error) {
        res.status(500).json({ message: "خطأ في جلب السيارة", error });
    }
};

// إضافة سيارة جديدة
exports.createCar = async (req, res) => {
    try {
        const newCar = new Car(req.body);
        await newCar.save();
        res.status(201).json(newCar);
    } catch (error) {
        res.status(500).json({ message: "خطأ في إضافة السيارة", error });
    }
};

// تعديل بيانات سيارة
exports.updateCar = async (req, res) => {
    try {
        const updatedCar = await Car.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedCar) return res.status(404).json({ message: "السيارة غير موجودة" });
        res.status(200).json(updatedCar);
    } catch (error) {
        res.status(500).json({ message: "خطأ في تحديث السيارة", error });
    }
};

// حذف سيارة
exports.deleteCar = async (req, res) => {
    try {
        const deletedCar = await Car.findByIdAndDelete(req.params.id);
        if (!deletedCar) return res.status(404).json({ message: "السيارة غير موجودة" });
        res.status(200).json({ message: "تم حذف السيارة بنجاح" });
    } catch (error) {
        res.status(500).json({ message: "خطأ في حذف السيارة", error });
    }
};
