import React from "react";
import { NavItem, NavLink } from "reactstrap";
import { useDispatch } from "react-redux";
import { logout } from "../../actions/authActions";
function Logout() {
  const dispatch = useDispatch();
  return (
    <NavItem>
      <NavLink href="/" onClick={() => dispatch(logout())}>
        Logout
      </NavLink>
    </NavItem>
  );
}
export default Logout;
