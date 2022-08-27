import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

const ViewUser = () => {
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

  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">View User</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="inputName">Name</label>
            <input
              type="text"
              className="form-control viewUser"
              aria-describedby="nameHelp"
              id="inputName"
              name="name"
              value={name}
              readOnly
            />
          </div>
          <div className="mb-3">
            <label htmlFor="inputName">Username</label>
            <input
              type="text"
              className="form-control viewUser"
              aria-describedby="usernameHelp"
              id="inputUsername"
              name="username"
              value={username}
              readOnly
            />
          </div>
          <div className="mb-3">
            <label htmlFor="inputName">Email</label>
            <input
              type="email"
              className="form-control viewUser"
              aria-describedby="emailHelp"
              name="email"
              id="inputEmail"
              value={email}
              readOnly
            />
          </div>
          <div className="mb-3">
            <label htmlFor="inputName">Phone</label>
            <input
              type="text"
              className="form-control viewUser"
              aria-describedby="phoneHelp"
              name="phone"
              id="inputPhone"
              value={phone}
              readOnly
            />
          </div>
          <div className="mb-3">
            <label htmlFor="inputName">Website</label>
            <input
              type="text"
              className="form-control viewUser"
              aria-describedby="websiteHelp"
              name="website"
              id="inputWebsite"
              value={website}
              readOnly
            />
          </div>
          <NavLink className="btn btn-primary" to="/">
            Close
          </NavLink>
        </form>
      </div>
    </div>
  );
};

export default ViewUser;
