import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

import architecture1 from "../assets/img39.webp";
import architecture2 from "../assets/architecture1.jpg";
import architecture3 from "../assets/architecture.jpg";
import architecture4 from "../assets/architecture2.jpg";
import architecture5 from "../assets/architecture3.jpg";
import architecture6 from "../assets/architecture4.jpg";
import architecture7 from "../assets/architecture5.jpg";
import project2 from "../assets/img2.jpg";
import project3 from "../assets/img3.jpg";
import bedroom from "../assets/bedroom.jpg";
import bedroom1 from "../assets/bedroom1.jpg";
import bedroom2 from "../assets/bedroom3.jpg";
import lobby from "../assets/interior.jpg";
import lobby1 from "../assets/lobby.jpg";
import lobby2 from "../assets/lobby1.jpg";
import lobby3 from "../assets/lobby2.jpg";
import interior from "../assets/interior12.jpg";
import interior1 from "../assets/interior1.jpg";
import interior2 from "../assets/interior2.jpg";
import landscape from "../assets/landscape.jpg";
import landscape1 from "../assets/landscape1.jpg";
import landscape2 from "../assets/lc.jpg";
import lobby5 from "../assets/lobby/lobby10.jpg";
import lobby6 from "../assets/lobby/lobby11.jpg";
import lobby7 from "../assets/lobby/lobby12.jpg";
import bedroom5 from "../assets/bedroom/bd1.jpg";
import bedroom6 from "../assets/bedroom/bd2.jpg";
import bedroom7 from "../assets/bedroom/bd3.jpg";
import ar1 from "../assets/architecture/ar1.jpg";
import ar2 from "../assets/architecture/ar2.jpg";
import ar3 from "../assets/architecture/ar3.jpg";
import ar4 from "../assets/architecture/ar4.jpg";
import ar5 from "../assets/architecture/ar5.jpg";
import ar6 from "../assets/architecture/ar6.jpg";
import ar7 from "../assets/architecture/ar7.jpg";
import ar8 from "../assets/architecture/ar8.jpg";
import ar9 from "../assets/architecture/ar9.jpg";
import ar10 from "../assets/architecture/ar10.jpg";
import ar11 from "../assets/architecture/ar11.jpg";
import ar12 from "../assets/architecture/ar12.jpg";
import ar13 from "../assets/architecture/ar13.jpg";
import ar14 from "../assets/architecture/ar14.jpg";
import ar16 from "../assets/architecture/ar16.jpg";
import ar17 from "../assets/architecture/ar17.jpg";
import ar18 from "../assets/architecture/ar18.jpg";
import ar19 from "../assets/architecture/ar19.jpg";
import ar20 from "../assets/architecture/ar20.jpg";
import ar21 from "../assets/architecture/ar21.jpg";
import ar22 from "../assets/architecture/ar22.jpg";
import ar23 from "../assets/architecture/ar23.jpg";
import int21 from "../assets/interior/interior21.jpg"
import int22 from "../assets/interior/interior22.jpg";
import int23 from "../assets/interior/interior23.jpg";
import int24 from "../assets/interior/interior24.jpg";
import arr1 from "../assets/arr1.jpg";
import lo from "../assets/lo.jpg";
const allProjects = [
  { id: 1,  title: "Luxury Villa",        img: architecture3, category: "Elevation" },
  { id: 2,  title: "Luxury Interior",     img: project2,      category: "Interior" },
  { id: 3,  title: "Landscape Garden",    img: landscape,     category: "Landscape" },
  { id: 4,  title: "Luxury Bedroom",      img: bedroom,       category: "Bedrooms" },
  { id: 5,  title: "Cozy Bedroom",        img: bedroom1,      category: "Bedrooms" },
  { id: 6,  title: "Lobby",               img: lobby,         category: "Lobby" },
  { id: 7,  title: "Premium Kitchen",     img: interior,      category: "Interior" },
  { id: 8,  title: "Kitchen",             img: interior1,     category: "Interior" },
  { id: 9,  title: "City Lobby",          img: lobby1,        category: "Lobby" },
  { id:10,  title: "Villa",               img: architecture2, category: "Elevation" },
  { id:11,  title: "Modern Villa",        img: architecture4, category: "Elevation" },
  { id:12,  title: "Luxury Interior",     img: interior2,     category: "Interior" },
  { id:13,  title: "Black Theme",         img: bedroom2,      category: "Bedrooms" },
  { id:14,  title: "Garden",              img: landscape1,    category: "Landscape" },
  { id:15,  title: "Villa",               img: architecture1, category: "Elevation" },
  { id:16,  title: "Villa",               img: architecture5, category: "Elevation" },
  { id:17,  title: "Villa",               img: architecture6, category: "Elevation" },
  { id:18,  title: "Lobby Premium",       img: lobby2,        category: "Lobby" },
  { id:19,  title: "Luxury Lobby",        img: lobby3,        category: "Lobby" },
  { id:20,  title: "Modern Villa",        img: architecture7, category: "Elevation" },
  { id:21,  title: "Vill Garden",              img: landscape2,    category: "Landscape" },
  { id:22,  title: "Luxury Lobby",        img: lobby5,        category: "Lobby" },
  { id:23,  title: "Luxury Lobby",        img: lobby6,        category: "Lobby" },
  { id:24,  title: "Luxury Lobby",        img: lobby7,        category: "Lobby" },
  { id: 25,  title: "Cozy Bedroom",        img: bedroom5,      category: "Bedrooms" },
  { id: 26,  title: " Bedroom",        img:bedroom6 ,      category: "Bedrooms" },
  { id: 27,  title: "Luxury Bedroom",        img: bedroom7,      category: "Bedrooms" },
  { id:28,  title: "Modern Villa",        img: ar1, category: "Elevation" },
  { id:29,  title: "Modern Villa",        img: ar2, category: "Elevation" },
  { id:30,  title: "Modern Villa",        img: ar3, category: "Elevation" },
  { id:31,  title: "Modern Villa",        img: ar4, category: "Elevation" },
  { id:32,  title: "Modern Villa",        img: ar5, category: "Elevation" },
  { id:33,  title: "Modern Villa",        img: ar6, category: "Elevation" },
  { id:34,  title: "Modern Villa",        img: ar7, category: "Elevation" },
  { id:36,  title: "Modern Villa",        img: ar8, category: "Elevation" },
  { id:37,  title: "Modern Villa",        img: ar9, category: "Elevation" },
  { id:38,  title: "Modern Villa",        img: ar10, category: "Elevation" },
  { id:39,  title: "Modern Villa",        img: ar11, category: "Elevation" },
  { id:40,  title: "Modern Villa",        img: ar12, category: "Elevation" },
  { id:41,  title: "Modern Villa",        img: ar13, category: "Elevation" },
  { id:42,  title: "Modern Villa",        img: ar14, category: "Elevation" },
  { id:44,  title: "Modern Villa",        img: ar16, category: "Elevation" },
  { id:45,  title: "Modern Villa",        img: ar17, category: "Elevation" },
  { id:46,  title: "Modern Villa",        img: ar18, category: "Elevation" },
  { id:47,  title: "Modern Villa",        img: ar19, category: "Elevation" },
  { id:48,  title: "Modern Villa",        img: ar20, category: "Elevation" },
  { id:49,  title: "Modern Villa",        img: ar21, category: "Elevation" },
  { id:50,  title: "Modern Villa",        img: ar22, category: "Elevation" },
  { id:51,  title: "Modern Villa",        img: ar23, category: "Elevation" },
  { id:52,  title: "Modern Interior",        img: int21, category: "Interior" },
  { id:53,  title: "Interior",               img: int22, category: "Interior" },
  { id:54,  title: "Luxury Interior",        img: int23, category: "Interior" },
  { id:55,  title: "Premium Interior",       img: int24, category: "Interior" },
  { id:56,  title: "Modern Villa",        img: arr1, category: "Elevation" },
  { id: 57,  title: "Lobby",               img: lo,         category: "Lobby" },
];


export default function Projects() {
  const [category, setCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const categories = ["All", "Lobby", "Bedrooms", "Elevation", "Interior", "Landscape"];

  const filteredProjects =
    category === "All" ? allProjects : allProjects.filter((p) => p.category === category);

  const showMore = () => setVisibleCount((prev) => Math.min(prev + 3, filteredProjects.length));
  const showLess = () => setVisibleCount(6);

  return (
    <section id="projects" className="py-20 bg-[#0f0f0f] text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setCategory(cat);
                setVisibleCount(6);
              }}
              className={`px-6 py-2 rounded-full text-lg font-medium transition-all ${
                category === cat
                  ? "bg-[#D4AF37] text-black"
                  : "bg-gray-800 text-gray-300 hover:bg-[#D4AF37] hover:text-black"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid of Projects */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
          {filteredProjects.slice(0, visibleCount).map((p, index) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="relative cursor-pointer group"
              onClick={() => setSelectedIndex(index)} // ✅ yahan index correct
            >
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-72 object-cover rounded-lg shadow-lg group-hover:opacity-80 transition"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg opacity-0 group-hover:opacity-100 transition">
                <p className="text-lg font-semibold text-[#D4AF37]">{p.title}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Show More / Show Less */}
        {visibleCount < filteredProjects.length ? (
          <div className="text-center mt-10">
            <button
              onClick={showMore}
              className="px-6 py-2 rounded-full bg-[#D4AF37] text-black font-semibold hover:bg-[#b38e2f] transition"
            >
              Show More
            </button>
          </div>
        ) : (
          filteredProjects.length > 6 && (
            <div className="text-center mt-10">
              <button
                onClick={showLess}
                className="px-6 py-2 rounded-full bg-gray-800 text-white font-semibold hover:bg-gray-700 transition"
              >
                Show Less
              </button>
            </div>
          )
        )}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative bg-white rounded-xl max-w-3xl w-full p-6 shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedIndex(null)}
                className="absolute z-40 top-3 right-3 text-gray-600 hover:text-gray-900"
              >
                <X size={28} />
              </button>

              {/* Image */}
              <img
                src={filteredProjects[selectedIndex].img}
                alt={filteredProjects[selectedIndex].title}
                className="max-h-[80vh] w-auto mx-auto object-contain rounded-lg mb-4"
              />

              {/* Title */}
              <h2 className="text-2xl font-bold mb-2 text-center text-black">
                {filteredProjects[selectedIndex].title}
              </h2>

              {/* Arrows */}
              <div className="absolute inset-y-0 left-3 flex items-center">
                <button
                  onClick={() =>
                    setSelectedIndex(
                      (selectedIndex - 1 + filteredProjects.length) % filteredProjects.length
                    )
                  }
                  className="p-3 bg-black/80 rounded-full shadow"
                >
                  <ChevronLeft size={24} />
                </button>
              </div>

              <div className="absolute inset-y-0 right-3 flex items-center">
                <button
                  onClick={() =>
                    setSelectedIndex((selectedIndex + 1) % filteredProjects.length)
                  }
                  className="p-3 bg-black/80 rounded-full shadow "
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
