import React from "react";
import { useLocation } from "react-router";

const User = () => {
  const location = useLocation();
  console.log(location.state);
  const user = location.state;
  return (
    <div className="container">
      <div className="row">
        <div className="col-4 bg-warning">
          <h1 className=" d-flex justify-content-center">User Details</h1>
          <nav id="navbar">
            <ul>
              <li className="nav-link btn btn-success p-2 m-1">Photo</li>
              <li className="nav-link btn btn-success p-2 m-1">Name</li>
              <li className="nav-link btn btn-success p-2 m-1">Email</li>
              <li className="nav-link btn btn-success p-2 m-1">Description</li>
            </ul>
          </nav>
        </div>
        <div
          className="col-8 bg-info d-flex  justify-content-center"
          style={{ height: "100vh" }}
        >
          <div id="user_details text-center">
            <img
              className="text-center"
              id="photo"
              src={user.avatar}
              alt="profile_pic"
            />
            <h3 id="name">
              Name: {user.first_name} {user.last_name}
            </h3>
            <p id="email">Email: {user.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
