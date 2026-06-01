export default function Store() {
  return (
    <main className="min-h-screen bg-gray-100 p-10">
      <div className="flex items-center gap-6 mb-8">
        <img 
          src="/"
          alt="Logo MotoServicio"
          className="w-40 h-40 object-contain rounded-full bg-white p-1"
        />
        <h1 className="text-5xl font-bold text-blue-700">
          Tienda
        </h1>
      </div>

      <p className="text-xl text-gray-700">
        Aquí se va aponer todo sobre la tienda o lo que se venda como accesorios, refacciones, etc.
      </p>
    </main>
  );
}
