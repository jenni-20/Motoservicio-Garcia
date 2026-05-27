import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      
      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-5 bg-blue-700 shadow-lg">
        <h1 className="text-3xl font-bold text-white">
          MotoServicio Garcia
        </h1>

        <ul className="flex gap-8 text-lg text-white">

          <Link href="/services">
            <li className="cursor-pointer hover:text-gray-300">
              Servicios
            </li>
          </Link>

          <Link href="/store">
            <li className="cursor-pointer hover:text-gray-300">
              Tienda
            </li>
          </Link>

          <Link href="/contact">
            <li className="cursor-pointer hover:text-gray-300">
              Contacto
            </li>
          </Link>

        </ul>
      </nav>

      {/* Main Section */}
      <section className="flex flex-col items-center justify-center text-center h-[80vh] px-6">

        <h2 className="text-black text-7xl font-bold mb-4">
          Bienvenido a MotoServicio Garcia
        </h2>

        <p className="text-black text-xl max-w-2xl mb-8">
          Centro de servicio autorizado
        </p>

      </section>

      {/* Offers */}
      <section className="px-10 pb-16">
        <h3 className="text-black text-3xl font-bold text-center mb-8">
          Ofertas Especiales
        </h3>

        <div className="grid md:grid-cols-3 gap-6">

          {/* Oferta 1 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border-t-4 border-blue-700 hover:shadow-2xl transition">

            <h4 className="text-2xl font-bold text-blue-700 mb-3">
              Cambio de Aceite
            </h4>

            <p className="text-gray-600">
              Consultar las promociones
            </p>

          </div>

          {/* Oferta 2 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border-t-4 border-blue-700 hover:shadow-2xl transition">

            <h4 className="text-2xl font-bold text-blue-700 mb-3">
              Afinación de Motocicleta
            </h4>

            <p className="text-gray-600">
              Servicio sujeto al modelo de motocicleta y revisión.
            </p>

          </div>

          {/* Oferta 3 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border-t-4 border-blue-700 hover:shadow-2xl transition">

            <h4 className="text-2xl font-bold text-blue-700 mb-3">
              Reparación General
            </h4>

            <p className="text-gray-600">
              Pregunta por descuentos y paquetes disponibles.
            </p>

          </div>

        </div>
      </section>

    </main>
  );
}