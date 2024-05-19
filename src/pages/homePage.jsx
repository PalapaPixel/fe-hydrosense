import Artikel from "../components/Elements/Artikel";
import Banner from "../components/Elements/Banner";
import Navbar from "../components/Elements/Navbar";
import Section from "../components/Elements/Section";
import CardProduct from "../components/Elements/CardProduct";
import Features from "../components/Elements/Features";
import Footer from "../components/Elements/Footer";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Section />
      <Features />
      <CardProduct />
      <Artikel />
      <Footer />
    </div>
  );
};

export default HomePage;
