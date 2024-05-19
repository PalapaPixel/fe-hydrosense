import Artikel from "../components/Elements/Artikel";
import Banner from "../components/Elements/Banner";
import Card from "../components/Elements/Card";
import Discover from "../components/Elements/Discover";
import Navbar from "../components/Elements/Navbar";
import Product from "../components/Elements/Product";
import Section from "../components/Elements/Section";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Section />
      <Card />
      <Discover />
      <Product />
      <Artikel />
    </div>
  );
};

export default HomePage;
