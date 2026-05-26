export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-5 bg-blue-700 shadow-lg">
        <h1 className="text-3xl font-bold">
          MotoServicio Garcia
        </h1>

        <ul className="flex gap-8 text-lg">
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
          
        </h2>

        <p className="text-gray-300 text-xl max-w-2xl mb-8">
          
        </p>
      </section>

      {/* Offers */}
      <section className="px-10 pb-16">
        <h3 className="text-4xl font-bold text-center mb-8">
          
        </h3>

        <div className="grid md:grid-cols-3 gap-6">
   </div>
      </section>

    </main>
  );
}