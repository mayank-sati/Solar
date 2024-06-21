import logoNavigationImage from "../../common/images/logo192.png";
import { Link } from "react-router-dom";
import bigLogo from "../../common/images/logo512.png";
import "./style.css";

export default function Footer() {
  return (
    <>
      {/* <div className="container">
        <div className="row">
          <div className="col">
            <h3>About Us</h3>
            <p>This is a sample footer created using Bootstrap.</p>
          </div>
          <div className="col">
            <h3>Contact Us</h3>
            <p>
              Email: example@example.com
              <br />
              Phone: 123-456-7890
            </p>
          </div>
          <div className="col">
            <h3>Follow Us</h3>
            <a href="#">Facebook</a>
            <br />
            <a href="#">Twitter</a>
            <br />
            <a href="#">Instagram</a>
          </div>
        </div>

        <footer className="bg-dark text-white text-center py-3">
          <div className="container">
            <p>&copy; 2024 Your Website. All rights reserved.</p>
          </div>
        </footer>
      </div> */}

      <footer className="footer mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-5 col-12">
              {/* col-lg-4 Only four columns is large screen size and above col-2 means in every other size 2 columns wide */}
              {/* <div className="col-xl-2 col-lg-4 col-8"></div>
              Screen xl and above 2 columns wide, large screens and above 4 colums wide and every other screen 8 columns wide
              Your larger breakpoints are always going to over-ride smaller breakpoints */}
              {/* <div className="col-xl-2 col-lg-4"></div>
              Now for xl and above 2 columns wide, for large and above 4 columns wide and if we don't define a default
               value that it is going to assume 100% width */}
              {/* offset-3------------its moves the columns to the right after giving three column blank space  */}
              {/* row-cols-2------means all the columns in this row should be 2 columns wide unless we give some
              specific value to a column like col-8 */}
              {/* <div className="row row-cols-2 row-cols-lg-4"></div>
              You now notice a trend here in bootstrap almost always there is a
              default class in bootstrap and then there is going to be a
              breakpoint version of that the breakpoint is going to be kept at
              the end of whatever that default class is like defualt class
              row-cols-2 and then breakpoint class row-cols-lg-4. Now breakpoint
              allows you to do what you want to do at that specific screen size
              and above  */}
              {/* Bootstrap spacing--- like want to have space between two
              columns vertically gy-2 and for giving space in the x axis or
              horizontally gx-2 and if i give g-2 the i want space in both the
              directions x and y.  */}
              {/* Nesting-------- Rows can be nested infintely deep as much as you
              want. Watch out In bootstrap if you have a row everything should
              go inside a column. Flow a container than row and then column */}
              <img src={bigLogo} width={100} height={100} alt="" />
              <span style={{ color: "blue" }}>S</span>olar{" "}
              <span style={{ color: "blue" }}>S</span>
              hop <span style={{ color: "blue" }}>S</span>olutions
              <p>
                <span style={{ color: "blue" }}>S</span>olar{" "}
                <span style={{ color: "blue" }}>S</span>
                hop <span style={{ color: "blue" }}>S</span>olutions
                democratizing renewable energy to the masses.
              </p>
            </div>

            {/* <div className="col-lg-4 col-md-3 col-12"> */}
            <div className="col-sm-12 col-lg-2">
              <h4>Quick Links</h4>
              <p>
                About Us
                <br />
                Become a partner
                <br />
                Contact Us
              </p>
            </div>
            <div className="col-lg-4 col-md-3 col-12">
              <h4>Follow Us</h4>
              <div className="row">
                {" "}
                <div className="col-3">
                  <a
                    href="https://www.instagram.com/solarshopsolutions/"
                    className="opacity-80 transition-opacity hover:opacity-100"
                  >
                    <svg
                      className="h-1 w-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      width="40px"
                      height="40px"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
                <div className="col-3">
                  <a
                    href="https://www.x.com/solarshopsolu"
                    className="opacity-80 transition-opacity hover:opacity-100"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      width="40px"
                      height="40px"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-12 text-center">
              <p>&copy; 2024 Solarshopsolutions. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

// col-6 col-lg-2 mb-3

// <div class="footer">
// <div class="container">
// <div class="row py-4 py-md-5">
// <div class="col-12 col-md-6">
// <div class="footer-brand-image">
// <a href="https://www.solarsquare.in">
// <img class="brand-logo" src="https://sse-website.s3.ap-south-1.amazonaws.com/brands/brand-logo-white.svg" alt="SolarSquare">
// </a>
// </div>
// <div class="footer-brand-slogan mt-4">
// Rooftop solar made simple. We don't just <br> sell solar -- we give you peace of mind.
// </div>
// <div class="footer-contact-us">
// <h6 class="mt-4">
// <i class="fa fa-envelope"></i> <a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="552230393c2621303b15263a3934272624203427307b3c3b">[email&#160;protected]</a>
// </h6>
// <h6 class="mt-4 mb-0">
// <i class="fa fa-phone"></i> 98 3000 3000
// </h6>
// </div>
// </div>
// <div class="col-12 col-md-6 footer-all-links">
// <div class="row">
// <div class="col-md-4">
// <div class="footer-solutions">
// <h5>Our Solutions</h5>
// <ul>
// <li><a href="https://www.solarsquare.in/homes">Homes</a></li>
// <li><a href="https://www.solarsquare.in/commercial">Commercial</a></li>
// <li><a href="https://www.solarsquare.in/housing-society">Housing Society</a></li>
// <li class="d-none"><a href="#">Calculate Savings</a></li>
// </ul>
// </div>
// </div>
// <div class="col-md-4">
// <div class="footer-quick-links">
// <h5>Quick Links</h5>
// <ul>
// <li><a href="https://www.solarsquare.in/about-us">About Us</a></li>
// <li><a href="https://www.solarsquare.in/solar-pro">SolarPro Partner</a></li>
// <li class="d-none"><a href="#">Refer & Earn</a></li>
// <li class="d-none"><a href="#">SSE in News</a></li>
// <li><a href="https://www.solarsquare.in/sitemap">Sitemap</a></li>
// </ul>
// </div>
// </div>
// <div class="col-md-4">
// <div class="other-quick-links">
// <h5>Others</h5>
// <ul>
// <li class="d-none"><a href="#">Careers</a></li>
// <li class="d-none"><a href="#">FAQs</a></li>
// <li class="d-none"><a href="#">Legal Disclaimer</a></li>
// <li class="d-none"><a href="#">Sitemap</a></li>
// <li><a href="https://www.solarsquare.in/pages/on-grid-solar-system">On-Grid Solar</a></li>
// <li><a href="https://www.solarsquare.in/pages/off-grid-solar-system">Off-Grid Solar</a></li>
// </ul>
// </div>
// </div>
// </div>
// <div class="row text-left mt-4 footer-get-in-touch">
// <div class="col-md-5">
// <h5 class="footer-contact">
// <a href="tel:+919830003000"><i class="fa fa-phone"></i> 98 3000 3000</a>
// </h5>
// </div>
// <div class="col-md-7">
// <h5 class="footer-contact">
// <a href="/cdn-cgi/l/email-protection#1b6c7e7772686f7e755b6874777a69686a6e7a697e357275"><i class="fa fa-envelope"></i> <span class="__cf_email__" data-cfemail="91e6f4fdf8e2e5f4ffd1e2fefdf0e3e2e0e4f0e3f4bff8ff">[email&#160;protected]</span></a>
// </h5>
// </div>
// </div>
// </div>
// </div>
// </div>
// </div>
// <div class="footer-locations">
// <div class="container py-4">
// <div class="row footer-locations-header">
// <div class="col-md-12">
// <h5 class="footer-locations-header-text">Locations</h5>
// </div>
// </div>
// <div class="row footer-locations-block pb-3">
// <div class="col-md-12 footer-locations-content"></div>
