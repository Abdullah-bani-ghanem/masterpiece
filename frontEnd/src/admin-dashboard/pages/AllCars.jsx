import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const AdminAllCars = () => {
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [statusFilter, setStatusFilter] = useState("");

    useEffect(() => {
        const fetchCars = async () => {
            try {
                setLoading(true);
                const token = localStorage.getItem("token");
                const res = await axios.get(`/api/cars/all${statusFilter ? `?status=${statusFilter}` : ""}`, {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setCars(res.data);
            } catch (err) {
                setError("فشل في تحميل السيارات");
            } finally {
                setLoading(false);
            }
        };

        fetchCars();
    }, [statusFilter]);

    const handleStatusChange = async (id, newStatus) => {
        const note = prompt("ملاحظة (اختياري)") || "";
        try {
            const token = localStorage.getItem("token");
            const res = await axios.patch(`/api/cars/status/${id}`, {
                status: newStatus,
                adminNote: note,
            }, {
                headers: { Authorization: `Bearer ${token}` },
            });

            setCars(prev => prev.map(car => car._id === id ? { ...car, status: newStatus, adminNote: note } : car));
            alert(res.data.message);
        } catch (err) {
            alert("فشل في تحديث حالة السيارة");
        }
    };

    return (
        <div className="p-4">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">كل السيارات</h1>
                <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="border px-3 py-1 rounded"
                >
                    <option value="">الكل</option>
                    <option value="pending">معلقة</option>
                    <option value="approved">موافقة</option>
                    <option value="rejected">مرفوضة</option>
                </select>
            </div>

            {loading ? (
                <p>جاري التحميل...</p>
            ) : error ? (
                <p className="text-red-600">{error}</p>
            ) : cars.length === 0 ? (
                <p>لا توجد سيارات.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {cars.map((car) => (
                        <div key={car._id} className="border rounded-xl p-4 shadow">
                            <h2 className="text-xl font-bold mb-2">{car.name}</h2>
                            {car.images?.length > 0 && (
                                <img
                                    src={`http://localhost:5000/uploads/${car.images[0]}`}
                                    alt="car"
                                    className="w-full h-48 object-cover rounded mb-2"
                                />
                            )}
                            <p>السعر: ${car.price}</p>
                            <p>الموديل: {car.model} - {car.year}</p>
                            <p>الحالة: {car.condition}</p>
                            <p>الوصف: {car.description}</p>
                            <p>الحالة الإدارية: <strong>{car.status}</strong></p>
                            {car.adminNote && <p>📝 ملاحظة الأدمن: {car.adminNote}</p>}
                            <p className="text-sm text-gray-500">البائع: {car.seller?.name} - {car.seller?.email}</p>

                            <div className="flex gap-2 mt-3">
                                <button
                                    className="bg-green-600 text-white px-3 py-1 rounded"
                                    onClick={() => handleStatusChange(car._id, "approved")}
                                >
                                    موافقة ✅
                                </button>
                                <button
                                    className="bg-red-600 text-white px-3 py-1 rounded"
                                    onClick={() => handleStatusChange(car._id, "rejected")}
                                >
                                    رفض ❌
                                </button>
                                <Link
                                    to={`/admin-dashboard/car/edit/${car._id}`}
                                    className="bg-yellow-500 text-white px-3 py-1 rounded"
                                >
                                    تعديل ✏️
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default AdminAllCars;
