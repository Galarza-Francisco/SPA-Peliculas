import React from 'react';
import { Pagination } from 'flowbite-react'; // Importar Flowbite Pagination

const Paginacion = ({ paginaActual, totalPages, onPageChange }) => {
  return (
    <div className="flex justify-center mt-4">
      <Pagination
        currentPage={paginaActual} // Página actual
        totalPages={totalPages}     // Total de páginas
        onPageChange={onPageChange} // Función para cambiar de página
      />
    </div>
  );
};

export default Paginacion;
