
const decorItems = [
  {
    title: "Modern Sofa",
    img: "/Images/5.jpeg",
  },
  {
    title: "Sectional Sofa",
    img: "/Images/2.jpeg",
  },
  {
    title: "Sleeper Sofa",
    img: "/Images/3.jpeg",
  },
  {
    title: "Recliner Sofa",
    img: "/Images/4.jpeg",
  },
  {
    title: "Modern Bed",
    img: "/Images/i1.jpeg",
  },
  {
    title: "Wooden Bed",
    img: "/Images/i2.jpeg",
  },
  {
    title: "Modern Dinning table ",
    img: "/Images/7.jpeg",
  },
  {
    title: "Artificial Bed",
    img: "/Images/8.jpeg",
  },
];

import { motion } from "framer-motion";

export default function DecorSection() {
  return (
    <section className="relative bg-[#fdf3f2] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row gap-10 items-start">
        {/* Left: Heading and offer */}
        <div className="flex-1 min-w-[320px] max-w-md md:max-w-lg mb-10 md:mb-0">
          <h2 className="text-5xl sm:text-6xl font-extrabold text-[#2d1c10] mb-6 leading-tight">
            Big Discounts<br />That Transform<br />Your Space
          </h2>
          <p className="text-[#6d4c2c] text-2xl mb-6 font-medium">Find the perfect decor for every corner</p>
          </div>
        {/* Right: Decor cards - horizontal scroll on small devices, grid on md+ */}
        <div className="flex-[2] w-full">
          {/* Mobile: horizontal scroll */}
          <div className="flex gap-6 overflow-x-auto pb-4 md:hidden">
            {decorItems.map((item, idx) => (
              <motion.div
                key={item.title}
                className="bg-white rounded-2xl shadow-xl overflow-hidden flex-shrink-0 flex flex-col items-center p-4 transition-transform hover:scale-110 min-w-[220px] min-h-[260px] w-[220px]"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6, delay: idx * 0.08, ease: "backOut" }}
              >
                <img src={item.img} alt={item.title} className="w-full h-44 object-cover rounded-t-2xl" />
                <div className="py-4 text-center font-bold text-[#2d1c10] text-lg">{item.title}</div>
              </motion.div>
            ))}
          </div>
          {/* Desktop/tablet: grid */}
          <div className="hidden md:grid grid-cols-2 sm:grid-cols-4 gap-10 w-full">
            {decorItems.map((item, idx) => (
              <motion.div
                key={item.title}
                className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col items-center p-4 transition-transform hover:scale-110 min-w-[240px] min-h-[260px] w-full max-w-[270px]"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6, delay: idx * 0.08, ease: "backOut" }}
              >
                <img src={item.img} alt={item.title} className="w-full h-48 object-cover rounded-t-2xl" />
                <div className="py-5 text-center font-bold text-[#2d1c10] text-xl sm:text-2xl">{item.title}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
