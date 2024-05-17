import Artikel from "../components/Elements/Artikel";
import Card from "../components/Elements/Card";
import Discover from "../components/Elements/Discover";
import HeroSection from "../components/Elements/HeroSection";
import Navbar from "../components/Elements/Navbar";
import Product from "../components/Elements/Product";
import Step from "../components/Elements/Step";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Step />
      <Card />
      <Discover />
      <Product />
      <Artikel />
    </div>
  );
};

export default HomePage;
