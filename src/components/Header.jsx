import logo from "../assets/GREENMIND.png";

function Header() {
  return (
    <header className="w-full h-[135px] bg-white px-24 grid grid-cols-3 items-center">
      <div>
        <img src={logo} alt="logo" className="h-39" />
      </div>

      <nav className="flex justify-center gap-12 text-[18px] font-medium font-[Poppins] text-[#1E1E1E]">
        <a>Home</a>
        <a>Products</a>
        <a>Contacts</a>
      </nav>

      <div className="flex justify-end items-center gap-8 text-2xl text-[#1E1E1E]">
        <i className="fa-solid fa-cart-shopping"></i>
        <i className="fa-regular fa-user"></i>
        <i className="fa-solid fa-bars"></i>
      </div>
    </header>
  );
}

export default Header;
