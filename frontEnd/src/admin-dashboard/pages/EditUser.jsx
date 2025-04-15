import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EditUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", role: "user" });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(`/api/users/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setForm({ name: res.data.name, email: res.data.email, role: res.data.role });
      } catch (err) {
        setError("فشل في تحميل بيانات المستخدم");
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      await axios.put(`/api/users/${id}`, form, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("✅ تم تحديث المستخدم بنجاح");
      navigate("/admin-dashboard/users");
    } catch (err) {
      setError("فشل في تحديث المستخدم: " + (err.response?.data?.message || err.message));
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded shadow">
      <h1 className="text-xl font-bold mb-4">تعديل بيانات المستخدم</h1>
      {loading ? (
        <p>جاري التحميل...</p>
      ) : error ? (
        <p className="text-red-600">{error}</p>
      ) : (
        <form onSubmit={handleSubmit} className="grid gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">الاسم</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">البريد الإلكتروني</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">الدور</label>
            <select
              name="role"
              value={form.role}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            حفظ التعديلات ✏️
          </button>
        </form>
      )}
    </div>
  );
};

export default EditUser;
