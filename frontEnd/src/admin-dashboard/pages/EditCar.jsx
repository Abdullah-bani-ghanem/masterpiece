import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditCarAdmin = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [car, setCar] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCar = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(`/api/cars/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setCar(res.data);
      } catch (err) {
        setError("فشل في تحميل بيانات السيارة");
      } finally {
        setLoading(false);
      }
    };
    fetchCar();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCar((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const res = await axios.put(`/api/cars/admin/update/${id}`, car, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("✅ تم تحديث بيانات السيارة بنجاح");
      navigate("/admin-dashboard/all-cars");
    } catch (err) {
      console.error(err);
      alert("❌ فشل في تحديث البيانات");
    }
  };

  if (loading) return <p>جاري التحميل...</p>;
  if (error) return <p className="text-red-600">{error}</p>;
  if (!car) return null;

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded shadow">
      <h1 className="text-xl font-bold mb-4">تعديل بيانات السيارة</h1>
      <form onSubmit={handleSubmit} className="grid gap-4">
        {["name", "brand", "model", "year", "price", "condition", "description"].map((field) => (
          <div key={field}>
            <label className="block mb-1 font-medium text-sm text-gray-700">{field}</label>
            <input
              type="text"
              name={field}
              value={car[field] || ""}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
        ))}

        <div className="text-center mt-4">
          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
            حفظ التعديلات 💾
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditCarAdmin;
