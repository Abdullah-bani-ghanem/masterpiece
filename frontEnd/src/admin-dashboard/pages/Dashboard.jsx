import React, { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [stats, setStats] = useState({
    total: 0,
    approved: 0,
    pending: 0,
    rejected: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("/api/cars/all", {
          headers: { Authorization: `Bearer ${token}` },
        });

        const cars = res.data;

        const total = cars.length;
        const approved = cars.filter(c => c.status === "approved").length;
        const pending = cars.filter(c => c.status === "pending").length;
        const rejected = cars.filter(c => c.status === "rejected").length;

        setStats({ total, approved, pending, rejected });
      } catch (err) {
        console.error("فشل في تحميل الإحصائيات:", err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">لوحة تحكم الأدمن</h1>

      {loading ? (
        <p>جاري تحميل الإحصائيات...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded shadow text-center">
            <h2 className="text-lg font-semibold text-gray-600">🚘 كل السيارات</h2>
            <p className="text-2xl font-bold text-blue-600">{stats.total}</p>
          </div>
          <div className="bg-white p-4 rounded shadow text-center">
            <h2 className="text-lg font-semibold text-gray-600">✅ الموافق عليها</h2>
            <p className="text-2xl font-bold text-green-600">{stats.approved}</p>
          </div>
          <div className="bg-white p-4 rounded shadow text-center">
            <h2 className="text-lg font-semibold text-gray-600">⏳ المعلقة</h2>
            <p className="text-2xl font-bold text-yellow-500">{stats.pending}</p>
          </div>
          <div className="bg-white p-4 rounded shadow text-center">
            <h2 className="text-lg font-semibold text-gray-600">❌ المرفوضة</h2>
            <p className="text-2xl font-bold text-red-600">{stats.rejected}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
