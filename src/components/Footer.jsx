function Footer() {
  return (
    <footer className="px-10 py-14 bg-[#C9E3E1]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Column 1 */}
        <div>
          <h2 className="text-2xl font-bold mb-3">GREEMIND</h2>
          <p className="text-gray-700 text-[15px]">
            Help you find your dream plant.
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="font-semibold mb-3">Information</h3>
          <ul className="space-y-2 text-gray-700 text-[15px]">
            <li>About</li>
            <li>Products</li>
            <li>Blog</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-gray-700 text-[15px]">
            <li>Community</li>
            <li>Careers</li>
            <li>Our story</li>
          </ul>
        </div>
      </div>

      <p className="text-center text-gray-600 text-[14px] mt-10">
        © 2023 All Rights Reserved | Terms of Use | GREEMIND
      </p>
    </footer>
  );
}

export default Footer;
