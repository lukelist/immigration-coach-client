import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

function Navbar() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);
  console.log(isLoggedIn);

  return (
    <nav>
      {isLoggedIn && (
        <>
          <Link to="/">
            <button className="button1">Dashboard</button>
          </Link>

          <Link to="/addCompany">
            <button className="button2">Add A Company</button>
          </Link>

          <Link to="/companies">
            <button className="button3">Companies</button>
          </Link>

          <span>
            <button className="button4"onClick={logOutUser}>Logout</button>
          </span>
        </>
      )}

      {!isLoggedIn && (
        <>
          <span className="sign-container">
            <NavLink to="/signup">
              <button className="button1">SIGN UP</button>
            </NavLink>
            <NavLink to="/login">
              <button className="button2">LOG IN</button>
            </NavLink>
          </span>
        </>
      )}
    </nav>
  );
}

export default Navbar;
