import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-5 bg-blue-700 shadow-lg">

        {/* Logo + Nombre */}
        <div className="flex items-center gap-3">

          <img 
            src="/"
            alt="Logo MotoServicio"
            className="w-40 h-40 object-contain rounded-full bg-white p-1"
          />

          <h1 className="text-3xl font-bold text-white">
            MotoServicio Garcia
          </h1>

        </div>

        {/* Menu de los servicios  */}
        <ul className="flex gap-8 text-lg text-white">

          <Link href="/services">
            <li className="cursor-pointer hover:text-gray-300 transition">
              Servicios 
            </li>
          </Link>

          <Link href="/store">
            <li className="cursor-pointer hover:text-gray-300 transition">
              sss
            </li>
          </Link>

          <Link href="/contact">
            <li className="cursor-pointer hover:text-gray-300 transition">
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

        <p className="text-black text-xl max-w-2xl mb-9">
          Centro de servicio autorizado 
        </p>

      </section>

      {/* Ofertas */}
      <section className="px-10 -mt-10 pb-16">
        <h3 className="text-black text-3xl font-bold text-center mb-8">
          Ofertas Especiales
        </h3>

        <div className="flex justify-center mb-8">
          <img
            src="/ofertas.jpg"
            alt="Ofertas MotoServicio"
            className="w-full max-w-4xl rounded-3xl shadow-xl"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white rounded-2xl shadow-lg p-6 border-t-8 border-blue-700 hover:shadow-2xl transition">
            <h4 className="text-2xl font-bold text-blue-700 mb-3">
              Cambio de Aceite
            </h4>

            <p className="text-gray-600">
              Consultar las promociones
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 border-t-8 border-blue-800 hover:shadow-2xl transition">
            <h4 className="text-2xl font-bold text-blue-800 mb-3">
              Afinación de Motocicleta
            </h4>

            <p className="text-gray-600">
              Servicio sujeto al modelo de motocicleta y revisión.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 border-t-8 border-blue-800 hover:shadow-2xl transition">
            <h4 className="text-2xl font-bold text-blue-800 mb-3">
              Reparación General
            </h4>

            <p className="text-gray-600">
              Descuentos y paquetes disponibles.
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}