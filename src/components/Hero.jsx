import banner from "../assets/banner.png";

function Hero() {
  return (
    <section className="relative ml-[60px]">
      <img
        src={banner}
        alt="Hero Banner"
        className="w-[1248px] h-[512px] rounded-[24px] object-cover"
      />
    </section>
  );
}

export default Hero;
