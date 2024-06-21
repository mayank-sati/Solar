const ContactUsPage = () => {
  return (
    <>
      <div className="container-fluid bg-light">
        <div className="d-flex">
          <form action="" className="px-3 py-4 w-75">
            <h2 className="text-4xl font-weight-bold">Contact Us</h2>
            <p className="text-base px-2 py-1 text-secondary mb-4">
              Feel Free to contact us any time. We will get back to you as soon
              as we can!.
            </p>
            <input
              className="form-control mb-2"
              type="text"
              name="name"
              id="name"
              placeholder="Name"
            />
            <input
              className="form-control mb-2"
              type="email"
              name="email"
              id="email"
              placeholder="Email"
            />
            <input
              className="form-control mb-2"
              type="tel"
              name="phone"
              id="phone"
              placeholder="Phone no"
            />
            <textarea
              className="form-control mb-4"
              name="msg"
              id="msg"
              rows="2"
              placeholder="Message"
            ></textarea>
            <button type="submit" className="btn btn-primary">
              Send
            </button>
          </form>
          <div className="bg-gradient-to-r from-success to-warning w-25"></div>
        </div>
        <div className="position-absolute end-0 bg-dark rounded-start text-white top-50 translate-middle-y h-100 w-25 p-3">
          <h2 className="text-3xl font-weight-bold my-2">Contact Info</h2>
          <a className="d-block my-2" href="tel:+918447705400">
            +918447705400
          </a>
          <a
            className="d-block my-2"
            href="mailto:mayank@solarshopsolutions.in"
          >
            mayank@solarshopsolutions.in
          </a>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14028.440577532183!2d77.0823455!3d28.4762294!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19e512a51995%3A0xd8399df4d2423de8!2ssolar%20shop%20solutions!5e0!3m2!1sen!2sin!4v1708371299775!5m2!1sen!2sin"
            width="340"
            height="220"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      {/* <div className="flex">
        <form action="" className="pl-48 pr-96 py-24 w-4/5">
          <h2 className="text-4xl font-semibold tracking-wider">Contact Us</h2>
          <p className="text-base px-2 py-1 text-gray-700 tracking-wider mb-8">
            Feel Free to contact us any time. We will get back to you as soon as
            we can!.
          </p>
          <input
            className="text-base px-2 py-1 block mb-2 w-full focus:outline-none focus:border-b-green-900 border-b-2"
            type="text"
            name="name"
            id="name"
            placeholder="Name"
          />
          <input
            className="text-base px-2 py-1 block mb-2 w-full border-b-2 focus:outline-none focus:border-b-green-900"
            type="email"
            name="email"
            id="email"
            placeholder="email"
          />
          <input
            className="text-base px-2 py-1 block mb-2 w-full border-b-2 focus:outline-none focus:border-b-green-900"
            type="tel"
            name=""
            id=""
            placeholder="Phone no"
          />
          <textarea
            className="mb-4 text-base px-2 py-1 block mb-2 w-full border-b-2 focus:outline-none focus:border-b-green-900"
            name="msg"
            id="msg"
            cols="30"
            rows="2"
            placeholder="Message"
          ></textarea>
          <button
            type="submit"
            className="bg-green-600 text-white py-2 px-4 rounded-full"
          >
            Send
          </button>
        </form>
        <div className="bg-gradient-to-r from-green-300 to-orange-100 w-1/5"></div>
      </div>
      <div className="absolute right-36 bg-black rounded-l-[25px] text-white top-36 h-96 w-96 p-5">
        <h2 className="text-3xl font-semibold tracking wider my-2">
          Contact Info
        </h2>
        <a className="block my-2" href="tel:+918447705400">
          +918447705400
        </a>
        <a className="block my-2" href="mailto:">
          mayank@solarshopsolutions.in
        </a>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14028.440577532183!2d77.0823455!3d28.4762294!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19e512a51995%3A0xd8399df4d2423de8!2ssolar%20shop%20solutions!5e0!3m2!1sen!2sin!4v1708371299775!5m2!1sen!2sin"
          width="340"
          height="220"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div> */}
    </>
  );
};

export default ContactUsPage;
