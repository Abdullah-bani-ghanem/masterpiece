// src/admin-dashboard/components/Header.jsx
const Header = () => {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold">لوحة التحكم</h1>
      <button className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600">تسجيل الخروج</button>
    </header>
  );
};

export default Header;
