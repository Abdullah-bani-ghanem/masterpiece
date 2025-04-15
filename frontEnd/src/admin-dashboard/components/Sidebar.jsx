// src/admin-dashboard/components/Sidebar.jsx
import { Home, Car, Users, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 bg-white border-r shadow-lg p-4">
      <h2 className="text-2xl font-bold mb-6">ماستربيس</h2>
      <ul className="space-y-4">
        <li><Link to="/admin-dashboard" className="flex items-center gap-2 hover:text-blue-500"><Home size={20} />Dashboard</Link></li>
        <li><Link to="/admin-dashboard/cars" className="flex items-center gap-2 hover:text-blue-500"><Car size={20} />السيارات</Link></li>
        <li><Link to="/admin-dashboard/all-cars" className="flex items-center gap-2 hover:text-blue-500"><ShoppingCart size={20} />الطلبات</Link></li>
        <li><Link to="/admin-dashboard/users" className="flex items-center gap-2 hover:text-blue-500"><Users size={20} />المستخدمين</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
