import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditUser = () => {
  let navigate = useNavigate();
  const { id } = useParams();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });

  useEffect(() => {
    const loadUser = async () => {
      const res = await axios.get(`http://localhost:3003/users/${id}`);
      setUser(res.data);
    };
    loadUser();
  }, []);

  const { name, username, email, phone, website } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3003/users/${id}`, user);
    navigate("/");
  };

  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit User</h2>
        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="exampleInputName"
              placeholder="Enter your name"
              aria-describedby="nameHelp"
              name="name"
              value={name}
              onChange={onInputChange}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="exampleInputUserName"
              placeholder="Enter your username"
              aria-describedby="usernameHelp"
              name="username"
              value={username}
              onChange={onInputChange}
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail"
              placeholder="Enter your email address"
              aria-describedby="emailHelp"
              name="email"
              value={email}
              onChange={onInputChange}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="exampleInputPhone"
              placeholder="Enter your phone"
              aria-describedby="phoneHelp"
              name="phone"
              value={phone}
              onChange={onInputChange}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="exampleInputWebsite"
              placeholder="Enter your website name"
              aria-describedby="websiteHelp"
              name="website"
              value={website}
              onChange={onInputChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
