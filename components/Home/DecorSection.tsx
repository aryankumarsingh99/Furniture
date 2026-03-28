
const decorItems = [
  {
    title: "Floor Lamps",
    img: "/Images/1.jpeg",
  },
  {
    title: "Hanging Lights",
    img: "/Images/2.jpeg",
  },
  {
    title: "Kitchen Organiser",
    img: "/Images/3.jpeg",
  },
  {
    title: "Serving Trays",
    img: "/Images/4.jpeg",
  },
  {
    title: "Chandeliers",
    img: "/Images/5.jpeg",
  },
  {
    title: "Kitchen Racks",
    img: "/Images/6.jpeg",
  },
  {
    title: "Chopping Board",
    img: "/Images/7.jpeg",
  },
  {
    title: "Artificial Plants",
    img: "/Images/8.jpeg",
  },
];

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
          <hr className="border-[#e0bfae] w-24 mb-4" />
          <div className="text-2xl font-bold text-[#b85c38] tracking-wide mb-2">UPTO 60% OFF</div>
        </div>
        {/* Right: Decor cards - horizontal scroll on small devices, grid on md+ */}
        <div className="flex-[2] w-full">
          {/* Mobile: horizontal scroll */}
          <div className="flex gap-6 overflow-x-auto pb-4 md:hidden">
            {decorItems.map((item, idx) => (
              <div key={item.title} className="bg-white rounded-2xl shadow-xl overflow-hidden flex-shrink-0 flex flex-col items-center p-4 transition-transform hover:scale-110 min-w-[220px] min-h-[260px] w-[220px]">
                <img src={item.img} alt={item.title} className="w-full h-44 object-cover rounded-t-2xl" />
                <div className="py-4 text-center font-bold text-[#2d1c10] text-lg">{item.title}</div>
              </div>
            ))}
          </div>
          {/* Desktop/tablet: grid */}
          <div className="hidden md:grid grid-cols-2 sm:grid-cols-4 gap-10 w-full">
            {decorItems.map((item, idx) => (
              <div key={item.title} className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col items-center p-4 transition-transform hover:scale-110 min-w-[240px] min-h-[260px] w-full max-w-[270px]">
                <img src={item.img} alt={item.title} className="w-full h-48 object-cover rounded-t-2xl" />
                <div className="py-5 text-center font-bold text-[#2d1c10] text-xl sm:text-2xl">{item.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
