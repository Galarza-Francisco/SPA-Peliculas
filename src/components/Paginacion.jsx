import React from 'react';
import { Pagination } from 'flowbite-react';

const Paginacion = ({ paginaActual, pagTotal, onPageChange }) => {
  return (
    <div className="flex justify-center mt-4">
      <Pagination
        currentPage={paginaActual}
        totalPages={pagTotal}    
        onPageChange={onPageChange} // Función para cambiar de página
      />
    </div>
  );
};

export default Paginacion;
