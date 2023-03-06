import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">
        <button>Dashboard</button>
      </Link>

      <Link to="/addCompany">
      <button>Add A Company</button>
      </Link>

      <Link to="/companies">
        <button>Companies</button>
      </Link>
    </nav>
  );
}

export default Navbar;