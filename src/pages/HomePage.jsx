import HomeSlideShow from "../components/HP Slideshow Section-1/HomeSlideShow";
import BookConsultation from "../components/HP Book Consultation Section-2/BookConsultation";
import WhySolar from "../components/HP Why Solar Section-3/WhySolar";
import Scroll from "../components/scroll";
import Footer from "../components/Footer/Footer";
import FooterNew from "../components/Footer/FooterNew";
import DividerBottom from "../components/Divider Bar/DividerBottom"
import DividerTop from "../components/Divider Bar/DividerBottom"

const HomePage = () => {
  return (
    <>
      <HomeSlideShow />

      <DividerBottom />

      <BookConsultation />

      <DividerTop />
      <WhySolar />

      <Scroll />

      <FooterNew />
    </>
  );
};

export default HomePage;
