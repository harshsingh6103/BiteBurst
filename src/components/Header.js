import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";  //Using link it doesnt reloads the whole page instead changes the route and reload the specic part of the page that is required

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");
  

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          {/* <a className="navbar-brand" href="#" src>Hidden brand</a> */}
          <img className="logo" height="80px" src={LOGO_URL} alt="Logo" />
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <Link to="/" className="nav-link ">
                Home
                </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link ">
                About
                </Link>
            </li>
            <li className="nav-item">
            <Link to="/contact" className="nav-link ">
                Contact
                </Link>
            </li>
          </ul>
          
          <button
            className="btn btn-primary"
            type="submit"
            onClick={() =>
              setLoginBtn(loginBtn === "Login" ? "Logout" : "Login")
            }>{loginBtn} </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;



// when there is no dependency array in use effect then useEffect is called on every render
// when there is an empty [] dependency array in use effect then useEffect is called only once at initial render
// when there is  dependency array eg [btnNmae] in use effect then useEffect is called everytime when the btnMame changes.
// dONT use state variables in if else , loops , functions and use it in comonents body only