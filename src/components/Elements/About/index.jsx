const profile = [
  {
    name: "Kntl",
    role: "Chief Executive Officer",
    description:
      "The corporate IQ is to establish an atmosphere that promotes knowledge sharing and collaboration.",
    image: "https://cdn.tuk.dev/assets/photo-1564061170517-d3907caa96ea.jfif",
    social: [
      {
        icons: "Github",
        link: "#",
      },
      {
        icons: "Twitter",
        link: "#",
      },
      {
        icons: "Instagram",
        link: "#",
      },
    ],
  },
  {
    name: "mmk",
    role: "Software Engineer",
    description:
      "Passionate about building scalable and efficient applications.",
    image: "https://example.com/john-doe.jpg",
    social: [
      {
        icons: "Github",
        link: "#",
      },
      {
        icons: "Twitter",
        link: "#",
      },
      {
        icons: "LinkedIn",
        link: "#",
      },
    ],
  },
  {
    name: "jhony",
    role: "UI/UX Designer",
    description:
      "Creating beautiful and intuitive user interfaces for seamless user experiences.",
    image: "https://example.com/jane-smith.jpg",
    social: [
      {
        icons: "Dribbble",
        link: "#",
      },
      {
        icons: "Behance",
        link: "#",
      },
      {
        icons: "Instagram",
        link: "#",
      },
    ],
  },
  // Add more profiles here
];

const About = () => {
  return (
    <div className="mb-16">
      <div className="container flex justify-center mx-auto pt-16">
        <div>
          <p className="text-gray-500 text-lg text-center font-normal pb-3">
            BUILDING TEAM
          </p>
          <h1 className="xl:text-4xl text-3xl text-center text-gray-800 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">
            The Talented People Behind the Scenes of the Organization
          </h1>
        </div>
      </div>
      <div className="w-full bg-gray-100 px-10 pt-10">
        <div className=" container mx-auto">
          <div className="lg:flex md:flex sm:flex items-center xl:justify-between flex-row flex-wrap md:justify-around sm:justify-around lg:justify-around">
            {profile.map((person, index) => (
              <div
                key={index}
                className="xl:w-1/3 sm:w-3/3 md:w-2/5 relative mt-16 mb-32 mx-16 sm:mb-24 xl:max-w-sm lg:w-2/5"
              >
                {/* Card */}
                <div className="rounded overflow-hidden shadow-md bg-white">
                  <div className="absolute -mt-20 w-full flex justify-center">
                    <div className="h-32 w-32">
                      <img
                        src={person.image}
                        alt={`Display Picture of ${person.name}`}
                        className="rounded-full object-cover h-full w-full shadow-md"
                      />
                    </div>
                  </div>
                  <div className="px-6 mt-16">
                    <h1 className="font-bold text-3xl text-center mb-1">
                      {person.name}
                    </h1>
                    <p className="text-gray-800 text-sm text-center">
                      {person.role}
                    </p>
                    <p className="text-center text-gray-600 text-base pt-3 font-normal">
                      {person.description}
                    </p>
                    <div className="w-full flex justify-center pt-5 pb-5">
                      {person.social.map((social, index) => (
                        <a key={index} href={social.link} className="mx-5">
                          <div>{social.icons}</div>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Card */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
