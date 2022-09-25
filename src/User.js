import React from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

const User = () => {
  const location = useLocation();
  console.log(location.state);
  const user = location.state;
  return (
    <div className="row">
      <div className="col-2 bg-info border border-rounded p-2">
        <div>
          <Link to="/">
            <img
              className="border rounded-circle"
              src={user.avatar}
              height="100px"
              width="100px"
              alt="profile"
            />
          </Link>
        </div>
        <Link to="/">
          <h5>
            {user.first_name} {user.last_name}
          </h5>
        </Link>
        <Link to="/">
          <p>{user.email}</p>
        </Link>
      </div>
      <div className="col-10 bg-success"></div>
    </div>
  );
};

export default User;
