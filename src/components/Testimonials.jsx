function Testimonials() {
  return (
    <section className="px-10 py-20">
      <h2 className="text-3xl font-bold mb-10 text-center">
        What customers say about GREEMIND?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Card 1 */}
        <div className="p-6 bg-white rounded-xl shadow-md">
          <p className="text-gray-600 mb-4 text-[15px] leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat a
            deserunt sit omnis corrupti!
          </p>
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 bg-gray-300 rounded-full"></div>
            <div>
              <h4 className="font-semibold">John Doe</h4>
              <p className="text-gray-500 text-sm">⭐ 4.5</p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="p-6 bg-white rounded-xl shadow-md">
          <p className="text-gray-600 mb-4 text-[15px] leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat a
            deserunt sit omnis corrupti!
          </p>
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 bg-gray-300 rounded-full"></div>
            <div>
              <h4 className="font-semibold">John Doe</h4>
              <p className="text-gray-500 text-sm">⭐ 4.5</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
