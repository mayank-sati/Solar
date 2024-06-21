import React, { useState } from "react";
import logoNavigationImage from "../../common/images/logo192.png";
import { Link } from "react-router-dom";
import "./style.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function splitStringUsingRegex(inputString) {
  const characters = [];
  const regex = /[\s\S]/gu;
  let match;
  while ((match = regex.exec(inputString)) !== null) {
    characters.push(match[0]);
  }
  return characters;
}

const getTransformStyles = (isMouseEntered, index) => ({
  transform: `translateY(${isMouseEntered ? "-100%" : "0%"})`,
  translationDelay: `${index * 0.2}s`,
});

export default function BookConsultation() {
  const [isMouseEntered, setIsMouseEntered] = useState(false);
  console.log("Is Mouse Entered", isMouseEntered);

  useEffect(() => {
    Aos.init({});
  });

  const [formData, setFormData] = useState({
    fullName: '',
    contactNumber: '',
    averageMonthlyBill:'',
    city:'',
    pinCode:'',
    email: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    const data = new FormData();
    data.append('fullName', formData.fullName);
    data.append('contactNumber', formData.contactNumber);
    data.append('averageMonthlyBill', formData.averageMonthlyBill);
    data.append('city', formData.city);
    data.append('pinCode', formData.pinCode);
    data.append('email', formData.email);
    console.log("Data before sending", data)
   // your URL.

    // const Sheet_Url="https://script.google.com/macros/s/AKfycbzw3GieiGYeEN-HL9xtDCeO0T0Rq6QJmlaH1EQpkyfzzDWgmqHiSR-QaunPcs7WuyK0Gw/exec"
    const Sheet_Url="https://script.google.com/macros/s/AKfycbym8UW-27I-_PQajDKC-cm1xtrA0BcbWA8qhPFh0OyR7mKsDbYHPAgLsmduBPyPypce/exec"
    console.log("Data before sending", data, Sheet_Url)
    try {
      await fetch(Sheet_Url, {
        method: 'POST',
        body: data,
        muteHttpExceptions: true,
      });

      setFormData({
        fullName: '',
        contactNumber: '',
        averageMonthlyBill:'',
        city:'',
        pinCode:'',
        email: '',
      });
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {
  //   const form = document.querySelector("#form")
  //   const submitButton = document.querySelector("#submit")
  //   const scriptURL = 'https://script.google.com/macros/s/AKfycbwG9vCMBREFM4suhSiTdVPFu7-F-6JclKyZGGuKjFS-dqaZT6kKXS6r_15kub3YH2R5yw/exec'
 
  //   form.addEventListener('submit', e => {
  //     submitButton.disabled = true
  //     e.preventDefault()
  //     let requestBody = new FormData(form)
  //     fetch(scriptURL, { method: 'POST', body: requestBody})
  //       .then(response => {
  //          alert('Success!', response)
  //          submitButton.disabled = false
  //         })
  //       .catch(error => {
  //       alert('Error!', error.message)
  //         submitButton.disabled = false
 
  //       }
  //       )
  //   })
  //   const script = document.createElement('script');
  
  //   script.src = "https://use.typekit.net/foobar.js";
  //   script.async = true;
  
  //   document.body.appendChild(script);
  
  //   return () => {
  //     document.body.removeChild(script);
  //   }
  //   return () => {}
  // }, []);
  

  return (
    <>
      {/* Line Height */}
      {/* <p class="lh-1">This is a long paragraph written to show how the line-height of an element is affected by our utilities. Classes are applied to the element itself or sometimes the parent element. These classes can be customized as needed with our utility API.</p>
<p class="lh-sm">This is a long paragraph written to show how the line-height of an element is affected by our utilities. Classes are applied to the element itself or sometimes the parent element. These classes can be customized as needed with our utility API.</p>
<p class="lh-base">This is a long paragraph written to show how the line-height of an element is affected by our utilities. Classes are applied to the element itself or sometimes the parent element. These classes can be customized as needed with our utility API.</p>
<p class="lh-lg">This is a long paragraph written to show how the line-height of an element is affected by our utilities. Classes are applied to the element itself or sometimes the parent element. These classes can be customized as needed with our utility API.</p> */}
      {/* Bold */}
      {/* <p class="fw-bold">Bold text.</p>
<p class="fw-bolder">Bolder weight text (relative to the parent element).</p>
<p class="fw-normal">Normal weight text.</p>
<p class="fw-light">Light weight text.</p>
<p class="fw-lighter">Lighter weight text (relative to the parent element).</p>
<p class="fst-italic">Italic text.</p>
<p class="fst-normal">Text with normal font style</p> */}

      <section
        className="page-2"
        style={{ maxHeight: "100vh", backgroundColor: "#F9F9F9" }}
        id="section-2"
      >
        
        <div
          className="container-fluid"
          // style={{ backgroundColor: "indigo" }}
        >
          {/* <div className="row">
          <div className="col">1 of 2</div>
        </div> */}
          <div className="container"  data-aos="fade-up"
                data-aos-duration="1000">
            <div className="row">
              <h2
                className="text-left col display-3 lh-1"
                style={{ color: "black" }}
                // style={{ fontSize: "3rem", color: "white" }}
              >
                One Stop Solution
              </h2>
            </div>
            <div className="row">
              <div
                className="text-left col"
                style={
                  {
                    // fontSize: "4rem",
                    // background: "linear-gradient(to right, blue 50%, white 50%)",
                    // WebkitBackgroundClip: "text",
                    // display: "inline",
                    // background:
                    //   "linear-gradient(to right, #f32170, #ff6b08,#cf23cf, #eedd44)",
                    // WebkitTextFillColor: "transparent",
                    // WebkitBackgroundClip: "text",
                  }
                }
              >
                <h1
                  className="half-blue-white display-3 fw-bolder lh-1"
                  // style={{
                  //   fontSize: "4rem",
                  // }}
                >
                  FOR ALL YOUR SOLAR NEEDS
                </h1>
              </div>
            </div>
          </div>

          <div
            className="container mb-4"
            // style={{ backgroundColor: "indigo" }}
          >
            <div className="row">
              <div
                className="col-sm-12 col-md-6"
                data-aos="fade-up"
                data-aos-duration="1000"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <h1
                  className="h-5"
                  style={{
                    // fontSize: "3rem",
                    // color: "#09ccf8",
                    color: "#61CE70",
                  }}
                >
                  Book a free consultation with our team
                </h1>
                <p
                  className="h-6"
                  style={{
                    // fontSize: "1.5rem",
                    color: "black",
                  }}
                >
                  To get flexible advice from our dedicated team of solar
                  experts
                </p>
              </div>

                      {/* FORM STARTS HERE */}
              <div className="col-sm-12 col-md-6">
                <form
                  className="rounded p-4"
                  style={{ backgroundColor: "white" }}
                  onSubmit={handleSubmit}
                >
                  {/* <div className="form-row"> */}
                  <div className="form-group mb-1">
                    <label for="inputEmail4">Full Name</label>
                    <input
                      type="text"
                      className="form-control rounded bg-light text-secondary"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      placeholder="Enter you name"
                      
                    />
                  </div>
                  <div className="form-group mb-1">
                    <label for="inputPhoneNumber">WhatsApp Number</label>
                    <input
                      type="number"
                      className="form-control bg-light text-secondary"
                      id="contactNumber"
                      name="contactNumber"
                      value={formData.contactNumber}
                      onChange={handleChange}
                      placeholder="Contact number"
                      
                    />
                    {/* </div> */}
                  </div>
                  <div className="form-group mb-1">
                    <label for="inputAddress">Monthly Electricity Bill</label>
                    <input
                      type="number"
                      className="form-control bg-light text-secondary"
                      id="averageMonthlyBill"
                      name="averageMonthlyBill"
                      value={formData.averageMonthlyBill}
                      onChange={handleChange}
                      placeholder="Average monthly units"
                      
                    />
                  </div>
                  {/* <div className="form-group">
                  <label for="inputAddress2">Address</label>
                  <input
                    type="text"
                    className="form-control bg-light text-secondary"
                    id="inputAddress"
                    placeholder="Enter your address"
                  />
                </div> */}
                  <div className="row">
                    <div className="form-group col mb-1">
                      <label for="inputCity">City</label>
                      <input
                        type="text"
                        className="form-control bg-light text-secondary"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="Enter city"
                       
                      />
                    </div>
                    <div className="form-group col mb-1">
                      <label for="inputPinCode">Pin Code</label>
                      <input
                        type="number"
                        className="form-control bg-light text-secondary"
                        id="pinCode"
                        name="pinCode"
                        value={formData.pinCode}
                        onChange={handleChange}
                        placeholder="Enter pincode"
                        
                      />
                    </div>
                    {/* col-md-5 */}
                  </div>
                  <div className="form-group mb-1">
                    {/* col-md-6 */}
                    <label for="inputEmail4">Email</label>
                    <input
                      type="email"
                      className="form-control bg-light text-secondary"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter you email"
                      aria-label="Small"
                      aria-describedby="inputGroup-sizing-sm"
                     
                    />
                  </div>
                  {/* <div class="input-group input-group-sm mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroup-sizing-sm">
                      Small
                    </span>
                  </div>
                  <input
                    type="text"
                    class="form-control"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div> */}
                  <div className="form-group mb-1">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="gridCheck"
                        onChange={handleChange}
                      />
                      <label className="form-check-label" for="gridCheck">
                        I agree to Solarshop's terms and conditions.
                      </label>
                    </div>
                  </div>
                  <button
                    type="submit"
                    onMouseEnter={() => setIsMouseEntered(true)}
                    onMouseLeave={() => setIsMouseEntered(false)}
                    className="btn btn-success mb-1 fancy-button"
                    // style={{ backgroundColor: "#61CE70", color: "black" }}
                  >
                    <span className="fancy-button-text-container">
                      {splitStringUsingRegex(
                        "Yes! Reduce my electricity bill"
                      ).map((char, index) => (
                        <span
                          className="fancy-button-char-container"
                          key={index}
                        >
                          <span
                            style={getTransformStyles(isMouseEntered, index)}
                          >
                            {char}
                          </span>
                          <span
                            style={getTransformStyles(isMouseEntered, index)}
                          >
                            {char}
                          </span>
                        </span>
                      ))}
                    </span>
                  </button>
                </form>
              </div>
              
            </div>
          </div>
          
        </div>

        {/* <div className="divider" style={{position:"relative"}}> */}

        {/* <div className="custom-shape-divider-top-1713622803">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
            </svg>
          </div> */}
        {/* <div className="custom-shape-divider-bottom-1713620365">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
          </svg>
        </div>
        </div> */}

          
      </section>
    </>
  );
}
