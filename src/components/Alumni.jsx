import React from "react";

const alumniList = [
  {
    name: "Kofi Annan",
    title: "Former UN Secretary-General",
    image:
      "https://dam.media.un.org/AssetLink/2q3153qx14lq02a1vfvcu2xr0q2134gn",
  },
  {
    name: "Buzz Aldrin",
    title: "Astronaut – Apollo 11",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Buzz_Aldrin.jpg/1200px-Buzz_Aldrin.jpg",
  },
  {
    name: "Richard Feynman",
    title: "Nobel Prize-winning Physicist",
    image:
      "https://caltech-prod.s3.amazonaws.com/main/images/feynman01-NEWS-WEB.original_AqOLTwJ.jpg",
  },
  {
    name: "Drew Houston",
    title: "Co-founder & CEO of Dropbox",
    image:
      "https://i.insider.com/652cffa755f52b01b3600487?width=700",
  },
  {
    name: "Shirley Ann Jackson",
    title: "Physicist, President of Rensselaer Polytechnic Institute",
    image:
      "https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/d/r/DrJackson_2.jpg?crop=0%2C0%2C600%2C600&wid=640&hei=640&scl=0.9375",
  },
  {
    name: "Benjamin Netanyahu",
    title: "Former Prime Minister of Israel",
    image:
      "https://cloudfront-us-east-2.images.arcpublishing.com/reuters/BIV2S4SX4VPXHCJNCHDUMHHPVU.jpg",
  },
];

const cardVariants = {
  offscreen: { opacity: 0, y: 40, scale: 0.9 },
  onscreen: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 0.7,
    },
  },
};

const Alumni = () => {
  return (
    <section id="alumni" className="bg-gray-50 py-24 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-red-700 mb-16 drop-shadow-md">
          Notable MIT Alumni
        </h2>
        <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-3">
          {alumniList.map((alumnus, i) => (
            <motion.div
              key={alumnus.name}
              className="relative rounded-3xl bg-white shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition-shadow duration-300"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.5 }}
              variants={cardVariants}
              style={{ willChange: "transform, opacity" }}
            >
              {/* Image */}
              <img
                src={alumnus.image}
                alt={alumnus.name}
                className="w-full h-72 object-cover"
                loading="lazy"
                draggable={false}
              />
              {/* Info */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-red-800 hover:text-red-900 transition-colors duration-300">
                  {alumnus.name}
                </h3>
                <p className="text-gray-600 mt-2 text-sm md:text-base">{alumnus.title}</p>
              </div>

              {/* Animated Badge */}
              <motion.div
                className="absolute top-4 right-4 bg-red-700 text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg select-none"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.3, ease: "easeOut" }}
              >
                🎓 MIT Alum
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Alumni;
