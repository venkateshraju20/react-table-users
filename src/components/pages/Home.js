import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import useLoader from "../hooks/useLoader";

const Home = () => {
  const [users, setUsers] = useState([]);

  const [loading, hideLoading] = useLoader();

  const fetchUsers = async () => {
    const res = await axios.get("http://localhost:3003/users");
    setUsers(res.data);
    hideLoading();
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const onDelete = async (id) => {
    await axios.delete(`http://localhost:3003/users/${id}`);
    fetchUsers();
  };

  return (
    <div className="container">
      {loading ? (
        loading
      ) : (
        <div className="py-4">
          <h2 className="text-center mb-4">Users Information</h2>
          <table className="table border shadow">
            <thead className="table-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Username</th>
                <th scope="col">Email</th>
                <th scope="col">Website</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {users &&
                users.map((user) => (
                  <tr key={user.id}>
                    <th scope="row">{user.id}</th>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.website}</td>
                    <td>
                      <NavLink
                        className="btn btn-primary mr-2"
                        style={{ marginRight: "10px" }}
                        to={`/users/${user.id}`}
                      >
                        View
                      </NavLink>
                      <NavLink
                        className="btn btn-outline-primary mr-2"
                        style={{ marginRight: "10px" }}
                        to={`/user/edit/${user.id}`}
                      >
                        Edit
                      </NavLink>
                      <NavLink
                        className="btn btn-outline-danger"
                        to="/"
                        onClick={() => onDelete(user.id)}
                      >
                        Delete
                      </NavLink>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Home;
