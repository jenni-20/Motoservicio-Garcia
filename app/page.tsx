import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-5 bg-gray-800 shadow-lg">

        {/* Logo + Nombre */}
        <div className="flex items-center gap-4">

          <img
            src="/logo.png"
            alt="Logo MotoServicio"
            className="w-30 h-30 object-contain rounded-full bg-white p-1"
          />

          <h1 className="text-3xl font-bold text-white">
            MotoServicio Garcia
          </h1>

        </div>

        {/* Menu */}
        <ul className="flex gap-8 text-lg text-white">

          <Link href="/services">
            <li className="cursor-pointer hover:text-gray-300 transition">
              Servicios
            </li>
          </Link>

          <Link href="/store">
            <li className="cursor-pointer hover:text-gray-300 transition">
              Refacciones
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
      <section className="flex flex-col items-center justify-center text-center h-[50vh] px-6">

        <h2 className="text-black text-7xl font-bold mb-4">
          Bienvenido a MotoServicio Garcia
        </h2>

        <p className="text-black text-xl max-w-2xl mb-9">
          Centro de servicio autorizado
        </p>

      </section>

      {/* Ofertas */}
      <section className="px-10 pb-16">

        <h3 className="text-black text-3xl font-bold text-center mb-8">
          Ofertas Especiales
        </h3>

        {/* Imagen de ofertas */}
        <div className="flex justify-center mb-10">
          <img
            src="/ofertas.jpg"
            alt="Ofertas MotoServicio"
            className="w-full max-w-4xl rounded-3xl shadow-xl"
          />
        </div>

        {/* Tarjetas */}
        <div className="grid md:grid-cols-3 gap-6">

          {/* Oferta 1 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border-t-8 border-gray-700 hover:shadow-2xl transition">

            <h4 className="text-2xl font-bold text-black mb-3">
              Cambio de Aceite
            </h4>

            <p className="text-gray-600">
              Consultar las promociones
            </p>

          </div>

          {/* Oferta 2 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border-t-8 border-gray-800 hover:shadow-2xl transition">

            <h4 className="text-2xl font-bold text-gray-800 mb-3">
              Afinación de Motocicleta
            </h4>

            <p className="text-gray-600">
              Servicio sujeto al modelo de motocicleta y revisión.
            </p>

          </div>

          {/* Oferta 3 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border-t-8 border-gray-800 hover:shadow-2xl transition">

            <h4 className="text-2xl font-bold text-gray-800 mb-3">
              Reparación General
            </h4>

            <p className="text-gray-600">
              Descuentos y paquetes disponibles.
            </p>

          </div>

        </div>

      </section>

      {/* Ubicación */}
      <section className="px-10 py-16 bg-white">

        <h3 className="text-black text-3xl font-bold text-center mb-8">
          📍 Nuestra Ubicación
        </h3>

        <div className="text-center mb-6">
          <p className="text-gray-700 text-lg font-medium">
            📍 Dirección: Carretera Internacional a Oaxaca #26,
            Col. San Miguel
          </p>
        </div>

        <div className="flex justify-center">
          <iframe
            src="https://maps.google.com/maps?q=18.5895662,-98.4564689&z=17&output=embed"
            width="100%"
            height="450"
            className="rounded-3xl shadow-xl max-w-5xl border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

      </section>

    </main>
  );
}






{/*ACUERDATE DE SUBIR LOS CAMBIOS Y TAMBIEN DE HACER LO DE LA PARTE DE ARRIBA DE LA PAGINA*/}