export default function Contact() {
  return (
    <main className="min-h-screen bg-gray-100 p-10">
      <div className="flex items-center gap-6 mb-8">
        <img 
          src="/"
          alt="Logo MotoServicio"
          className="w-40 h-40 object-contain rounded-full bg-white p-1"
        />
        <h1 className="text-5xl font-bold text-blue-700">
          Contacto
        </h1>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-8 border-t-15 border-blue-900">

        <p className="text-black text-lg mb-3">
          📍 Dirección: Carretera internacional  a Oaxaca #26 Col.San miguel 
        </p>

        <p className="text-black text-lg mb-3">
          📞 Teléfono: 
        </p>
        <p className="text-black text-lg mb-3">
          ✉️ Correo: 4739@italikacecit.com
        </p>

        <p className="text-black text-lg">
          🕒 Horario: 
        </p>

      </div>
    </main>
  );
}