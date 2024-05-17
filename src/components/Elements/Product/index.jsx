import Button from "../Button";

const Product = () => {
  const products = [
    {
      title: "Pipa Hidroponik",
      image:
        "https://asset-a.grid.id/crop/0x0:0x0/700x465/photo/2019/03/17/3371826314.jpg",
      description:
        "Rockwool adalah salah satu media tanam pengganti tanah yang biasa digunakan dalam budidaya tanaman secara hidroponik.",
    },
    {
      title: "barang",
      image:
        "https://asset-a.grid.id/crop/0x0:0x0/700x465/photo/2019/03/17/3371826314.jpg",
      description:
        "Rockwool adalah salah satu media tanam pengganti tanah yang biasa digunakan dalam budidaya tanaman secara hidroponik.",
    },
    // Add your new product details here following the same format
  ];

  return (
    <div className="w-[427px] h-[526.657px] relative mx-auto">
      <h1 className=" w-[426px] h-[18.99%] font-Montserrat text-[32px] font-bold  text-[#47af64]  text-center">
        Produk
      </h1>

      {/* Card Products */}
      <div className="flex flex-row justify-center">
        {products.map((product) => (
          <div
            key={product.title}
            className="w-[81.97%] h-[84.05%] bg-[#eaf7fd] rounded-[15px] m-2 z-[6]"
          >
            <div className="w-[350px] h-[218px] bg-no-repeat relative z-[12] mt-0 mr-0 mb-0 ml-[-1px]">
              <img src={product.image} alt={product.title} />
            </div>
            <h1 className="block h-[23px] font-Inter text-[18px] font-bold leading-[21.784px] text-[#141f45] relative text-left whitespace-nowrap z-[7] mt-[29px] mr-0 mb-0 ml-[18px]">
              {product.title}
            </h1>
            <p className="flex w-[283px] h-[73.838px] justify-start items-start font-Montserrat text-[15px] font-normal leading-[18.285px] text-[#000] relative text-left z-[8] mt-[5px] mr-0 mb-0 ml-[18px]">
              {product.description}
            </p>
            <div className="w-[164.531px] h-[54px]  relative z-10 mt-[21.162px] mr-0 mb-0 ml-[26.239px]">
              <Button>Detail</Button>
            </div>
          </div>
        ))}
      </div>
      {/* End Card Products */}
    </div>
  );
};

export default Product;
