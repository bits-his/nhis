/* eslint-disable no-restricted-globals */
import React from "react";
import { Briefcase, Database } from "react-feather";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();
  const styles = {
    cursor: "pointer",
  };
  return (
    <div className="sidebar">
      <div className="text-center image mb-4">
        <img src={require("../images/logo.jpeg")} alt="" className="logo" />
      </div>
      <div className="underlind"></div>
      <div className="link" activeclassName="active" style={styles}>
        <li
          onClick={() => navigate("/dashboard")}
          className={`link_item ${
            location.pathname === "/dashboard" && "active_side_menu"
          }`}
        >
          <Briefcase className="icon shadow" />
          Dashboard
        </li>
        <li
          onClick={() => navigate("/verification-list")}
          className={`link_item ${
            location.pathname === "/verification-list" && "active_side_menu"
          }`}
        >
          <Database className="icon shadow" />
          Create New Erollee
        </li>
      </div>
    </div>
  );
}
