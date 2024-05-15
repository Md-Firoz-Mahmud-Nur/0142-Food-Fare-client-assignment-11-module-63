import { Helmet } from "react-helmet-async";
import BannerLandingPage from "./BannerLandingPage";
import FeatureFood from "./FeatureFood";
import Slider from "./Slider";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Home = () => {
  return (
    <div className="container relative mx-auto">
      <Helmet><title>Food Fare</title></Helmet>
      <BannerLandingPage></BannerLandingPage>
      <Slider></Slider>
      <FeatureFood></FeatureFood>
    </div>
  );
};

export default Home;
