import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
//import Lightbox from "react-image-lightbox";
//import "react-image-lightbox/style.css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";


const galleryData = {
  "Campus Aerials": [
    { src: "https://wallpapers.com/images/high/aerial-view-of-stata-center-mit-rifl87ol60tkfier.webp", title: "MIT Stata Center Aerial" },
    { src: "https://m.psecn.photoshelter.com/img-get/I0000p.aLlHBaTxk/s/1200/I0000p.aLlHBaTxk.jpg", title: "MIT Killian Court Aerial" },
    { src: "https://alum.mit.edu/sites/default/files/styles/article_desktop/public/images/24HC_Trivia%20Photo.jpg?h=f2fcf546&itok=acsMuGdw", title: "MIT with Boston Skyline" },
    { src: "https://news.mit.edu/sites/default/files/styles/news_article__image_gallery/public/images/202008/MIT-Dome-Fall-Dominick-Reuter_0.jpg?itok=dGDtTIP2", title: "MIT from Charles River" },
  ],
  "Iconic Architecture": [
    { src: "https://images.squarespace-cdn.com/content/v1/675318540e180f1801c6421e/1733499088402-X1XRHME8B8L4M9OEQ158/MIT+Killian+Court+6+ND.jpg", title: "Killian Court" },
    { src: "https://news.mit.edu/sites/default/files/styles/news_article__image_gallery/public/images/201302/20130214103223-5.jpg?itok=x_-EZsHw", title: "Main Building Dome" },
    { src: "https://sah-archipedia.org/sites/default/files/pictures/full/MA-01-MT5_004.jpg", title: "Stata Center" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/5/57/2017_Rogers_Building_%28MIT_Building_7%29%2C_77_Massachusetts_Avenue%2C_Cambridge%2C_Massachusetts.jpg", title: "Rogers Building" },
  ],
  "Research & Innovation": [
    { src: "https://news.mit.edu/sites/default/files/styles/news_article__image_gallery/public/images/202105/Multiply-Labs-01-Press_0.jpg?itok=2eZFLvIu", title: "Robotics Lab" },
    { src: "https://www.elkus-manfredi.com/wp-content/uploads/2018/06/BROAD_01HERO_desktop_ext_5.jpg", title: "Broad Institute Lab" },
    { src: "https://biomimetics.mit.edu/static/cover_photo-989c3d22ed416b6aa06e5d3571a22f19.png", title: "AI Robotics Research" },
    { src: "https://news.mit.edu/sites/default/files/download/202109/MIT_Fusion-Magnets-02-PRESS.jpg", title: "Plasma Fusion Research" },
  ],
  "Student Life & Events": [
    { src: "https://news.mit.edu/sites/default/files/styles/news_article__image_gallery/public/images/202005/CPW%2520graphic-1.png?itok=2sB1nb77", title: "Campus Preview Weekend" },
    { src: "https://mitadmissions.org/wp-content/uploads/2020/07/im3a_party.png", title: "Students on Campus" },
    { src: "https://mitadmissions.org/wp-content/uploads/2014/04/Concert-Chosen-Photos-28.jpg", title: "SpringFest Concert" },
    { src: "https://s3.amazonaws.com/media.thecrimson.com/photos/2009/11/09/133457_mit-considering-increasing-300.jpg", title: "MIT Campus Day" },
  ],
  "Achievements & Community": [
    { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSClaoBsxNh0X2TBgCHVffbWlk6SWLPV4kf1f5Kpl5PokbX49HsQKY_3cFUhGAXFw5bbek&usqp=CAU", title: "Commencement Ceremony" },
    { src: "https://news.mit.edu/sites/default/files/styles/news_article__image_gallery/public/images/201405/010_7562.jpg?itok=GMUa1ybc", title: "Alumni Trophy" },
    { src: "https://alum.mit.edu/sites/default/files/styles/visual_story_group_large/public/2024-10/MIT_ALC_24_78735_0.jpg?h=0f4230fa&itok=Y7Uc5foG", title: "Alumni Leadership Conference" },
    { src: "https://commencement.mit.edu/sites/default/files/2025-05/Killian%20audience.jpg", title: "Graduation Celebration" },
  ],
};

const Gallery = () => {
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const flatImages = Object.values(galleryData).flat().map(item => item.src);
  const flatTitles = Object.values(galleryData).flat().map(item => item.title);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-12 font-inter text-gray-800"
    >
      <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-rose-600 mb-16 drop-shadow-sm">
      <br />
      <span> MIT Campus Gallery</span>
        <br />
        <span className="text-gray-600 text-lg font-medium">
          Massachusetts Institute of Technology
        </span>
      </h1>

      {Object.entries(galleryData).map(([category, images], idx) => (
        <div key={idx} className="mb-20">
          <h2 className="text-3xl font-bold text-rose-500 mb-8 border-l-4 border-rose-600 pl-4 shadow-sm">
            {category}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {images.map((img, i) => {
              const index = flatImages.indexOf(img.src);
              return (
                <motion.div
                  key={i}
                  className="relative group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md cursor-pointer"
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => {
                    setLightboxIndex(index);
                    setLightboxOpen(true);
                  }}
                >
                  <img
                    src={img.src}
                    alt={img.title}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500 rounded-xl"
                    loading="lazy"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `https://placehold.co/400x300/EEEEEE/444444?text=Image+Not+Found`;
                    }}
                  />
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 rounded-xl">
                    <p className="text-white text-lg font-semibold drop-shadow">
                      {img.title}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      ))}

      <AnimatePresence>
        {lightboxOpen && (
          <Lightbox
            mainSrc={flatImages[lightboxIndex]}
            nextSrc={flatImages[(lightboxIndex + 1) % flatImages.length]}
            prevSrc={flatImages[(lightboxIndex + flatImages.length - 1) % flatImages.length]}
            onCloseRequest={() => setLightboxOpen(false)}
            onMovePrevRequest={() =>
              setLightboxIndex((lightboxIndex + flatImages.length - 1) % flatImages.length)
            }
            onMoveNextRequest={() =>
              setLightboxIndex((lightboxIndex + 1) % flatImages.length)
            }
            imageTitle={flatTitles[lightboxIndex]}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Gallery;
