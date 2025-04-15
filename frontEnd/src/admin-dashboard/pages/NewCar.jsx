// // src/admin-dashboard/pages/NewCar.jsx
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const NewCar = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     price: "",
//     status: "Available",
//   });

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // ⚠️ هنا تقدر تضيف طلب API لارسال البيانات إلى الباك اند
//     console.log("تم إرسال البيانات:", formData);

//     // بعد الحفظ نرجع لصفحة السيارات
//     navigate("/admin-dashboard/cars");
//   };

//   return (
//     <div>
//       <h2 className="text-2xl font-bold mb-6">إضافة سيارة جديدة</h2>
//       <form onSubmit={handleSubmit} className="bg-white shadow-md rounded p-6 space-y-4 max-w-lg">
//         <div>
//           <label className="block font-medium mb-1">اسم السيارة</label>
//           <input
//             type="text"
//             name="name"
//             required
//             className="w-full border border-gray-300 rounded p-2"
//             onChange={handleChange}
//           />
//         </div>

//         <div>
//           <label className="block font-medium mb-1">السعر</label>
//           <input
//             type="text"
//             name="price"
//             required
//             className="w-full border border-gray-300 rounded p-2"
//             onChange={handleChange}
//           />
//         </div>

//         <div>
//           <label className="block font-medium mb-1">الحالة</label>
//           <select
//             name="status"
//             className="w-full border border-gray-300 rounded p-2"
//             onChange={handleChange}
//           >
//             <option value="Available">متاحة</option>
//             <option value="Sold">مباعة</option>
//           </select>
//         </div>

//         <button
//           type="submit"
//           className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
//         >
//           حفظ السيارة
//         </button>
//       </form>
//     </div>
//   );
// };

// export default NewCar;


// admin-dashboard/pages/AddCar.jsx
import { useState } from "react";

const AddCar = () => {
  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    model: "",
    year: "",
    price: "",
    image: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData();
      for (const key in formData) {
        data.append(key, formData[key]);
      }

      const res = await fetch("http://localhost:5000/api/cars", {
        method: "POST",
        body: data,
      });

      const result = await res.json();
      if (res.ok) {
        alert("تمت إضافة السيارة بنجاح!");
        setFormData({
          name: "",
          brand: "",
          model: "",
          year: "",
          price: "",
          image: "",
          description: "",
        });
      } else {
        alert(result.message || "فشل في الإضافة");
      }
    } catch (err) {
      console.error(err);
      alert("حدث خطأ أثناء الإضافة");
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">إضافة سيارة جديدة</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="اسم السيارة"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="brand"
          placeholder="الماركة"
          value={formData.brand}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="model"
          placeholder="الموديل"
          value={formData.model}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="number"
          name="year"
          placeholder="سنة الصنع"
          value={formData.year}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="number"
          name="price"
          placeholder="السعر"
          value={formData.price}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <textarea
          name="description"
          placeholder="وصف السيارة"
          value={formData.description}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          rows="4"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          إضافة السيارة
        </button>
      </form>
    </div>
  );
};

export default AddCar;
