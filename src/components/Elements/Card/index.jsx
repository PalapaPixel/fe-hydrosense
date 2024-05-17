const Card = () => {
  return (
    <div className="flex justify-center">
      {/* Card pertama */}
      <div className=" w-[355px] h-[293px] relative mx-auto">
        <div className="w-[355px] h-[256px] bg-[#eaf8fe] rounded-[15px] absolute">
          <div className="w-[70px] h-[70px]  mt-[14px] ml-[142px]">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg"
              alt="monitor"
            />
          </div>
          <h1 className="flex w-[355px] h-[40px] justify-center items-start font-['Montserrat'] text-[16px] font-semibold leading-[40px] text-[#040b02] relative text-center whitespace-nowrap  mt-[5px] ">
            Monitoring
          </h1>
          <p className="flex w-[271px] h-[40px] justify-center items-center font-['Montserrat'] text-[16px] font-normal leading-[20px] text-[#040b02] relative text-center mt-[4px] ml-[50px]">
            Memberikan Fasilitas Monitoring pertumbuhan tanaman
          </p>
        </div>
        <div className="w-[15.77%] h-[19.11%] bg-[length:100%_100%]  absolute top-[80.89%] left-[41.97%]">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg"
            alt="Back"
          />
        </div>
      </div>
      {/*End Card pertama */}
    </div>
  );
};

export default Card;
