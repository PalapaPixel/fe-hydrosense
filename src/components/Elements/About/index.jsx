const profiles = [
  {
    name: "Kntl",
    role: "Chief Executive Officer",
    description:
      "The corporate IQ is to establish an atmosphere that promotes knowledge sharing and collaboration.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSszvsccKUE5HBv_-DUyvp6sTd8BeDSURfHd2iFPfDnzLhkEP3K9GCLF_c3u4HRwpd9eLg&usqp=CAU",
  },
  {
    name: "Kntl",
    role: "Chief Executive Officer",
    description:
      "The corporate IQ is to establish an atmosphere that promotes knowledge sharing and collaboration.",
    image:
      "https://awsimages.detik.net.id/community/media/visual/2023/08/25/lihat-meme-ini-auto-putus-asa-tetap-menyerah-dan-jangan-semangat-4.jpeg?w=1200",
  },
  {
    name: "Kntl",
    role: "Chief Executive Officer",
    description:
      "The corporate IQ is to establish an atmosphere that promotes knowledge sharing and collaboration.",
    image: "https://cdn.tuk.dev/assets/photo-1564061170517-d3907caa96ea.jfif",
  },
  {
    name: "Kntl",
    role: "Chief Executive Officer",
    description:
      "The corporate IQ is to establish an atmosphere that promotes knowledge sharing and collaboration.",
    image: "https://cdn.tuk.dev/assets/photo-1564061170517-d3907caa96ea.jfif",
  },
  // Tambahkan profil lain di sini
];

const About = () => {
  return (
    <div className="py-20">
      <div className="xl:container mx-auto px-6 md:px-12">
        <div>
          <h1 className="text-center text-3xl font-bold mb-10">TIM KAMI</h1>
        </div>
        <div className="grid gap-6 px-4 sm:px-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {profiles.map((profile, index) => (
            <div
              key={index}
              className="group relative rounded-3xl space-y-6 overflow-hidden"
            >
              <img
                className="mx-auto h-[26rem] w-full grayscale object-cover object-top transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                src={profile.image}
                alt={profile.name}
                loading="lazy"
                width="640"
                height="805"
              />
              <div className="absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-gray-800 dark:bg-white translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0 text-center">
                <div>
                  <h4 className="text-xl font-semibold dark:text-gray-700 text-white">
                    {profile.name}
                  </h4>
                  <span className="block text-sm text-gray-500">
                    {profile.role}
                  </span>
                </div>
                <p className="mt-8 text-gray-300 dark:text-gray-600">
                  {profile.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
