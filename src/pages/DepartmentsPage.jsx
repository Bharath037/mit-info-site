// src/pages/DepartmentsPage.jsx
import React from "react";

const departments = [
  {
    name: "Schwarzman College of Computing",
    image: "https://www.world-architects.com/images/CmsImageContent/84/26/22/a3975aa860d84834936e6757d9e36aff/a3975aa860d84834936e6757d9e36aff.f5fb7444.jpg",
    description: "Pioneering new approaches in computing education and research.",
  },
  {
    name: "CSAIL (Computer Science & AI)",
    image: "https://media.licdn.com/dms/image/v2/C4E1BAQHuei3cNsIvqQ/company-background_10000/company-background_10000/0/1585355531343/mit_csail_cover?e=2147483647&v=beta&t=HlstKuOnzoFzefO0jgJluEkAltPgvZUfD0wZH07Li_k",
    description: "Leading the future of artificial intelligence and computer science.",
  },
  {
    name: "Sloan School of Management",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/MIT_Sloan_School_of_Management_%28MIT_Building_E62%29.jpg/500px-MIT_Sloan_School_of_Management_%28MIT_Building_E62%29.jpg",
    description: "Developing principled, innovative leaders who improve the world.",
  },
  {
    name: "Mechanical Engineering",
    image: "https://capitalprojects.mit.edu/sites/default/files/styles/project_full_540x348/public/Bldg31_003781_JRissmeyer_cr.jpg?itok=Cdi7m4CQ",
    description: "Solving complex problems through design, manufacturing, and energy systems.",
  },
  {
    name: "Chemical Engineering",
    image: "https://sah-archipedia.org/sites/default/files/pictures/full/MA-01-MT9-008.jpg",
    description: "Advancing knowledge in areas from biotechnology to sustainable energy.",
  },
  {
    name: "Aeronautics & Astronautics",
    image: "https://aeroastro.mit.edu/wp-content/uploads/2021/08/MIT-AeroAstro-Archive-aspect-ratio-446-446-892x892-c-default.jpg",
    description: "Shaping the future of air and space transportation and exploration.",
  },
  {
    name: "Civil & Environmental Engineering",
    image: "https://archipreneur.com/wp-content/uploads/2018/07/MIT_Slider.jpg",
    description: "Building a sustainable future through infrastructure and environmental solutions.",
  },
  {
    name: "Biology",
    image: "https://biology.mit.edu/wp-content/uploads/2022/08/400-Technology-Sq-Cambridge-MA-Primary-Photo-1-Large-413x275.jpeg",
    description: "Unraveling the mysteries of life through groundbreaking biological research.",
  },
  {
    name: "Chemistry",
    image: "https://chemistry.mit.edu/wp-content/uploads/2018/09/MIT-Nano-01_0.jpg",
    description: "Exploring the fundamental principles of matter and its transformations.",
  },
  {
    name: "Physics",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/MITPhysics.jpg/500px-MITPhysics.jpg",
    description: "Pushing the boundaries of scientific discovery in the physical world.",
  },
  {
    name: "Urban Studies & Planning (DUSP)",
    image: "https://dusp.mit.edu/sites/default/files/styles/large/public/news-images/intm_525_2.jpg?h=2e5622b7&itok=qrsv7LRH",
    description: "Designing resilient and equitable communities for the 21st century.",
  },
  {
    name: "Economics (SHASS)",
    image: "https://economics.mit.edu/sites/default/files/styles/homepage_feature_image_1x/public/2024-02/_MG_2555_0.png?h=08fb88e7&itok=bwOs7jHt",
    description: "Analyzing economic phenomena to inform policy and understand global markets.",
  },
];

const DepartmentsPage = () => (
  <div className="min-h-screen bg-white  py-16 px-4 sm:px-6 lg:px-8 font-inter">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-rose-800 mb-12 sm:mb-16 drop-shadow-md">
        <br />
        <span>MIT Departments & Schools</span>
    </h1>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
      {departments.map((dept, i) => (
        <motion.div
          key={i}
          role="button"
          tabIndex={0}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          whileHover={{ scale: 1.05 }}
          className="relative bg-white rounded-2xl shadow-md border border-rose-200 overflow-hidden transition-all duration-300 cursor-pointer group group-hover:shadow-2xl group-hover:ring-1 group-hover:ring-rose-300"
        >
          <img
            src={dept.image}
            alt={dept.name}
            className="w-full h-48 object-cover rounded-t-2xl transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = `https://placehold.co/400x300/FECACA/B91C1C?text=${encodeURIComponent(dept.name.replace(/ /g, '+'))}`;
            }}
          />
          <div className="p-5 flex flex-col items-center text-center">
            <h2 className="text-xl font-semibold text-rose-800 mb-2">
              {dept.name}
            </h2>
            <p className="text-sm text-gray-700">
              {dept.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

export default DepartmentsPage;
