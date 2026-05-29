export default function Services() {
  return (
    <main className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-5xl font-bold text-blue-700 mb-8">
        Nuestros Servicios
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-white rounded-2xl shadow-lg p-6 border-t-8 border-blue-700 hover:shadow-2xl transition">
          <h2 className="text-black text-2xl font-bold">
            Afinación
          </h2>

          <p className="text-gray-600 mt-2">
            Aqui va algo
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 border-t-8 border-blue-800 hover:shadow-2xl transition">
          <h2 className="text-black text-2xl font-bold">
            Reparación General
          </h2>

          <p className="text-gray-600 mt-2">
            Aqui va algo
          </p>
        </div>

      </div>
    </main>
  );
}
