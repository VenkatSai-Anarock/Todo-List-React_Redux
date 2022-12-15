import React from "react";
import { Link, NavLink } from "react-router-dom";

const FilterLink = ({ filter, children }) => {
  let activeClassName = "active";
  let activeStyle = {
    color: "red",
    textDecoration: "underline",
  };

  return (
    <NavLink
      to={`../${filter === "all" ? "" : filter}`}
      style={({ isActive }) => (isActive ? activeStyle : {textDecoration:"none",color:"black"})}
    >
      {children}
    </NavLink>
  );
};

export default FilterLink;
