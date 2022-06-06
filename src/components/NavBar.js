import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <NavLink exact to="/movies">Movies</NavLink>
      <br></br>
      <NavLink exact to="/directors">Directors</NavLink>
      <br></br>
      <NavLink exact to="/actors">Actors</NavLink>
      <br></br>
      <NavLink exact to="/">Home</NavLink>
    </div>
  )
}

export default NavBar;
