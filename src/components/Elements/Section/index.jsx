import imageSection from "../../../assets/section.png";
// import Button from "../Button";

const Section = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
            <img
              alt="Image Section"
              src={imageSection}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          <div className="lg:py-24">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Kenapa harus kami ?
            </h2>

            <p className="mt-4 text-gray-600">
              HydroSense menyajikan informasi seputar cara mengelola tanaman
              hidroponik, dan disertai panduan terstruktur.
            </p>

            <a
              href="#"
              className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Temukan
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Section;
