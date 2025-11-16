import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Login from "./Login.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard.jsx";
import Home from "./Home.jsx";
import Employee from "./Employee.jsx";
import Category from "./Category.jsx";
import Profile from "./Profile.jsx";
import AddCategory from "./AddCategory.jsx";
import AddEmployee from "./AddEmployee.jsx";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/adminlogin" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Home />} />
        <Route path="/dasboard/employee" element={<Employee />} />
        <Route path="/dashboard/category" element={<Category />} />
        <Route path="/dashboard/profile" element={<Profile />} />
        <Route path="/dashboard/add_category" element={<AddCategory />} />
        <Route path="/dashboard/add_Employee" element={<AddEmployee />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
