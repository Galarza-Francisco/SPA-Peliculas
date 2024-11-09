import React from "react";

const Header = ({ busqueda, setBusqueda, handleSubmit }) => {
  return (
    <div className="container mx-auto px-4 py-8 text-center">
      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-center space-x-4"
      >
        <input
          type="text"
          placeholder="Escribí una película"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-600"
        />
        <button
          type="submit"
          className="px-6 py-2 bg-cyan-700 text-white rounded-lg shadow-md hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-600"
        >
          Buscar
        </button>
      </form>
    </div>
  );
};

export default Header;
