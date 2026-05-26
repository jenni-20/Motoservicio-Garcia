export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-5 bg-red-700 shadow-lg">
        <h1 className="text-3xl font-bold">
          MotoServicio Garcia
        </h1>

        <ul className="flex gap-8 text-lg">
          <li className="cursor-pointer hover:text-gray-300">
            Home
          </li>

          <li className="cursor-pointer hover:text-gray-300">
            Services
          </li>

          <li className="cursor-pointer hover:text-gray-300">
            Offers
          </li>

          <li className="cursor-pointer hover:text-gray-300">
            Contact
          </li>
        </ul>
      </nav>

      {/* Main Section */}
      <section className="flex flex-col items-center justify-center text-center h-[80vh] px-6">

        <h2 className="text-6xl font-bold mb-5">
          The Best Motorcycle Service
        </h2>

        <p className="text-gray-300 text-xl max-w-2xl mb-8">
          Repair, maintenance and exclusive offers for your motorcycle.
        </p>

        <div className="flex gap-5">
          <button className="bg-red-700 px-8 py-3 rounded-xl hover:bg-red-800">
            View Offers
          </button>

          <button className="border border-white px-8 py-3 rounded-xl hover:bg-white hover:text-black transition">
            Contact
          </button>
        </div>

      </section>

      {/* Offers */}
      <section className="px-10 pb-16">
        <h3 className="text-4xl font-bold text-center mb-8">
          Special Offers
        </h3>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-gray-900 p-6 rounded-2xl">
            <h4 className="text-2xl font-bold">
              Oil Change
            </h4>

            <p className="text-gray-400 mt-2">
              Complete motorcycle inspection included.
            </p>

            <p className="text-red-500 text-3xl font-bold mt-4">
              $299
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-2xl">
            <h4 className="text-2xl font-bold">
              Full Service
            </h4>

            <p className="text-gray-400 mt-2">
              Complete maintenance for your motorcycle.
            </p>

            <p className="text-red-500 text-3xl font-bold mt-4">
              $499
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-2xl">
            <h4 className="text-2xl font-bold">
              Brake Repair
            </h4>

            <p className="text-gray-400 mt-2">
              Discount available this week.
            </p>

            <p className="text-red-500 text-3xl font-bold mt-4">
              $199
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}