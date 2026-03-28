import React from "react";

const StoresShowcase = () => (
  <section className="w-full flex flex-col items-center gap-8 py-10 px-2 md:px-8 bg-[#f8fafc]">
    <div className="w-full max-w-7xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-[#1a2636] mb-6">91+ Experience Stores Across India</h2>
      <div className="flex flex-col md:flex-row gap-8 items-center justify-between bg-white rounded-2xl p-6 sm:p-10 md:p-16 min-h-[600px] shadow-lg">
        {/* Left: Cities List - carousel on mobile, grid on md+ */}
        <div className="flex-1 w-full">
          {/* Mobile: Carousel */}
          <div className="block md:hidden w-full mb-4">
            <h3 className="text-lg font-semibold text-[#1a2636] mb-2 pl-2">Top Cities</h3>
            <div className="flex gap-4 overflow-x-auto scrollbar-thin scrollbar-thumb-[#e0e0e0] scrollbar-track-[#f8fafc] px-2 pb-2 snap-x snap-mandatory">
              {/* Each city card gets snap-center for smooth swiping */}
              {/* First row of cities */}
              <div className="flex flex-col items-center min-w-[140px] snap-center bg-white rounded-xl p-3 shadow border border-[#e0e0e0]">
                <div className="w-16 h-16 rounded-full bg-[#f8fafc] flex items-center justify-center border border-[#e0e0e0] mb-2">
                  <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=80&q=80" alt="Bangalore" className="w-10 h-10 object-cover rounded-full" />
                </div>
                <div className="font-semibold text-[#1a2636] text-sm">Bangalore</div>
                <div className="text-xs text-[#888]">16 Stores</div>
              </div>
              <div className="flex flex-col items-center min-w-[140px] snap-center bg-white rounded-xl p-3 shadow border border-[#e0e0e0]">
                <div className="w-16 h-16 rounded-full bg-[#f8fafc] flex items-center justify-center border border-[#e0e0e0] mb-2">
                  <img src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=80&q=80" alt="Hyderabad" className="w-10 h-10 object-cover rounded-full" />
                </div>
                <div className="font-semibold text-[#1a2636] text-sm">Hyderabad</div>
                <div className="text-xs text-[#888]">10 Stores</div>
              </div>
              <div className="flex flex-col items-center min-w-[140px] snap-center bg-white rounded-xl p-3 shadow border border-[#e0e0e0]">
                <div className="w-16 h-16 rounded-full bg-[#f8fafc] flex items-center justify-center border border-[#e0e0e0] mb-2">
                  <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=80&q=80" alt="Mumbai" className="w-10 h-10 object-cover rounded-full" />
                </div>
                <div className="font-semibold text-[#1a2636] text-sm">Mumbai</div>
                <div className="text-xs text-[#888]">9 Stores</div>
              </div>
              <div className="flex flex-col items-center min-w-[140px] snap-center bg-white rounded-xl p-3 shadow border border-[#e0e0e0]">
                <div className="w-16 h-16 rounded-full bg-[#f8fafc] flex items-center justify-center border border-[#e0e0e0] mb-2">
                  <img src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=80&q=80" alt="Pune" className="w-10 h-10 object-cover rounded-full" />
                </div>
                <div className="font-semibold text-[#1a2636] text-sm">Pune</div>
                <div className="text-xs text-[#888]">8 Stores</div>
              </div>
              <div className="flex flex-col items-center min-w-[140px] snap-center bg-white rounded-xl p-3 shadow border border-[#e0e0e0]">
                <div className="w-16 h-16 rounded-full bg-[#f8fafc] flex items-center justify-center border border-[#e0e0e0] mb-2">
                  <img src="https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=80&q=80" alt="Chennai" className="w-10 h-10 object-cover rounded-full" />
                </div>
                <div className="font-semibold text-[#1a2636] text-sm">Chennai</div>
                <div className="text-xs text-[#888]">5 Stores</div>
              </div>
              {/* Second row of cities */}
              <div className="flex flex-col items-center min-w-[140px] snap-center bg-white rounded-xl p-3 shadow border border-[#e0e0e0]">
                <div className="w-16 h-16 rounded-full bg-[#f8fafc] flex items-center justify-center border border-[#e0e0e0] mb-2">
                  <img src="https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=80&q=80" alt="Delhi" className="w-10 h-10 object-cover rounded-full" />
                </div>
                <div className="font-semibold text-[#1a2636] text-sm">Delhi</div>
                <div className="text-xs text-[#888]">4 Stores</div>
              </div>
              <div className="flex flex-col items-center min-w-[140px] snap-center bg-white rounded-xl p-3 shadow border border-[#e0e0e0]">
                <div className="w-16 h-16 rounded-full bg-[#f8fafc] flex items-center justify-center border border-[#e0e0e0] mb-2">
                  <img src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=80&q=80" alt="Kolkata" className="w-10 h-10 object-cover rounded-full" />
                </div>
                <div className="font-semibold text-[#1a2636] text-sm">Kolkata</div>
                <div className="text-xs text-[#888]">3 Stores</div>
              </div>
              <div className="flex flex-col items-center min-w-[140px] snap-center bg-white rounded-xl p-3 shadow border border-[#e0e0e0]">
                <div className="w-16 h-16 rounded-full bg-[#f8fafc] flex items-center justify-center border border-[#e0e0e0] mb-2">
                  <img src="https://images.unsplash.com/photo-1465101178521-c1a9136a3b43?auto=format&fit=crop&w=80&q=80" alt="Gurgaon" className="w-10 h-10 object-cover rounded-full" />
                </div>
                <div className="font-semibold text-[#1a2636] text-sm">Gurgaon</div>
                <div className="text-xs text-[#888]">3 Stores</div>
              </div>
              <div className="flex flex-col items-center min-w-[140px] snap-center bg-white rounded-xl p-3 shadow border border-[#e0e0e0]">
                <div className="w-16 h-16 rounded-full bg-[#f8fafc] flex items-center justify-center border border-[#e0e0e0] mb-2">
                  <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=80&q=80" alt="Noida" className="w-10 h-10 object-cover rounded-full" />
                </div>
                <div className="font-semibold text-[#1a2636] text-sm">Noida</div>
                <div className="text-xs text-[#888]">3 Stores</div>
              </div>
              <div className="flex flex-col items-center min-w-[140px] snap-center bg-white rounded-xl p-3 shadow border border-[#e0e0e0]">
                <div className="w-16 h-16 rounded-full bg-[#f8fafc] flex items-center justify-center border border-[#e0e0e0] mb-2">
                  <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=80&q=80" alt="Jaipur" className="w-10 h-10 object-cover rounded-full" />
                </div>
                <div className="font-semibold text-[#1a2636] text-sm">Jaipur</div>
                <div className="text-xs text-[#888]">2 Stores</div>
              </div>
            </div>
          </div>
          {/* Desktop: Grid */}
          <div className="hidden md:grid grid-cols-5 gap-4 min-w-[320px] md:min-w-0">
          {/* First row of cities */}
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-full bg-[#f8fafc] flex items-center justify-center border border-[#e0e0e0] mb-2">
              <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=80&q=80" alt="Bangalore" className="w-12 h-12 object-cover rounded-full" />
            </div>
            <div className="font-semibold text-[#1a2636] text-sm">Bangalore</div>
            <div className="text-xs text-[#888]">16 Stores</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-full bg-[#f8fafc] flex items-center justify-center border border-[#e0e0e0] mb-2">
              <img src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=80&q=80" alt="Hyderabad" className="w-12 h-12 object-cover rounded-full" />
            </div>
            <div className="font-semibold text-[#1a2636] text-sm">Hyderabad</div>
            <div className="text-xs text-[#888]">10 Stores</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-full bg-[#f8fafc] flex items-center justify-center border border-[#e0e0e0] mb-2">
              <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=80&q=80" alt="Mumbai" className="w-12 h-12 object-cover rounded-full" />
            </div>
            <div className="font-semibold text-[#1a2636] text-sm">Mumbai</div>
            <div className="text-xs text-[#888]">9 Stores</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-full bg-[#f8fafc] flex items-center justify-center border border-[#e0e0e0] mb-2">
              <img src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=80&q=80" alt="Pune" className="w-12 h-12 object-cover rounded-full" />
            </div>
            <div className="font-semibold text-[#1a2636] text-sm">Pune</div>
            <div className="text-xs text-[#888]">8 Stores</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-full bg-[#f8fafc] flex items-center justify-center border border-[#e0e0e0] mb-2">
              <img src="https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=80&q=80" alt="Chennai" className="w-12 h-12 object-cover rounded-full" />
            </div>
            <div className="font-semibold text-[#1a2636] text-sm">Chennai</div>
            <div className="text-xs text-[#888]">5 Stores</div>
          </div>
          {/* Second row of cities */}
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-full bg-[#f8fafc] flex items-center justify-center border border-[#e0e0e0] mb-2">
              <img src="https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=80&q=80" alt="Delhi" className="w-12 h-12 object-cover rounded-full" />
            </div>
            <div className="font-semibold text-[#1a2636] text-sm">Delhi</div>
            <div className="text-xs text-[#888]">4 Stores</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-full bg-[#f8fafc] flex items-center justify-center border border-[#e0e0e0] mb-2">
              <img src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=80&q=80" alt="Kolkata" className="w-12 h-12 object-cover rounded-full" />
            </div>
            <div className="font-semibold text-[#1a2636] text-sm">Kolkata</div>
            <div className="text-xs text-[#888]">3 Stores</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-full bg-[#f8fafc] flex items-center justify-center border border-[#e0e0e0] mb-2">
              <img src="https://images.unsplash.com/photo-1465101178521-c1a9136a3b43?auto=format&fit=crop&w=80&q=80" alt="Gurgaon" className="w-12 h-12 object-cover rounded-full" />
            </div>
            <div className="font-semibold text-[#1a2636] text-sm">Gurgaon</div>
            <div className="text-xs text-[#888]">3 Stores</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-full bg-[#f8fafc] flex items-center justify-center border border-[#e0e0e0] mb-2">
              <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=80&q=80" alt="Noida" className="w-12 h-12 object-cover rounded-full" />
            </div>
            <div className="font-semibold text-[#1a2636] text-sm">Noida</div>
            <div className="text-xs text-[#888]">3 Stores</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-full bg-[#f8fafc] flex items-center justify-center border border-[#e0e0e0] mb-2">
              <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=80&q=80" alt="Jaipur" className="w-12 h-12 object-cover rounded-full" />
            </div>
            <div className="font-semibold text-[#1a2636] text-sm">Jaipur</div>
            <div className="text-xs text-[#888]">2 Stores</div>
          </div>
          </div>
        </div>
        {/* Right: Store Video */}
        <div className="flex-1 flex items-center justify-center min-w-[320px]">
          <video className="rounded-2xl shadow-lg w-full h-[520px] object-cover" autoPlay loop muted playsInline poster="/Images/store-poster.jpeg">
            <source src="/video/v3.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      {/* Buttons */}
      <div className="flex gap-4 mt-6 justify-center">
        <button className="flex items-center gap-2 border border-[#ff6600] text-[#ff6600] px-6 py-2 rounded-full font-semibold bg-white hover:bg-[#fff3e6] transition">
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#ff6600" strokeWidth="2"/><path d="M8 12h8M12 8v8" stroke="#ff6600" strokeWidth="2"/></svg>
          Live Video Call
        </button>
        <button className="flex items-center gap-2 border border-[#ff6600] text-[#ff6600] px-6 py-2 rounded-full font-semibold bg-white hover:bg-[#fff3e6] transition">
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><rect x="4" y="11" width="16" height="2" rx="1" fill="#ff6600"/></svg>
          Book an Appointment
        </button>
      </div>
    </div>
  </section>
);

export default StoresShowcase;
