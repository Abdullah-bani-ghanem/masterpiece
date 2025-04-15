import { useEffect, useState } from "react";
import { Pencil, Trash2, Plus, List, Eye } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Cars = () => {
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCars = async () => {
            try {
                const token = localStorage.getItem("token");
                const res = await axios.get("/api/cars/all", {
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
    }, []);

    const handleDelete = async (id) => {
        if (!window.confirm("هل أنت متأكد من حذف هذه السيارة؟")) return;
        try {
            const token = localStorage.getItem("token");
            await axios.delete(`/api/cars/${id}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            setCars((prev) => prev.filter((car) => car._id !== id));
            alert("تم حذف السيارة بنجاح");
        } catch (err) {
            alert("فشل في حذف السيارة");
        }
    };

    const handleEdit = (car) => {
        navigate(`/admin-dashboard/cars/edit/${car._id}`, { state: { car } });
    };

    const handleView = (car) => {
        navigate(`/admin-dashboard/cars/view/${car._id}`, { state: { car } });
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">إدارة السيارات</h2>
                <div className="flex gap-2">
                    <Link
                        to="/admin-dashboard/all-cars"
                        className="flex items-center gap-2 bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
                    >
                        <List size={18} /> كل السيارات
                    </Link>
                    <Link
                        to="/admin-dashboard/cars/new"
                        className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                    >
                        <Plus size={18} /> إضافة سيارة
                    </Link>
                </div>
            </div>

            {loading ? (
                <p>جاري تحميل السيارات...</p>
            ) : error ? (
                <p className="text-red-600">{error}</p>
            ) : (
                <table className="min-w-full bg-white rounded shadow overflow-hidden">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="py-3 px-4 text-left">#</th>
                            <th className="py-3 px-4 text-left">الاسم</th>
                            <th className="py-3 px-4 text-left">السعر</th>
                            <th className="py-3 px-4 text-left">الحالة</th>
                            <th className="py-3 px-4 text-left">النوع</th>
                            <th className="py-3 px-4 text-left">الموديل</th>
                            <th className="py-3 px-4 text-left">الوصف</th>
                            <th className="py-3 px-4 text-left">الإجراءات</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cars.map((car, index) => (
                            <tr key={car._id} className="border-t">
                                <td className="py-3 px-4">{index + 1}</td>
                                <td className="py-3 px-4">{car.name}</td>
                                <td className="py-3 px-4">${car.price}</td>
                                <td className="py-3 px-4">{car.status}</td>
                                <td className="py-3 px-4">{car.brand}</td>
                                <td className="py-3 px-4">{car.model}</td>
                                <td className="py-3 px-4">{car.description}</td>
                                <td className="py-3 px-4">
                                    <div className="flex gap-2">
                                        <button
                                            className="bg-green-600 text-white px-2 py-1 rounded"
                                            onClick={() => handleView(car)}
                                        >
                                            <Eye size={16} /> عرض
                                        </button>
                                        <Link
                                            to={`/admin-dashboard/car/edit/${car._id}`}
                                            className="bg-yellow-500 text-white px-3 py-1 rounded"
                                        >
                                            تعديل ✏️
                                        </Link>
                                        <button
                                            className="text-red-600 hover:text-red-800"
                                            onClick={() => handleDelete(car._id)}
                                        >
                                            <Trash2 size={18} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                        {cars.length === 0 && (
                            <tr>
                                <td colSpan="8" className="text-center py-6 text-gray-500">
                                    لا توجد سيارات حالياً.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default Cars;
