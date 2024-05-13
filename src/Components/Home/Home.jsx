import BannerLandingPage from "./BannerLandingPage";
import Slider from "./Slider";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Home = () => {
  return (
    <div className="container mx-auto relative">
      <BannerLandingPage></BannerLandingPage>
      <Slider></Slider>
    </div>
  );
};

export default Home;
