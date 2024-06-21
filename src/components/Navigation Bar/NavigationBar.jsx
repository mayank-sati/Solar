import logoNavigationImage from "../../common/images/logo192.png";
import { Link } from "react-router-dom";

export default function NavigationBar() {
  return (
    <nav
      className="navbar navbar-expand-lg  sticky-top navbar-dark"
      style={{ backgroundColor: "#61CE70" }}
    >
      {/* navbar-light to adjust text of navbar for light background and bg-light to
      change background color to light */}
      {/* ms-auto */}

      {/* bg-body-tertiary */}
      <div className="container">
        <a className="navbar-brand" href="#">
          <img
            src={logoNavigationImage}
            alt=""
            width="70"
            height="70"
            className="d-inline-block align-text-top"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-md-around"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav align-items-center ms-1 mb-2 mb-lg-0">
            {/* https://getbootstrap.com/docs/5.3/utilities/spacing/#margin-and-padding */}
            {/* https://getbootstrap.com/docs/4.0/utilities/flex/? */}
            {/* col-auto me-auto  */}
            {/* <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li> */}
            <li className="nav-item px-5">
              <a className="nav-link fw-bold" href="#section-2">
                Residential
              </a>
              {/* <Link to="about">Click to view our about page</Link> */}
            </li>
            <li className="nav-item px-5">
              <a className="nav-link fw-bold" href="#section-2">
                Commercial
              </a>
            </li>
            <li className="nav-item px-5">
              <a className="nav-link fw-bold" href="#section-2">
                Estimator
              </a>
            </li>
            <li className="nav-item px-5">
              {/* <a className="nav-link fw-bold" href="#">
                Services
              </a> */}
              <Link className="nav-link fw-bold" to="/contact">
                Contact Us
              </Link>
            </li>
            <li className="nav-item px-5">
              {/* <a className="nav-link fw-bold" href="#">
                Blog
              </a> */}
              <Link className="nav-link fw-bold" to="/contactnew">
              Blog
              </Link>
            </li>
            <li className="nav-item px-5">
              {/* <a className="nav-link fw-bold" href="#">
                About Us
              </a> */}
              <Link className="nav-link fw-bold" to="/about">
                About Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
