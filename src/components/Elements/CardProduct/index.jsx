const product = [
  {
    id: 1,
    title: "Entry",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere exercitationem nulla cupiditate, similique numquam nihil expedita rerum velit dolores incidunt hic eum reiciendis beatae blanditiis illum. Cumque fugiat possimus explicabo.",
    image:
      "https://i0.wp.com/petaniquick.com/wp-content/uploads/2019/02/BOXER-85-S-Series-2.png?resize=571%2C527&ssl=1",
  },
  {
    id: 2,
    title: "Entry",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere exercitationem nulla cupiditate, similique numquam nihil expedita rerum velit dolores incidunt hic eum reiciendis beatae blanditiis illum. Cumque fugiat possimus explicabo.",
    image:
      "https://i0.wp.com/petaniquick.com/wp-content/uploads/2019/02/BOXER-85-S-Series-2.png?resize=571%2C527&ssl=1",
  },
  {
    id: 3,
    title: "Entry",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere exercitationem nulla cupiditate, similique numquam nihil expedita rerum velit dolores incidunt hic eum reiciendis beatae blanditiis illum. Cumque fugiat possimus explicabo.",
    image:
      "https://i0.wp.com/petaniquick.com/wp-content/uploads/2019/02/BOXER-85-S-Series-2.png?resize=571%2C527&ssl=1",
  },
  {
    id: 4,
    title: "Entry",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere exercitationem nulla cupiditate, similique numquam nihil expedita rerum velit dolores incidunt hic eum reiciendis beatae blanditiis illum. Cumque fugiat possimus explicabo.",
    image:
      "https://i0.wp.com/petaniquick.com/wp-content/uploads/2019/02/BOXER-85-S-Series-2.png?resize=571%2C527&ssl=1",
  },
];

const CardProduct = () => {
  return (
    <section>
      {/* <h1 className="mt-8 text-center text-5xl text-green-600 font-bold">
        PRODUCT
      </h1> */}

      <div className="flex justify-center">
        <div className="flex flex-wrap mx-auto md:flex-nowrap p-12">
          {product.map((item) => (
            <a href="" key={item.id}>
              <div className="flex w-full">
                <div className="relative flex flex-col items-start m-1 transition duration-300 ease-in-out delay-150 transform bg-white shadow-2xl rounded-xl md:w-80 md:-ml-16 md:hover:-translate-x-16 md:hover:-translate-y-8">
                  <img
                    className="object-cover object-center w-full rounded-t-xl lg:h-48 md:h-36"
                    src={item.image}
                    alt="product"
                  />
                  <div className="px-6 py-8"></div>
                  <h1 className="mt-4 text-2xl font-semibold text-neutral-600">
                    <span className="">{item.title}</span>
                  </h1>
                  <p className="mt-4 text-base font-normal text-gray-500 leading-relax">
                    {item.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardProduct;
