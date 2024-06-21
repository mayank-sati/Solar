import React, { useRef, useEffect } from "react";
import "./style.css";
// import solarshophero from "../common/images/solarshophero.jpg";
// import solar01 from "../common/images/solar-power-plant.webp";
// import solar1 from "../common/images/solar1.webp";

import pic1 from "../../common/images/pic1.jpg";
import pic2 from "../../common/images/pic2.jpg";
import pic3 from "../../common/images/pic3.jpg";

const colors = [pic1, pic2, pic3];
const delay = 3000;

export default function HomeSlideShow() {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <section className="page-1" id="section-1">
      <div className="slideshow">
        <div
          className="slideshowSlider"
          key={index}
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
          {colors.map((backgroundColor, index) => (
            <>
              <img
                className="slide"
                key={index}
                src={backgroundColor}
                style={{ objectFit: "cover" }}
              />
              <div
                className="card-img-overlay"
                id={index}
                style={{ top: "200px" }}
              >
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p className="card-text">Last updated 3 mins ago</p>
              </div>

              {/* <div className="container sliderContainer">
              <div className="row">
                <h2></h2>
                <p></p>
                <div className="col">
                  <a> Link</a>
                </div>
              </div>
            </div> */}
              {/* <div className="container"></div> */}
            </>
          ))}
        </div>

        <div className="slideshowDots">
          {colors.map((_, idx) => (
            <div
              key={idx}
              className={`slideshowDot${index === idx ? " active" : ""}`}
              onClick={() => {
                setIndex(idx);
              }}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
}
