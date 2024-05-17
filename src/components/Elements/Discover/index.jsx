import discoverImage from "../../../assets/discover_image.png";
import Button from "../Button";

const Discover = () => {
  return (
    <div className="main-container w-[1440px] h-[432px] text-[0px] relative mx-auto my-0">
      <h1 className="flex w-[851px] h-[120px] justify-center items-start font-['Montserrat'] text-[48px] font-semibold leading-[60px] text-[#fff] relative text-center z-[1] mt-[89px] mr-0 mb-0 ml-[295px]">
        Feeding the globe and looking after the environment
      </h1>
      <p className="flex w-[812px] h-[30px] justify-center items-start font-['Montserrat'] text-[24px] font-normal leading-[30px] text-[#fff] relative text-center whitespace-nowrap z-[2] mt-[11px] mr-0 mb-0 ml-[295px]">
        memberi makan dunia dan menjaga lingkungan
      </p>
      <div className="w-[171px] h-[55px] relative z-[5] mt-[40px] mr-0 mb-0 ml-[635px]">
        <Button>Discover More</Button>
      </div>
      <div className="absolute top-0 left-0">
        <img src={discoverImage} alt="" />
      </div>
    </div>
  );
};

export default Discover;
