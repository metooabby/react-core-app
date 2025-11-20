import bsimage1 from "../assets/bsimage1.png";
import bsimage2 from "../assets/bsimage2.png";
import bsimage3 from "../assets/bsimage3.png";

function BestSelling() {
  return (
    <section className="px-24 py-20">
      <div className="flex gap-16">
        {/* LEFT SIDE TEXT */}
        <div className="w-1/3">
          <h2 className="text-[36px] font-bold leading-tight">
            Best Selling <br /> Plants
          </h2>

          <p className="text-[#1E1E1E]/75 text-[16px] mt-3 leading-relaxed">
            Easiest way to healthy life by buying your favorite plants
          </p>

          <button className="mt-6 bg-[#C1DCDC] px-6 py-3 rounded-xl text-[16px] font-medium flex items-center gap-2">
            See more
            <i className="fa-solid fa-arrow-right text-[14px]"></i>
          </button>
        </div>

        {/* RIGHT SIDE PRODUCT CARDS */}
        <div className="w-2/3 grid grid-cols-3 gap-10">
          {/* CARD 1 */}
          <div>
            <div className="h-[300px] rounded-2xl overflow-hidden bg-white">
              <img
                src={bsimage1}
                alt="Plant"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="mt-4 text-[18px] font-semibold">Natural Plants</p>
            <p className="text-[#1E1E1E]/75 text-[15px]">1,400.00</p>
          </div>

          {/* CARD 2 */}
          <div>
            <div className="h-[300px] rounded-2xl overflow-hidden bg-white">
              <img
                src={bsimage2}
                alt="Plant"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="mt-4 text-[18px] font-semibold">Artificial Plants</p>
            <p className="text-[#1E1E1E]/75 text-[15px]">900.00</p>
          </div>

          {/* CARD 3 */}
          <div>
            <div className="h-[300px] rounded-2xl overflow-hidden bg-white">
              <img
                src={bsimage3}
                alt="Plant"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="mt-4 text-[18px] font-semibold">Artificial Plants</p>
            <p className="text-[#1E1E1E]/75 text-[15px]"> 3,500.00</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BestSelling;
