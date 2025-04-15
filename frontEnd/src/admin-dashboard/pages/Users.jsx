import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AdminUsers = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const token = localStorage.getItem("token");
                const res = await axios.get("/api/users", {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setUsers(res.data);
            } catch (err) {
                setError("فشل في تحميل المستخدمين");
            } finally {
                setLoading(false);
            }
        };
        fetchUsers();
    }, []);

    const handleDelete = async (id) => {
        if (!window.confirm("هل أنت متأكد من حذف هذا المستخدم؟")) return;
        try {
            const token = localStorage.getItem("token");
            await axios.delete(`/api/users/${id}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            setUsers((prev) => prev.filter((user) => user._id !== id));
            alert("تم حذف المستخدم بنجاح");
        } catch (err) {
            alert("فشل في حذف المستخدم");
        }
    };

    return (
        <div className="bg-gray-50 p-6 min-h-screen">
            <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-md">
                <div className="p-6">
                    <div className="flex justify-between items-center mb-8 border-b pb-4">
                        <h1 className="text-2xl font-bold text-gray-800">إدارة المستخدمين 👥</h1>
                        <Link
                            to="/admin-dashboard/users/new"
                            className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-3 rounded-lg shadow-lg hover:from-blue-700 hover:to-blue-900 transition-all duration-300 flex items-center gap-2 font-medium"
                        >
                            <span className="text-lg">➕</span>
                            <span>مستخدم جديد</span>
                        </Link>
                    </div>

                    {loading ? (
                        <div className="flex justify-center items-center py-12">
                            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
                            <p className="mr-4 text-gray-600">جاري التحميل...</p>
                        </div>
                    ) : error ? (
                        <div className="bg-red-50 border-r-4 border-red-600 p-4 rounded">
                            <p className="text-red-600 font-medium">{error}</p>
                        </div>
                    ) : (
                        <div className="w-full rounded-lg shadow">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-100">
                                    <tr>
                                        <th className="py-3 px-6 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
                                        <th className="py-3 px-6 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">الاسم</th>
                                        <th className="py-3 px-6 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">البريد</th>
                                        <th className="py-3 px-6 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">الدور</th>
                                        <th className="py-3 px-6 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">الإجراءات</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {users.map((user, index) => (
                                        <tr key={user._id} className="hover:bg-gray-50 transition-colors">
                                            <td className="py-4 px-6 whitespace-nowrap text-gray-500">{index + 1}</td>
                                            <td className="py-4 px-6 whitespace-nowrap font-medium text-gray-800">{user.name}</td>
                                            <td className="py-4 px-6 whitespace-nowrap text-gray-600">{user.email}</td>
                                            <td className="py-4 px-6 whitespace-nowrap">
                                                <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full 
                                                    ${user.role === 'admin' ? 'bg-purple-100 text-purple-800' : 
                                                    user.role === 'editor' ? 'bg-blue-100 text-blue-800' : 
                                                    'bg-green-100 text-green-800'}`}>
                                                    {user.role}
                                                </span>
                                            </td>
                                            <td className="py-4 px-6 whitespace-nowrap text-right text-sm font-medium">
                                                <div className="flex space-x-3 space-x-reverse">
                                                    <Link
                                                        to={`/admin-dashboard/users/edit/${user._id}`}
                                                        className="bg-blue-50 text-blue-600 px-4 py-2 rounded-md hover:bg-blue-100 transition-colors flex items-center gap-1"
                                                    >
                                                        <span>✏️</span>
                                                        <span>تعديل</span>
                                                    </Link>
                                                    <button
                                                        onClick={() => handleDelete(user._id)}
                                                        className="bg-red-50 text-red-600 px-4 py-2 rounded-md hover:bg-red-100 transition-colors flex items-center gap-1"
                                                    >
                                                        <span>❌</span>
                                                        <span>حذف</span>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                    {users.length === 0 && (
                                        <tr>
                                            <td colSpan="5" className="py-8 text-center">
                                                <div className="flex flex-col items-center justify-center text-gray-500">
                                                    <svg className="w-16 h-16 mb-2 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                                                    </svg>
                                                    <p className="text-lg font-medium">لا يوجد مستخدمين حالياً</p>
                                                </div>
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AdminUsers;