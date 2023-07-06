import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="menu">
      <div className="container">
        <div className="links">
          <Link className="link" to="/">
            <h6>Dashboard</h6>
          </Link>
          <Link className="link" to="/customer">
            <h6>Customer</h6>

          </Link>
          <Link className="link" to="/owner">
            <h6>Owner</h6>
          </Link>
          <Link className="link" to="/createhouse">
            <h6>Creare Hourse</h6>
          </Link>
          <Link className="link" to="/updatehourse">
            <h6>Update Hourse</h6>
          </Link>
          <Link className="link" to="/hourseactive">
            <h6>Hourse Active</h6>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Menu;
