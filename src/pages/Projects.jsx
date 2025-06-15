import React from "react";

const projects = [
  {
    title: "MIT Hyperloop",
    image:
      "https://meche.mit.edu/sites/default/files/Hyperloop%20teaser.jpg",
    description:
      "A revolutionary high-speed transportation pod. Estimated cost: $5 million. Designed for eco-friendly, rapid transit.",
  },
  {
    title: "MIT Mini Cheetah Robot",
    image:
      "https://news.mit.edu/sites/default/files/images/202203/minicheetah-stand2.png",
    description:
      "An agile four-legged robot capable of flips. Cost: $1.2 million. Helps with search, rescue, and terrain exploration.",
  },
  {
    title: "Smart Prosthetic Arm",
    image:
      "https://cdn.trendhunterstatic.com/thumbs/474/smart-prosthetic-arm.jpeg",
    description:
      "A neuro-controlled arm for amputees. Cost: $800K. Offers responsive and precise movement.",
  },
  {
    title: "Urban Heat Mapping Drone",
    image:
      "https://images.jdmagicbox.com/v2/comp/bangalore/w9/080pxx80.xx80.100920151652.d5w9/catalogue/jetwings-technologies-new-thippasandra-bangalore-laboratory-equipment-dealers-1otmjzdvqm.jpg",
    description:
      "Drone to monitor urban temperature zones. Cost: $2 million. Supports urban planning against climate change.",
  },
  {
    title: "MIT Nanobot Research",
    image:
      "https://thesiliconreview.com/story_image_upload/article/thesiliconreview-mit-unleashes-nano-robots-that-hunt-and-eliminate-cancer-cells-with-s_2025-04-09_11-38-59.webp",
    description:
      "Self-assembling nanobots. Budget: $3.5 million. Aimed at smart drug delivery and medical procedures.",
  },
  {
    title: "AI Cancer Detection",
    image:
      "https://news.mit.edu/sites/default/files/images/202308/MIT-Unknown-Cancer-01.jpg",
    description:
      "AI that detects cancer early from scans. Research cost: $6 million. Used for life-saving early diagnosis.",
  },
  {
    title: "Floating Fusion Reactor",
    image:
      "https://news.mit.edu/sites/default/files/download/202412/MIT_CFSFusion-03-PRESS.jpg",
    description:
      "Ocean-based fusion reactor. Cost: $25 million. Aims to generate limitless clean energy.",
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-white py-20 px-6 sm:px-10 lg:px-24 font-inter">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-[#a31f34] mb-12 drop-shadow-sm">
        Featured MIT Projects
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((proj, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden transition"
          >
            <img
              src={proj.image}
              alt={proj.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-[#a31f34] mb-2">
                {proj.title}
              </h3>
              <p className="text-gray-800 text-base leading-relaxed">
                {proj.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
