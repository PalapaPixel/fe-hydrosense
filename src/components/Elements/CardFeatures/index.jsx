import Button from "../Button";

const cardFeatures = [
  {
    id: 1,
    image:
      "https://images01.nicepage.com/c461c07a441a5d220e8feb1a/a17abde8d83650a582a28432/users-with-speech-bubbles-vector_53876-82250.jpg",
    title: "Monitoring",
    deskripsi:
      "Pretium lectus quam id leo in vitae turpis. Mattispellentesque id nibh tortor id",
  },
  {
    id: 2,
    image:
      "https://images01.nicepage.com/c461c07a441a5d220e8feb1a/a17abde8d83650a582a28432/users-with-speech-bubbles-vector_53876-82250.jpg",
    title: "Monitoring",
    deskripsi:
      "Pretium lectus quam id leo in vitae turpis. Mattispellentesque id nibh tortor id",
  },
  {
    id: 3,
    image:
      "https://images01.nicepage.com/c461c07a441a5d220e8feb1a/a17abde8d83650a582a28432/users-with-speech-bubbles-vector_53876-82250.jpg",
    title: "Monitoring",
    deskripsi:
      "Pretium lectus quam id leo in vitae turpis. Mattispellentesque id nibh tortor id",
  },
];

const CardFeatures = () => {
  return (
    <header>
      <div className="md:flex md:justify-around md:space-x-8 md:px-14">
        {cardFeatures.map((item) => (
          <div
            key={item.id}
            className="mt-16 py-4 px-4 bg-whit w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0"
          >
            <img className="w-64" src={item.image} alt="" />
            <div className="mt-4 text-green-600 text-center">
              <h1 className="text-xl font-bold">{item.title}</h1>
              <p className="mt-4 text-gray-600">{item.deskripsi}</p>
              <div className="mt-8 mb-4 ">
                <Button>More</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </header>
  );
};

export default CardFeatures;
