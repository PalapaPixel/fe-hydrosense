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
];

const Card = () => {
  return (
    <div className="py-12">
      <div className=" xl:container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {cardJson.map((card) => (
            <div
              key={card.id}
              className="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-[#EBF8FE] bg-opacity-50 shadow-2xl shadow-gray-600/10"
            >
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={card.image}
                  alt="art cover"
                  loading="lazy"
                  width="1000"
                  height="667"
                  className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-6 relative">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-black">
                  {card.title}
                </h3>
                <p className="mt-6 mb-8 text-gray-600 dark:text-black">
                  {card.description}
                </p>
                <Button>Detail</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
