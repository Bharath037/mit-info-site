import React from "react";

const featureData = [
  { title: "Top Faculty", icon: "🎓", desc: "World-renowned experts committed to your success." },
  { title: "Advanced Labs", icon: "🧪", desc: "Cutting-edge research facilities to fuel innovation." },
  { title: "Industry Ties", icon: "🤝", desc: "Strong partnerships offering internships and placements." },
  { title: "Global Alumni", icon: "🌍", desc: "A vast network of leaders across the globe." },
];

const programsOffered = [
  { name: "B.Tech - Undergraduate", desc: "Comprehensive foundation in engineering and technology." },
  { name: "M.Tech - Postgraduate", desc: "Specialized master's programs to deepen expertise." },
  { name: "Ph.D.", desc: "Advanced research opportunities in cutting-edge fields." },
  { name: "Diploma", desc: "Skill-oriented programs for industry readiness." },
];

const eligibilityCriteria = [
  "B.Tech: 10+2 with Physics, Chemistry, Maths (Minimum 60%)",
  "M.Tech: Bachelor’s degree in related field (Minimum 60%)",
  "Ph.D.: Master's degree with valid entrance qualification",
];

const admissionSteps = [
  "Register Online",
  "Appear for Entrance Exam",
  "Check Results",
  "Attend Counseling",
  "Complete Admission Formalities",
];

const scholarships = [
  { title: "Merit-Based Scholarships", desc: "Awarded to outstanding students for academic excellence." },
  { title: "Need-Based Financial Aid", desc: "Support for deserving students with financial constraints." },
  { title: "Government Grants", desc: "Various grants provided by government bodies." },
  { title: "Research Assistantships", desc: "Opportunities to work on funded research projects." },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Admissions = () => {
  return (
    <motion.main
      className="font-inter text-gray-900 bg-white"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Hero Section */}
      <motion.section
        className="bg-white py-20 px-6 text-center"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-extrabold text-[#a31f34] mb-4 leading-tight">
            <br />
            <span>Admissions Open – Join MIT Today!</span>
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-700">
            Empowering the innovators of tomorrow through world-class education and unparalleled opportunities.
          </p>
          <div className="inline-block bg-[#a31f34] text-white text-lg font-semibold px-8 py-4 rounded-full shadow-lg cursor-default pointer-events-none">
  Application will open on August
</div>


        </div>
      </motion.section>

      {/* Why Choose MIT */}
      <motion.section
        className="max-w-7xl mx-auto px-6 py-20"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold text-center text-[#a31f34] mb-12">
          Why Choose MIT?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {featureData.map(({ title, icon, desc }, i) => (
            <motion.article
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-8 rounded-3xl shadow-md border border-gray-200 flex flex-col items-center"
              tabIndex={0}
              aria-label={title}
            >
              <div className="text-6xl mb-4">{icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-[#a31f34]">{title}</h3>
              <p className="text-gray-700 text-sm">{desc}</p>
            </motion.article>
          ))}
        </div>
      </motion.section>

      {/* Programs Offered */}
      <motion.section
        className="bg-white py-20 px-6"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold text-center text-[#a31f34] mb-12">
          Programs Offered
        </h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
          {programsOffered.map(({ name, desc }, i) => (
            <article
              key={i}
              className="bg-white p-8 rounded-3xl shadow-md hover:shadow-lg transition border border-gray-200"
              tabIndex={0}
            >
              <h3 className="text-2xl font-semibold text-[#a31f34] mb-3">{name}</h3>
              <p className="text-gray-700">{desc}</p>
            </article>
          ))}
        </div>
      </motion.section>

      {/* Eligibility Criteria */}
      <motion.section
        className="max-w-3xl mx-auto py-20 px-6"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold text-[#a31f34] mb-8 text-center">
          Eligibility Criteria
        </h2>
        <ul className="list-disc list-inside space-y-4 text-lg text-gray-800">
          {eligibilityCriteria.map((item, i) => (
            <li key={i} tabIndex={0}>{item}</li>
          ))}
        </ul>
      </motion.section>

      {/* Admission Process */}
      <motion.section
        className="bg-white py-20 px-6"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold text-center text-[#a31f34] mb-12">
          Admission Process
        </h2>
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-center gap-10 text-center">
          {admissionSteps.map((step, i) => (
            <article
              key={i}
              className="flex-1 bg-white p-8 rounded-3xl shadow-md border border-gray-200"
              tabIndex={0}
            >
              <div className="text-3xl font-extrabold text-[#a31f34] mb-4">
                Step {i + 1}
              </div>
              <p className="text-gray-800 font-semibold">{step}</p>
            </article>
          ))}
        </div>
      </motion.section>

      {/* Scholarships */}
      <motion.section
        className="max-w-6xl mx-auto py-20 px-6"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold text-[#a31f34] mb-12 text-center">
          Scholarships & Financial Aid
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {scholarships.map(({ title, desc }, i) => (
            <article
              key={i}
              className="bg-white p-8 rounded-3xl shadow-md border border-gray-200"
              tabIndex={0}
            >
              <h3 className="text-2xl font-semibold text-[#a31f34] mb-4">{title}</h3>
              <p className="text-gray-700 text-sm">{desc}</p>
            </article>
          ))}
        </div>
      </motion.section>

      {/* Contact Admissions */}
      <motion.section
        className="bg-white py-20 px-6"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#a31f34] mb-6">
            Contact Admissions Office
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            📧{" "}
            <a
              href="mailto:admissions@mit.edu"
              className="underline hover:text-black"
            >
              admissions@mit.edu
            </a>{" "}
            | ☎️{" "}
            <a href="tel:+919876543210" className="underline hover:text-black">
              +91-9876543210
            </a>
          </p>
          <div className="inline-block bg-[#a31f34] text-white px-8 py-4 rounded-full font-semibold shadow-lg cursor-default pointer-events-none">
            Contact Us
          </div>
        </div>
      </motion.section>
    </motion.main>
  );
};

export default Admissions;
