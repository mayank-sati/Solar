import logoNavigationImage from "../../common/images/logo192.png";
import { Link } from "react-router-dom";
import bigLogo from "../../common/images/logo512.png";
import { FaPhoneAlt } from "react-icons/fa";
import { FaSquarePhone } from "react-icons/fa6";
import { AiOutlineMail } from "react-icons/ai";
import { MdOutlineMailOutline } from "react-icons/md";
import "./style.css";

export default function FooterNew() {
  return (
    <>
      <footer>
        <div className="footer">
          <div className="container">
            {/* <div className="row py-4 py-md-5"> */}
            <div className="row py-1 py-md-1">
              <div className="col-12 col-md-6">
                <div className="footer-brand-image">
                  <a href="https://www.solarsquare.in">
                    <img
                      className="brand-logo"
                      src={bigLogo}
                      width={100}
                      height={100}
                      alt="SolarSquare"
                    />
                  </a>
                </div>
                <div className="footer-brand-slogan mt-4">
                  Building a cleaner India
                  {/* Rooftop solar made simple. We don't just <br /> sell solar --
                  we give you peace of mind. */}
                </div>
                {/* <div className="footer-contact-us">
                  <h6 className="mt-4">
                    <i className="fa fa-envelope"></i>{" "}
                    <a href="">solarshop@gmail.com</a>
                  </h6>
                  <h6 className="mt-4 mb-0">
                    <i className="fa fa-phone"></i> 98 3000 3000
                  </h6>
                </div> */}
              </div>
              <div className="col-12 col-md-6 footer-all-links">
                <div className="row">
                  <div className="col-md-4">
                    <div className="footer-solutions">
                      <h5>Our Solutions</h5>
                      <ul className="list-unstyled">
                        <li>
                          <a href="">Homes</a>
                        </li>
                        <li>
                          <a href="">Commercial</a>
                        </li>
                        <li>
                          <a href="">Housing Society</a>
                        </li>
                        <li className="d-none">
                          <a href="#">Calculate Savings</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="footer-quick-links">
                      <h5>Quick Links</h5>
                      <ul className="list-unstyled">
                        <li className="text-decoration-none">
                          <a href="">About Us</a>
                        </li>
                        <li>
                          <a href="">SolarPro Partner</a>
                        </li>
                        <li className="d-none">
                          <a href="#">Refer & Earn</a>
                        </li>
                        <li className="d-none">
                          <a href="#">SSE in News</a>
                        </li>
                        <li>
                          <a href="">Sitemap</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="other-quick-links">
                      <h5>Follow Us</h5>
                      <ul className="list-unstyled"></ul>
                      {/* <ul className="list-unstyled">
                        <li className="d-none">
                          <a href="#">Careers</a>
                        </li>
                        <li className="d-none">
                          <a href="#">FAQs</a>
                        </li>
                        <li className="d-none">
                          <a href="#">Legal Disclaimer</a>
                        </li>
                        <li className="d-none">
                          <a href="#">Sitemap</a>
                        </li>
                        <li>
                          <a href="https://www.solarsquare.in/pages/on-grid-solar-system">
                            On-Grid Solar
                          </a>
                        </li>
                        <li>
                          <a href="https://www.solarsquare.in/pages/off-grid-solar-system">
                            Off-Grid Solar
                          </a>
                        </li>
                      </ul> */}
                    </div>
                  </div>
                </div>
                <div className="row text-left mt-4 footer-get-in-touch">
                  <div className="col-md-5">
                    <h5 className="footer-contact">
                      {/* <a href="tel:+919830003000"> */}
                      {/* <i className="fa fa-phone"></i> */}
                      <FaSquarePhone />
                      {/* <FaPhoneAlt /> */}
                      {" 8447705400"}
                      {/* </a> */}
                    </h5>
                  </div>
                  <div className="col-md-7">
                    <h5 className="footer-contact">
                      {/* <a href="/cdn-cgi/l/email-protection#1b6c7e7772686f7e755b6874777a69686a6e7a697e357275"> */}
                      {/* <i className="fa fa-envelope"></i> */}
                      <MdOutlineMailOutline />{" "}
                      <span>info@solarshopsolutions.com</span>
                      {/* </a> */}
                    </h5>
                  </div>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-md-12 text-center">
                  <p>&copy; 2024 Solarshopsolutions. All rights reserved.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="footer-locations">
          <div className="container py-4">
            <div className="row footer-locations-header">
              <div className="col-md-12">
                <h5 className="footer-locations-header-text">Locations</h5>
              </div>
            </div>
          </div>
        </div> */}
        {/* <div className="row footer-locations-block pb-3">
<div className="col-md-12 footer-locations-content"></div> */}
      </footer>
    </>
  );
}

// col-6 col-lg-2 mb-3
