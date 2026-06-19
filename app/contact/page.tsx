export default function Contact() {
  return (
    <main className="min-h-screen bg-gray-100">

      {/* Encabezado */}
      <div className="flex items-center gap-6 bg-gray-800 px-10 py-6 mb-10">
        <img
          src="/logo.png"
          alt="Logo MotoServicio"
          className="w-24 h-24 object-contain rounded-full bg-white p-1"
        />
        <h1 className="text-4xl font-bold text-white">
          Contacto
        </h1>
      </div>

      <div className="px-10">
        <div className="bg-white rounded-2xl shadow-lg p-8 border-t-[15px] border-gray-900">

          <p className="text-black text-lg mb-3">
            📍 Dirección: Carretera internacional a Oaxaca #26 Col. San Miguel
          </p>

          <p className="text-black text-lg mb-3">
            📞 Teléfono: 2434350316
          </p>

          <p className="text-black text-lg mb-3">
            ✉️ Correo: 4739@italikacecit.com
          </p>

          <p className="text-black text-lg">
            🕒 Horario: De lunes a sábado 9:00 a.m. a 8:00 p.m. y domingo
            10:00 a.m. a 4:00 p.m.
          </p>

        </div>
      </div>

    </main>
  );
}