import logoNavigationImage from "../../common/images/logo192.png";
import { Link } from "react-router-dom";
import WhyUs1 from "../../common/images/whyUsDecision-making_2620308.png";
import WhyUs2 from "../../common/images/whyUsMaintenance_769198.png";
import WhyUs3 from "../../common/images/whyUsSolar-panels_4114997.png";
import WhyUs4 from "../../common/images/whyUsThumbs-up_6043309.png";
import WhyUs5 from "../../common/images/whyUsTracking_13386211.png";
import WhyUs6 from "../../common/images/whyUsWarranty_950264.png";
import CustomizedDialogs from "../HP Information Dialog/InformationDialog";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "./style.css";

export default function WhySolar() {
  useEffect(() => {
    Aos.init({});
  });

  // const [open, setOpen] = React.useState(false);

  // const handleClickOpen = () => {
  //   console.log("Clicked now");
  //   setOpen(true);
  // };
  // const handleClose = () => {
  //   setOpen(false);
  // };

  return (
    <>
      <section
        className="page-3"
        // style={{ height: "100vh" }}
        id="section-3"
      >
        <div
          className="container-fluid bg-light"
          style={{ backgroundColor: "#fff" }}
        >
          <div
            className="container"
            // style={{ backgroundColor: "indigo" }}
          >
            <div className="row" data-aos="fade-up" data-aos-duration="1000">
              <div
                className="col d-flex justify-content-center flex-column mt-5"
                style={{
                  // display: "flex",
                  // flexDirection: "column",
                  // justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <h1 style={{ fontSize: "3rem", color: "black" }}>
                  Why <span style={{ color: "green" }}>S</span>olar{" "}
                  <span style={{ color: "green" }}>S</span>
                  hop <span style={{ color: "green" }}>S</span>olutions?
                </h1>
                <p style={{ fontSize: "1.5rem", color: "black" }}>
                  Moving ahead with <span style={{ color: "green" }}>S</span>
                  olar <span style={{ color: "green" }}>S</span>hop{" "}
                  <span style={{ color: "green" }}>S</span>olutions has some
                  great perks.
                </p>
              </div>
            </div>

            <div className="row ">
              <div
                className="col d-flex justify-content-center flex-row"
                style={{
                  alignItems: "center",
                }}
              >
                {/* <div className="card" style={{ width: "15rem" }}>
                <img
                  className="card-img-top"
                  src={WhyUs1}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h4 className="card-title">Experts Advice</h4>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div> */}

                {/* <img
                src={WhyUs1}
                width={70}
                height={70}
                className="rounded"
                alt="..."
              />

              <img
                src={WhyUs2}
                width={70}
                height={70}
                className="rounded"
                alt="..."
              />

              <img
                src={WhyUs3}
                width={70}
                height={70}
                className="rounded"
                alt="..."
              />

              <img
                src={WhyUs4}
                width={70}
                height={70}
                className="rounded"
                alt="..."
              />

              <img
                src={WhyUs5}
                width={70}
                height={70}
                className="rounded"
                alt="..."
              />

              <img
                src={WhyUs6}
                width={70}
                height={70}
                className="rounded"
                alt="..."
              /> */}
                {/* <div className="container">
                <div className="card">
                  <img
                    src="https://via.placeholder.com/150"
                    className="card-img-top"
                    alt="Placeholder Image"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Card Title</h5>
                    <p className="card-text">
                      Some example text to fill the card's content.
                    </p>
                    <a href="#" className="btn btn-primary">
                      Read More
                    </a>
                  </div>
                </div>
              </div> */}
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div
                  className="col-md-2"
                  data-aos="zoom-out"
                  data-aos-duration="500"
                >
                  <div className="card mb-1 border-0 bg-light">
                    <img
                      src={WhyUs1}
                      className="card-img-top p-2"
                      alt="Placeholder Image 1"
                      width={"20"}
                      height={"20"}
                    />
                    {/* <div className="card-body"> */}
                    <h5 className="card-title h6">Experts Advice</h5>
                    {/* <p className="card-text">
                      Some example text for Feature 1.
                    </p> */}
                    {/* </div> */}
                  </div>
                </div>
                <div
                  className="col-md-2"
                  data-aos="zoom-out"
                  data-aos-duration="1000"
                >
                  <div className="card mb-1 border-0 bg-light">
                    <img
                      src={WhyUs2}
                      className="card-img-top p-4"
                      alt="Placeholder Image 2"
                    />
                    {/* <div className="card-body"> */}
                    <h5 className="card-title h6">Installation Service</h5>
                    {/* <p className="card-text">
                      Some example text for Feature 2.
                    </p> */}
                    {/* </div> */}
                  </div>
                </div>
                <div
                  className="col-md-2"
                  data-aos="zoom-out"
                  data-aos-duration="1500"
                >
                  <div className="card mb-1 border-0 bg-light">
                    <img
                      src={WhyUs3}
                      className="card-img-top p-4"
                      alt="Placeholder Image 3"
                    />
                    {/* <div className="card-body"> */}
                    <h5 className="card-title h6">
                      {" "}
                      Best Offers and Verfied Contractors
                    </h5>
                    {/* <p className="card-text">
                      Some example text for Feature 3.
                    </p> */}
                    {/* </div> */}
                  </div>
                </div>
                <div
                  className="col-md-2"
                  data-aos="zoom-out"
                  data-aos-duration="2000"
                >
                  <div className="card mb-1 border-0 bg-light">
                    <img
                      src={WhyUs4}
                      className="card-img-top p-4"
                      alt="Placeholder Image 4"
                    />
                    {/* <div className="card-body"> */}
                    <h5 className="card-title h6">Warranty Claim</h5>
                    {/* <p className="card-text">
                      Some example text for Feature 4.
                    </p> */}
                    {/* </div> */}
                  </div>
                </div>
                <div
                  className="col-md-2 "
                  data-aos="zoom-out"
                  data-aos-duration="2500"
                >
                  <div className="card mb-1 border-0 bg-light">
                    <img
                      src={WhyUs5}
                      className="card-img-top p-4"
                      alt="Placeholder Image 5"
                      width={100}
                      height={100}
                    />
                    {/* <div className="card-body"> */}
                    <h5 className="card-title h6">Maintenance Warranty</h5>
                    {/* <p className="card-text">
                      Some example text for Feature 5.
                    </p> */}
                    {/* </div> */}
                  </div>
                </div>
                <div
                  className="col-md-2"
                  data-aos="zoom-out"
                  data-aos-duration="3000"
                >
                  <div className="card mb-1 border-0 bg-light">
                    <img
                      src={WhyUs6}
                      className="card-img-top p-4"
                      alt="Placeholder Image 6"
                    />
                    {/* <div className="card-body"> */}
                    <h5 className="card-title h6">Keep Track Of Energy</h5>
                    {/* <p className="card-text">
                      Some example text for Feature 6.
                    </p> */}
                    {/* </div> */}
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                {/* <div className="col-4"> */}

                {/* <!-- Button trigger modal --> */}
                {/* <button
                  type="button"
                  className="btn btn-primary col-2 justify-content-center"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                >
                  {" "}
                  Know More
                </button> */}
                <CustomizedDialogs />

                {/* <!-- Modal --> */}
                {/* <div
                  className="modal fade"
                  id="staticBackdrop"
                  data-bs-backdrop="static"
                  data-bs-keyboard="false"
                  tabindex="-1"
                  aria-labelledby="staticBackdropLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1
                          className="modal-title fs-5"
                          id="staticBackdropLabel"
                        >
                          Modal title
                        </h1>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">...</div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div> */}
                {/* </div> */}
              </div>
            </div>
            <div className="container mt-3">
              <div
                className="row"
                data-aos="fade-up"
                data-aos-duration="1000"
                style={{
                  flexFlow: "wrap",
                  boxSizing: "border-box",
                  display: "flex",
                  placeContent: "space-evenly",
                  alignItems: "stretch",
                }}
              >
                <div
                  className="col-md-2 mr-2"
                  style={{
                    boxShadow: "0 0 10px rgba(0,0,0,.1)",
                    borderRadius: "20px",
                  }}
                >
                  <div className="card mb-1 bg-light border-0">
                    <img
                      src={WhyUs1}
                      className="card-img-top-small"
                      // width={70}
                      // height={70}
                      alt="Placeholder Image 1"
                    />
                    <div className="card-body">
                      <h5 className="card-title">1999+</h5>
                      <h6 className="card-title">Happy Customers</h6>
                      {/* <p className="card-text">
                      Some example text for Feature 1.
                    </p> */}
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-2"
                  style={{
                    boxShadow: "0 0 10px rgba(0,0,0,.1)",
                    borderRadius: "20px",
                  }}
                >
                  <div className="card mb-1 bg-light border-0">
                    <img
                      src={WhyUs1}
                      className="card-img-top-small"
                      alt="Placeholder Image 1"
                    />
                    <div className="card-body">
                      <h5 className="card-title">25+ </h5>
                      <h6 className="card-title">State's/Ut's covered</h6>
                      {/* <p className="card-text">
                      Some example text for Feature 1.
                    </p> */}
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-2"
                  style={{
                    boxShadow: "0 0 10px rgba(0,0,0,.1)",
                    borderRadius: "20px",
                  }}
                >
                  <div className="card mb-1 bg-light border-0">
                    <img
                      src={WhyUs1}
                      className="card-img-top-small"
                      alt="Placeholder Image 1"
                    />
                    <div className="card-body">
                      <h5 className="card-title">48+</h5>
                      <h6 className="card-title">
                        Factories/Industrial estates
                      </h6>
                      {/* <p className="card-text">
                      Some example text for Feature 1.
                    </p> */}
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-2"
                  style={{
                    boxShadow: "0 0 10px rgba(0,0,0,.1)",
                    borderRadius: "20px",
                  }}
                >
                  <div className="card mb-1 bg-light border-0">
                    <img
                      src={WhyUs1}
                      className="card-img-top-small"
                      alt="Placeholder Image 1"
                    />
                    <div className="card-body pb-0">
                      <h5 className="card-title">10+</h5>
                      <h6 className="card-title">Years of experience</h6>
                      {/* <p className="card-text">
                      Some example text for Feature 1.
                    </p> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="divider" style={{ position: "relative" }}>
        {/* <div className="custom-shape-divider-top-1713622803">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
            </svg>
          </div> */}
        {/* <div className="custom-shape-divider-bottom-1713620365">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
          </svg>
        </div> */}

        <div className="custom-shape-divider-bottom-1713711837">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </div>
    </>
  );
}
