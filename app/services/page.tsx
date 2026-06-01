import { Klee_One } from "next/font/google";

export default function Services() {
  return (
    <main className="min-h-screen bg-blue-100 p-10">
              
      <div className="flex items-center gap-6 mb-8">
        <img 
          src="/"
          alt="Logo MotoServicio"
          className="w-40 h-40 object-contain rounded-full bg-white p-1"
        />
        <h1 className="text-5xl font-bold text-blue-700">
          Nuestros Servicios
        </h1>
      </div>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-white rounded-2xl shadow-lg p-6 border-t-8 border-blue-700 hover:shadow-2xl transition">
          <h2 className="text-black text-2xl font-bold">
            Cambio de aceite de motor 
          </h2>

          <p className="text-gray-600 mt-2">
            Reemplazamos el aceite usado por aceite fresco de calidad para mantener tu motor lubricado y en óptimas condiciones de funcionamiento.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 border-t-8 border-blue-700 hover:shadow-2xl transition">
          <h2 className="text-black text-2xl font-bold">
            Revision y limpieza del cedazo de aceite
          </h2>

          <p className="text-gray-600 mt-2">
            Inspeccionar y limpiar el cedazo para remover partículas de suciedad y asegurar un flujo de aceite limpio en el motor.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 border-t-8 border-blue-700 hover:shadow-2xl transition">
          <h2 className="text-black text-2xl font-bold">
            Carburarcion (regulacion de RPM)
          </h2>

          <p className="text-gray-600 mt-2">
            Regulamos el carburador para optimizar la mezcla aire-combustible, mejorando el rendimiento y estabilidad del motor.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 border-t-8 border-blue-700 hover:shadow-2xl transition">
          <h2 className="text-black text-2xl font-bold">
            Ajuste y lubricacion de cadena 
          </h2>

          <p className="text-gray-600 mt-2">
            Ajustamos la tensión de la cadena y la lubricamos para garantizar transmisión segura y evitar desgaste prematuro.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 border-t-8 border-blue-700 hover:shadow-2xl transition">
          <h2 className="text-black text-2xl font-bold">
            Ajuste de frenos
          </h2>

          <p className="text-gray-600 mt-2">
            Revisamos y ajustamos el sistema de frenos para asegurar un frenado seguro y efectivo en cualquier situación.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 border-t-8 border-blue-800 hover:shadow-2xl transition">
          <h2 className="text-black text-2xl font-bold">
            Ajuste y lubricacion de chicotes 
          </h2>

          <p className="text-gray-600 mt-2">
            Ajustamos y lubricamos los cables de acelerador y embrague para un funcionamiento suave y preciso.
          </p>
        </div>
    
        <div className="bg-white rounded-2xl shadow-lg p-6 border-t-8 border-blue-800 hover:shadow-2xl transition">
          <h2 className="text-black text-2xl font-bold">
            Revision de puntos de seguridad
          </h2>

          <p className="text-gray-600 mt-2">
             Inspeccionamos componentes críticos como llantas, luces y direccionales para tu seguridad en la vía.
          </p>
        </div>
        
      </div>
      <h1 className="text-gray-600 text-lg mt-10 text-center">
        *En los casos que aplique
      </h1>
    </main>
    
  );
}


