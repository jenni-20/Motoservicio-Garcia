export default function Services() {
  return (
    <main className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-5xl font-bold text-blue-700 mb-8">
        Nuestros Servicios
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <h2 className="text-black text-2xl font-bold">
            Cambio de Aceite
          </h2>

          <p className="text-gray-600 mt-2">
            Servicio profesional para mantener tu moto en óptimas condiciones.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <h2 className="text-black text-2xl font-bold">
            Afinación
          </h2>

          <p className="text-gray-600 mt-2">
            Ajuste completo del rendimiento de la motocicleta.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <h2 className="text-black text-2xl font-bold">
            Reparación General
          </h2>

          <p className="text-gray-600 mt-2">
            Diagnóstico y reparación especializada.
          </p>
        </div>

      </div>
    </main>
  );
}
