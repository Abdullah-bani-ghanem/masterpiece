


const Car = require("../models/Car");

// 1. إضافة سيارة جديدة من قبل المستخدم
exports.addCar = async (req, res) => {
  try {
    const { name, brand, model, year, price, condition, images, description } = req.body;

    const newCar = new Car({
      name,
      brand,
      model,
      year,
      price,
      condition,
      images,
      description,
      seller: req.user._id, // تأكد أن الـ middleware يضيف req.user
    });

    await newCar.save();
    res.status(201).json({ message: "تم إرسال السيارة للمراجعة", car: newCar });
  } catch (err) {
    res.status(500).json({ message: "فشل الإرسال", error: err.message });
  }
};





// 2. جلب كل السيارات المعلّقة (للأدمن)
exports.getPendingCars = async (req, res) => {
  try {
    const cars = await Car.find({ status: "pending" }).populate("seller", "name email");
    res.status(200).json(cars);
  } catch (err) {
    res.status(500).json({ message: "حدث خطأ أثناء الجلب", error: err.message });
  }
};




// 3. موافقة أو رفض السيارة
exports.approveOrRejectCar = async (req, res) => {
  try {
    const { id } = req.params;
    const { status, adminNote } = req.body;

    if (!["approved", "rejected"].includes(status)) {
      return res.status(400).json({ message: "الحالة غير صحيحة" });
    }

    const updatedCar = await Car.findByIdAndUpdate(
      id,
      { status, adminNote, updatedAt: Date.now() },
      { new: true }
    );

    if (!updatedCar) return res.status(404).json({ message: "السيارة غير موجودة" });

    res.status(200).json({ message: `تم ${status === "approved" ? "الموافقة" : "الرفض"}`, car: updatedCar });
  } catch (err) {
    res.status(500).json({ message: "فشل التحديث", error: err.message });
  }
};




// 4. تعديل بيانات السيارة من قبل الأدمن
exports.updateCarByAdmin = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    const updatedCar = await Car.findByIdAndUpdate(id, { ...updates, updatedAt: Date.now() }, { new: true });

    if (!updatedCar) return res.status(404).json({ message: "السيارة غير موجودة" });

    res.status(200).json({ message: "تم تعديل بيانات السيارة", car: updatedCar });
  } catch (err) {
    res.status(500).json({ message: "فشل التحديث", error: err.message });
  }
};



exports.getCarById = async (req, res) => {
    try {
      const car = await Car.findById(req.params.id).populate("seller", "name email");
      if (!car) return res.status(404).json({ message: "السيارة غير موجودة" });
  
      res.status(200).json(car);
    } catch (error) {
      res.status(500).json({ message: "فشل في جلب بيانات السيارة", error: error.message });
    }
  };
  


  exports.getAllCarsForAdmin = async (req, res) => {
    try {
      const filter = req.query.status ? { status: req.query.status } : {};
  
      const cars = await Car.find(filter).populate("seller", "name email");
  
      res.status(200).json(cars);
    } catch (error) {
      console.error("❌ getAllCarsForAdmin ERROR:", error.message);
      res.status(500).json({ message: "فشل في جلب السيارات", error: error.message });
    }
  };
  


// إنشاء طلب سيارة من المستخدم (بانتظار الموافقة)
exports.submitCarRequest = async (req, res) => {
    try {
      const {
        make,
        model,
        year,
        color,
        licensePlate,
        mileage,
        fuelType,
        transmission,
        price,
        condition,
        description,
      } = req.body;
  
      const imageFilenames = req.files.map(file => file.filename); // ✅ دعم صور متعددة
  
      const newCar = new Car({
        name: `${make} ${model}`,
        brand: make,
        model,
        year: parseInt(year),
        color,
        licensePlate,
        mileage: parseInt(mileage),
        fuelType,
        transmission,
        price: parseFloat(price),
        condition,
        description,
        images: imageFilenames,
        seller: req.user._id,
        status: "pending",
      });
  
      await newCar.save();
  
      res.status(201).json({ message: "🚗 تم حفظ السيارة بنجاح", car: newCar });
    } catch (error) {
      console.error("❌ Error saving car:", error.message);
      res.status(500).json({ message: "خطأ في حفظ السيارة", error: error.message });
    }
  };
  


  // الموافقة على سيارة وتعديلها
  exports.approveAndEditCar = async (req, res) => {
    try {
      const car = await Car.findById(req.params.id);
      if (!car) return res.status(404).json({ message: "السيارة غير موجودة" });
  
      // تحديث معلومات السيارة من البودي
      Object.assign(car, req.body);
      car.approved = true;
  
      await car.save();
      res.json({ message: "تمت الموافقة على السيارة وتحديثها", car });
    } catch (error) {
      res.status(500).json({ message: "خطأ أثناء الموافقة أو التعديل", error });
    }
  };
  




  // ✅ جلب كل السيارات مع فلترة اختيارية (status)
exports.getAllCars = async (req, res) => {
    try {
      const { status } = req.query;
      const query = status ? { status } : {};
  
      const cars = await Car.find(query).populate("seller", "name email");
      res.status(200).json(cars);
    } catch (err) {
      res.status(500).json({ message: "فشل في جلب السيارات", error: err.message });
    }
  };
  


// عرض جميع السيارات المعتمدة
exports.getApprovedCars = async (req, res) => {
    try {
      const cars = await Car.find({ status: "approved" }); // جلب السيارات المعتمدة فقط
      if (!cars || cars.length === 0) {
        return res.status(404).json({ message: "No approved cars found" });
      }
      res.json(cars); // إرجاع السيارات في الاستجابة
    } catch (error) {
      res.status(500).json({ message: "Server error", error: error.message });
    }
  };