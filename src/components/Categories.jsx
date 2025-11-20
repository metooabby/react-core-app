import ctimage1 from "../assets/ctimage1.png";
import ctimage2 from "../assets/ctimage2.png";
import ctimage3 from "../assets/ctimage3.png";

function Categories() {
  return (
    <section className="px-24 py-20 text-center">
      {/* TITLE */}

      <h2 className="text-[32px] font-bold mb-1">Categories</h2>

      <p className="text-center text-[#1E1E1E]/60 mb-12">
        Find what you are looking for
      </p>

      {/* MINT BACKGROUND */}
      <div className="w-full h-[841px] bg-[#C1DCDC] rounded-[24px] relative">
        {/* IMAGE ROW (OVERLAPPING MINT BG) */}
        <div className="absolute left-1/2 -translate-x-1/2 -top-[60px] flex gap-20">
          {/* LEFT IMAGE */}
          <div className="flex flex-col items-center">
            <img
              src={ctimage1}
              alt=""
              className="w-[260px] h-[360px] rounded-[24px] object-cover"
            />
            <p className="text-[16px] font-semibold mt-3">Natural Plants</p>
          </div>

          {/* CENTER IMAGE (slightly lower) */}
          <div className="flex flex-col items-center mt-6">
            <img
              src={ctimage2}
              alt=""
              className="w-[260px] h-[360px] rounded-[24px] object-cover"
            />
            <p className="text-[16px] font-semibold mt-3">Plant Accessories</p>

            <button className="mt-3 bg-white px-5 py-2 rounded-xl text-[14px] font-medium flex items-center gap-2">
              Explore
              <i className="fa-solid fa-arrow-right text-[12px]"></i>
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex flex-col items-center">
            <img
              src={ctimage3}
              alt=""
              className="w-[260px] h-[360px] rounded-[24px] object-cover"
            />
            <p className="text-[16px] font-semibold mt-3">Artificial Plants</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Categories;
