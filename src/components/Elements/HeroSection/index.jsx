import Button from "../Button";

const HeroSection = () => {
  return (
    <div id="heroSection" className="w-full h-screen px-5 lg:px-[72px]">
      <div className="h-screen max-w-[700px] flex flex-col justify-center">
        <h1 className="font-bold text-white text-[48px]">
          Mulai budi daya hidroponik mu dengan kami!
        </h1>
        <p className="text-white max-w-[626px] text-[24px]">
          Rasakan pengalaman menanam hidroponik secara mudah dan informatif
          dengan fitur yang kami sediakan
        </p>
        <div className="pt-[49px]">
          <Button>Daftar Sekarang</Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
