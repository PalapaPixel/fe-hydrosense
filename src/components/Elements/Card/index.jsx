import Button from "../Button";

const cardJson = [
  {
    id: 1,
    title: "Card Title 1",
    description: "Description for Card 1",
    image:
      "https://imgsrv2.voi.id/joKw1Lw0fLDb7HIIvA7G22PlAGAJX29J9Yca8ByAUpc/auto/1200/675/sm/1/bG9jYWw6Ly8vcHVibGlzaGVycy8yNjcwMjgvMjAyMzAzMjcxMDM5LW1haW4uY3JvcHBlZF8xNjc5ODg4MzY0LmpwZw.jpg",
  },
  {
    id: 2,
    title: "Card Title 2",
    description: "Description for Card 2",
    image:
      "https://imgsrv2.voi.id/joKw1Lw0fLDb7HIIvA7G22PlAGAJX29J9Yca8ByAUpc/auto/1200/675/sm/1/bG9jYWw6Ly8vcHVibGlzaGVycy8yNjcwMjgvMjAyMzAzMjcxMDM5LW1haW4uY3JvcHBlZF8xNjc5ODg4MzY0LmpwZw.jpg",
  },
  {
    id: 3,
    title: "Card Title 3",
    description: "Description for Card 3",
    image:
      "https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/p1/305/2024/05/02/Tak-berjudul373_20240502000612-1499106585.png",
  },
  {
    id: 4,
    title: "Card Title 4",
    description: "Description for Card 4",
    image:
      "https://pertanian.sultengprov.go.id/wp-content/uploads/2022/12/smart-farming-iot-agriculture.webp",
  },
];

const Card = () => {
  return (
    <div className="flex flex-row flex-wrap items-center justify-center">
      {cardJson.map((item) => (
        <div
          key={item.id}
          className="relative flex w-96 flex-col rounded-xl my-10 mx-10 bg-[#EBF8FE] bg-clip-border text-gray-700 shadow-md"
        >
          <div className="relative mx-4 -mt-6 h-56 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
            <img src={item.image} alt="img-blur-shadow" />
          </div>
          <div className="p-6">
            <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              {item.title}
            </h5>
            <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
              {item.description}
            </p>
          </div>
          <div className="p-6 pt-0">
            <Button>Detail</Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
