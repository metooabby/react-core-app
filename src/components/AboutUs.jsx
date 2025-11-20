import auimage1 from "../assets/auimage1.png";
import auimage2 from "../assets/auimage2.png";
import auimage3 from "../assets/auimage3.png";

function AboutUs() {
  return (
    <section className="px-24 py-20 text-center">
      <h2 className="text-[36px] font-bold mb-4">About us</h2>
      <p className="text-[#1E1E1E]/75 mb-16">
        Order now and appreciate the beauty of nature
      </p>

      <div className="grid grid-cols-3 gap-16">
        {/* CARD */}
        <div>
          <img src={auimage1} className="w-[96px] h-[96px] mx-auto mb-6" />
          <h3 className="text-[20px] font-semibold mb-3">Large Assortment</h3>
          <p className="text-[#1E1E1E]/75 text-[15px] leading-relaxed">
            We offer many different types of products with fewer variations.
          </p>
        </div>

        {/* CARD */}
        <div>
          <img src={auimage2} className="w-[96px] h-[96px] mx-auto mb-6" />
          <h3 className="text-[20px] font-semibold mb-3">
            Fast & Free Shipping
          </h3>
          <p className="text-[#1E1E1E]/75 text-[15px] leading-relaxed">
            4-day or less delivery time, free shipping and quick delivery.
          </p>
        </div>

        {/* CARD */}
        <div>
          <img src={auimage3} className="w-[96px] h-[96px] mx-auto mb-6" />
          <h3 className="text-[20px] font-semibold mb-3">24/7 Support</h3>
          <p className="text-[#1E1E1E]/75 text-[15px] leading-relaxed">
            Answers to any business-related inquiry anytime & real-time.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
