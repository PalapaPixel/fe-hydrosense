import Artikel from "../components/Elements/Artikel";
import Banner from "../components/Elements/Banner";
import Navbar from "../components/Elements/Navbar";
import Section from "../components/Elements/Section";
import Footer from "../components/Elements/Footer";
import CardFeatures from "../components/Elements/CardFeatures";
import CardProduct from "../components/Elements/CardProduct";
import Card from "../components/Elements/Card";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Section />
      <CardFeatures />
      {/* <CardProduct /> */}
      <Card />
      <Artikel />
      <Footer />
    </div>
  );
};

export default HomePage;
