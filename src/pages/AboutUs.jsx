import AboutImg from "../common/images/aboutus.gif";
function AboutUsPage() {
  return (
    <div
      class="container-fluid d-sm-flex mx-auto bg-light"
      style={{ minHeight: "calc(100dvh - 100px);" }}
    >
      {/* <div class="col-11 "> */}
      <div className="col flex-grow-1">
        <h1 className="display-4 font-weight-bold mt-4">
          About Us
        </h1>
        <hr className="my-2 bg-light border-0" />
        <p className="leading-7 pt-2 text-base">
          Solar Shop Solutions blazes a pioneering trail in India's renewable
          energy sector, standing as a beacon of sustainable excellence. With an
          unwavering commitment to cutting-edge solutions, this trailblazer has
          carved an unparalleled niche in solar energy services. <br /> <br />{" "}
          At its core, Solar Shop Solutions offers impeccable services spanning
          rooftop solar panels, ground-mounted systems, and avant-garde floating
          solar solutions. Moreover, the company leads the charge in
          establishing solar-powered charging stations, meeting the burgeoning
          demand for sustainable transportation infrastructure. <br /> <br />{" "}
          Distinguished by its steadfast dedication to consumer access to zenith
          solar products, Solar Shop Solutions forges strategic alliances with
          preeminent manufacturers. Clients receive state-of-the-art equipment
          epitomizing efficiency, durability, and reliability. The company takes
          immense pride in its seamless installation process, collaborating with
          the industry's crème de la crème to ensure a hassle-free transition to
          solar energy. <br /> <br />
          Paramount is Solar Shop Solutions' commitment to democratizing
          renewable energy across all societal echelons. Resolute in maintaining
          competitive pricing without compromising quality, the company ensures
          renewable solutions are within reach of a diverse consumer spectrum,
          paving the sustainable future. <br /> <br /> Through its comprehensive
          services and customer-centric approach, Solar Shop Solutions
          illuminates a direct pathway to renewable energy adoption. Harnessing
          solar power reduces carbon footprints while contributing to a cleaner,
          greener tomorrow. As environmental sustainability becomes the clarion
          call, Solar Shop Solutions stands resplendent, empowering individuals
          and businesses to embark on a radiant, sustainable journey, one solar
          panel at a time.
        </p>
      </div>
      <div className="col flex-grow-1">
        <img src={AboutImg} alt="" className="w-100 h-100" />
      </div>
    </div>
    // </div>
  );
}

export default AboutUsPage;
