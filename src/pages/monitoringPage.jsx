// import Banner from "../components/Elements/Banner";
import Card from "../components/Elements/Card";
import Footer from "../components/Elements/Footer";
import HeroSection from "../components/Elements/HeroSection";
import Navbar from "../components/Elements/Navbar";

const MonitoringPage = () => {
  return (
    <>
      <Navbar />
      <div>
        <HeroSection />
        <div className="my-20">
          <h1 className="text-center text-5xl text-green-600 font-bold">
            Mau Pilih Tanaman Apa?
          </h1>
          <div className="mt-20">
            <Card />
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default MonitoringPage;
