const CardProduct = () => {
  return (
    <section>
      <h1 className="mt-8 text-center text-5xl text-green-600 font-bold">
        PRODUCT
      </h1>
      {/* <h3 className="text-2xl tracking-widest text-green-600 text-center">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia,
        molestias nobis reiciendis quaerat totam illum soluta! Distinctio
        mollitia modi recusandae unde dolorum officiis numquam voluptas, quos,
        molestias voluptatum error! Laudantium?
      </h3> */}

      <div className="flex justify-center">
        <div className="flex flex-wrap mx-auto md:flex-nowrap p-12">
          <a href="">
            <div className="flex w-full">
              <div className="relative flex flex-col items-start m-1 transition duration-300 ease-in-out delay-150 transform bg-white shadow-2xl rounded-xl md:w-80 md:-ml-16 md:hover:-translate-x-16 md:hover:-translate-y-8">
                <img
                  className="object-cover object-center w-full rounded-t-xl lg:h-48 md:h-36"
                  src="https://i0.wp.com/petaniquick.com/wp-content/uploads/2019/02/BOXER-85-S-Series-2.png?resize=571%2C527&ssl=1"
                  alt="blog"
                />
                <div className="px-6 py-8">
                  <h4 className="mt-4 text-2xl font-semibold text-neutral-600">
                    <span className="">Entry</span>
                  </h4>
                  <p className="mt-4 text-base font-normal text-gray-500 leading-relax">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facere exercitationem nulla cupiditate, similique numquam
                    nihil expedita rerum velit dolores incidunt hic eum
                    reiciendis beatae blanditiis illum. Cumque fugiat possimus
                    explicabo.
                  </p>
                </div>
              </div>
            </div>
          </a>

          <a href="">
            <div className="flex w-full">
              <div className="relative flex flex-col items-start m-1 transition duration-300 ease-in-out delay-150 transform bg-white shadow-2xl rounded-xl md:w-80 md:-ml-16 md:hover:-translate-x-16 md:hover:-translate-y-8">
                <img
                  className="object-cover object-center w-full rounded-t-xl lg:h-48 md:h-36"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_oXQiEggr6MFAHL4z3nXUA82U7gRohpbs9YF84YkyvA&s"
                  alt="blog"
                />
                <div className="px-6 py-8">
                  <h4 className="mt-4 text-2xl font-semibold text-neutral-600">
                    <span className="">Entry</span>
                  </h4>
                  <p className="mt-4 text-base font-normal text-gray-500 leading-relax">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magni expedita laudantium tempora fugit, nobis alias, iste
                    repudiandae debitis illo reiciendis dolorem tenetur
                    voluptatibus eos nesciunt quod voluptatem odio quas velit!
                  </p>
                </div>
              </div>
            </div>
          </a>

          <a href="">
            <div className="flex w-full">
              <div className="relative flex flex-col items-start m-1 transition duration-300 ease-in-out delay-150 transform bg-white shadow-2xl rounded-xl md:w-80 md:-ml-16 md:hover:-translate-x-16 md:hover:-translate-y-8">
                <img
                  className="object-cover object-center w-full rounded-t-xl lg:h-48 md:h-36"
                  src="https://www.amesbostonhotel.com/wp-content/uploads/2022/09/Alat-Pertanian-Tradisional-Sabit.jpg"
                  alt="blog"
                />
                <div className="px-6 py-8">
                  <h4 className="mt-4 text-2xl font-semibold text-neutral-600">
                    <span className="">Entry</span>
                  </h4>
                  <p className="mt-4 text-base font-normal text-gray-500 leading-relax">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
                    accusantium, quidem asperiores ea similique, error maxime
                    quia sequi nisi omnis nam, placeat corporis quos? Tempora
                    similique aliquid nesciunt itaque provident?
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CardProduct;
