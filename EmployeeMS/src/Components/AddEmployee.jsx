import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
const AddEmployee = () => {
  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    password: "",
    salary: "",
    address: "",
    category: "",
    image: "",
  });
  const [category, setCategory] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5085/auth/category")
      .then((result) => {
        if (result.data.Status) {
          setCategory(result.data.Result);
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5085/auth/add_employee", employee)
      .then((result) => console.log(result.data))
      .catch((err) => console.log(err));
  };
  return (
    <div className="d-flex justify-content-center align-items-center mt-3">
      <div className="p-3 rounded w-50 border ">
        <h2>Add Employee</h2>

        <form className="row g-1" onSubmit={handleSubmit}>
          <div className="col-12">
            <label htmlFor="inputName" className="form-label">
              Name
            </label>
            <input
              type="text"
              id="inputName"
              placeholder="Enter Name"
              className="form-control rounded-0"
              onChange={(e) =>
                setEmployee({ ...employee, name: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label For="inputEmail" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="inputEmail"
              placeholder="Enter Email"
              className="form-control rounded-0"
              autoComplete="off"
              onChange={(e) =>
                setEmployee({ ...employee, email: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label For="inputPassword" className="form-label">
              Password
            </label>
            <input
              type="text"
              id="inputPassword"
              placeholder="Enter Password"
              className="form-control rounded-0"
              onChange={(e) =>
                setEmployee({ ...employee, password: e.target.value })
              }
            />
            <label For="inputSalary" className="form-label">
              Salary
            </label>
            <input
              type="text"
              id="inputSalary"
              placeholder="Enter Salary"
              className="form-control rounded-0"
              autoComplete="off"
              onChange={(e) =>
                setEmployee({ ...employee, salary: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label For="inputAddress" className="form-label">
              Address
            </label>
            <input
              type="text"
              id="inputAddress"
              placeholder="Enter Address"
              className="form-control rounded-0"
              autoComplete="off"
              onChange={(e) =>
                setEmployee({ ...employee, address: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label htmlFor="category" className="form-label">
              Category
            </label>
            <select name="category" id="category" className="form-select">
              onChange=
              {(e) => setEmployee({ ...employee, category: e.target.value })}
              {category.map((c) => {
                return <option value={c.id}>{c.name}</option>;
              })}
            </select>
          </div>
          <div className="col-12 mb-3">
            <label For="inputGroupFile01" className="form-label">
              Select Image
            </label>
            <input
              type="file"
              id="inputGroupFile01"
              className="form-control rounded-0"
              onChange={(e) =>
                setCategory({ ...employee, image: e.target.files[0] })
              }
            />
          </div>

          <button className="btn btn-success w-100 rounded-0 mb-2">
            Add Employee
          </button>
        </form>
      </div>
    </div>
  );
};
export default AddEmployee;
