import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const CarView = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state?.car) {
    return <div className="text-center text-red-600 mt-10">لا توجد بيانات لعرضها.</div>;
  }

  const {
    name,
    brand,
    model,
    year,
    price,
    condition,
    description,
    color,
    fuelType,
    transmission,
    licensePlate,
    mileage,
    status,
    images,
    seller
  } = state.car;

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4 text-center">معلومات السيارة</h2>

      {images && images.length > 0 && (
        <div className="grid grid-cols-2 gap-4 mb-6">
          {images.map((img, idx) => (
            <img
              key={idx}
              src={`http://localhost:5000/uploads/${img}`}
              alt="صورة السيارة"
              className="w-full h-64 object-cover rounded"
            />
          ))}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div><strong>الاسم:</strong> {name}</div>
        <div><strong>النوع:</strong> {brand}</div>
        <div><strong>الموديل:</strong> {model}</div>
        <div><strong>السنة:</strong> {year}</div>
        <div><strong>السعر:</strong> ${price}</div>
        <div><strong>الحالة:</strong> {condition}</div>
        <div><strong>الوصف:</strong> {description}</div>
        <div><strong>اللون:</strong> {color}</div>
        <div><strong>نوع الوقود:</strong> {fuelType}</div>
        <div><strong>نظام النقل:</strong> {transmission}</div>
        <div><strong>لوحة السيارة:</strong> {licensePlate}</div>
        <div><strong>المسافة المقطوعة:</strong> {mileage} كم</div>
        <div><strong>الحالة الإدارية:</strong> {status}</div>
        {seller && (
          <div className="md:col-span-2 bg-gray-100 p-4 rounded mt-4">
            <h3 className="font-bold mb-1">بيانات البائع:</h3>
            <p><strong>الاسم:</strong> {seller.name}</p>
            <p><strong>البريد:</strong> {seller.email}</p>
          </div>
        )}
      </div>

      <div className="text-center mt-6">
        <button
          className="bg-gray-700 text-white px-6 py-2 rounded hover:bg-gray-800"
          onClick={() => navigate(-1)}
        >
          🔙 عودة
        </button>
      </div>
    </div>
  );
};

export default CarView;
