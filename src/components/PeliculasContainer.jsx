import React from "react";
import CardPelicula from "./CardPelicula";

const PeliculasContainer = ({ peliculas }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {peliculas.map(pelicula => (
        <div key={pelicula.id}>
          <CardPelicula pelicula={pelicula} />
        </div>
      ))}
    </div>
  );
};

export default PeliculasContainer;
