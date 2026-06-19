import { Klee_One } from "next/font/google";

export default function Store() {
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
          Refacciones
        </h1>
      </div>

      {/* Productos con imagen */}
      <div className="grid md:grid-cols-3 gap-6 px-10">
        {/* Producto Liqui Moly */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border-t-[15px] border-gray-900 hover:shadow-2xl transition">
          <img
            src="/ACEITE.webp" // ✅ Usa la imagen que tienes en public
            alt="Aceite Liqui Moly 4T 10W-40 Street"
            className="w-full h-48 object-contain mb-4"
          />
          <h2 className="text-black text-2xl font-bold mb-2">
            Aceite Liqui Moly 4T 10W-40 Street
          </h2>
          <p className="text-gray-600">
            Lubricante sintético premium para motores de motocicleta de 4 tiempos.
            Alta protección contra desgaste, estabilidad térmica y excelente limpieza interna.
          </p>
          <p className="text-gray-800 font-semibold mt-3">💲 $280 MXN</p>
        </div>

        {/* Producto Kit de frenos */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border-t-[15px] border-gray-900 hover:shadow-2xl transition">
          <img
            src="/kit-frenos.png"
            alt="Kit de frenos"
            className="w-full h-40 object-contain mb-4"
          />
          <h2 className="text-black text-2xl font-bold mb-2">
            Kit de frenos
          </h2>
          <p className="text-gray-600">
            Pastillas y discos de freno para mayor seguridad.
          </p>
          <p className="text-gray-800 font-semibold mt-3">💲 $1,200 MXN</p>
        </div>

        {/* Producto Cadena reforzada */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border-t-[15px] border-gray-900 hover:shadow-2xl transition">
          <img
            src="/cadena.png"
            alt="Cadena reforzada"
            className="w-full h-40 object-contain mb-4"
          />
          <h2 className="text-black text-2xl font-bold mb-2">
            Cadena reforzada
          </h2>
          <p className="text-gray-600">
            Cadena de transmisión resistente para uso prolongado.
          </p>
          <p className="text-gray-800 font-semibold mt-3">💲 $850 MXN</p>
        </div>
      </div>

      <h1 className="text-gray-600 text-lg mt-10 text-center">
        *Precios sujetos a cambios
      </h1>

    </main>
  );
}
