import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from "./Component/Navbar";
import About from "./Pages/About";
import Cars from "./Pages/Cars";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Footer from "./Component/Footer";
import Payment from "./Pages/Payment"
import FormCar from "./Pages/FormCar"
import UserProfile from "./Pages/UserProfile";
// import UserProfile from "./Pages/UserProfile";
import CarDetails from '../src/Pages/CarDetails';
// import Cars from '../src/Pages/Cars';


import AdminLayout from "../../frontEnd/src/admin-dashboard/pages/AdminLayout";
import Dashboard from "../../frontEnd/src/admin-dashboard/pages/Dashboard";
import Carss from "../../frontEnd/src/admin-dashboard/pages/Cars";
import NewCar from "../src/admin-dashboard/pages/NewCar";
import PendingCars from "../src/admin-dashboard/pages/PendingCars";
import Orders from "../src/admin-dashboard/pages/Orders";
import EditCar from "../src/admin-dashboard/pages/EditCar";
import AdminUsers from "../src/admin-dashboard/pages/Users";
import NewUser from "../src/admin-dashboard/pages/NewUser";
import EditUser from "../src/admin-dashboard/pages/EditUser";
import CarView from "../src/admin-dashboard/pages/CarView";
import Messages from "../src/admin-dashboard/pages/Messages";
import AdminRoute from "../src/Pages/AdminRoute";
import Comment from "../src/admin-dashboard/pages/Comment";
// import Orders from "../../frontEnd/src/admin-dashboard/pages/Orders";
// import Users from "../../frontEnd/src/admin-dashboard/pages/Users";


import React from 'react'
import Login from "./Pages/Login";

function App() {
  return (
    <>

      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/cars" element={<Cars />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/form" element={<FormCar />} />
          <Route path="/userProfile" element={<UserProfile />} />

          <Route path="/" element={<Cars />} />
          <Route path="/car-details/:id" element={<CarDetails />} />

          <Route path="/admin-dashboard/all-cars" element={<AdminLayout><Orders /></AdminLayout>} />
          <Route path="/admin-dashboard/pending-cars" element={<AdminLayout><PendingCars /></AdminLayout >} />
          <Route path="/admin-dashboard" element={<AdminLayout><Dashboard /></AdminLayout>} />
          <Route path="/admin-dashboard/cars" element={<AdminLayout><Carss /></AdminLayout>} />
          <Route path="/admin-dashboard/cars/new" element={<AdminLayout><NewCar /></AdminLayout>} />
          <Route path="/admin-dashboard/car/edit/:id" element={<AdminLayout><EditCar /></AdminLayout>}/>
          <Route path="/admin-dashboard/users" element={<AdminLayout><AdminUsers /></AdminLayout>}/>
          <Route path="/admin-dashboard/users/new" element={<AdminLayout><NewUser /></AdminLayout>} />
          <Route path="/admin-dashboard/users/edit/:id" element={<AdminLayout><EditUser /></AdminLayout>}/>
          <Route path="/admin-dashboard/cars/view/:id" element={<AdminLayout><CarView /></AdminLayout>}/>
          <Route path="/admin-dashboard/messages" element={<AdminLayout><Messages /></AdminLayout>}/>
          <Route path="/admin-dashboard/comment" element={<AdminLayout><Comment /></AdminLayout>}/>

          {/* <Route path="/admin-dashboard" element={<AdminRoute><AdminLayout /></AdminRoute>}/> */}

          {/* <Route path="/admin-dashboard/orders" element={<AdminLayout><Orders /></AdminLayout>} /> */}
          {/* <Route path="/admin-dashboard/users" element={<AdminLayout><Users /></AdminLayout>} /> */}








          {/* <Route path="/userProfile" element={<UserProfile />} /> */}
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App

