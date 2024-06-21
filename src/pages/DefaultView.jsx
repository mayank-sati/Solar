import NavigationBar from "../components/Navigation Bar/NavigationBar";
import { Outlet } from "react-router-dom";

import HomeSlideShow from "../components/HP Slideshow Section-1/HomeSlideShow";
import HomeSlideShowNew from "../components/HP Slideshow Section-1/HomeSlideShowNew";
import BookConsultation from "../components/HP Book Consultation Section-2/BookConsultation";
import WhySolar from "../components/HP Why Solar Section-3/WhySolar";
import Scroll from "../components/scroll";
import Footer from "../components/Footer/Footer";
import FooterNew from "../components/Footer/FooterNew";

const DefaultView = () => {
  // const [isOpen, setIsOpen] = useState(false);

  // const toggle = () => {
  //   setIsOpen(!isOpen);
  // };

  // const handleItemClick = () => {
  //   if (isOpen) {
  //     toggle();
  //   }
  // };

  return (
    <>
      <NavigationBar />
      <Outlet />
      {/* <HomeSlideShow />
      <BookConsultation />
      <WhySolar />
      <Scroll /> */}
      {/* <Footer /> */}
      {/* <FooterNew /> */}
    </>
  );
};

export default DefaultView;
