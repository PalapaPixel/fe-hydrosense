import imageStep from "../../../assets/image_step.png";
import Button from "../Button";

const Step = () => {
  return (
    <div className="py-[179px] lg:px-[72px] flex flex-col lg:flex-row items-center justify-center">
      <div className="lg:order-2">
        <img src={imageStep} alt="Step Image" className="w-full lg:w-auto" />
      </div>
      <div className="lg:order-1 lg:pl-[20px]">
        <h1 className="font-bold text-black text-[24px]">
          Kenapa harus kami ?
        </h1>
        <h1 className="pt-[10px] w-full lg:w-[567px] h-[159px] font-bold text-black text-[32px]">
          HydroSense menyajikan informasi seputar cara mengelola tanaman
          hidroponik, dan disertai panduan terstruktur.
        </h1>
        <div className="pt-[70px]">
          <Button>Temukan</Button>
        </div>
      </div>
    </div>
  );
};
export default Step;
