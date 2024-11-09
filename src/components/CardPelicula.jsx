import { Button, Card } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const CardPelicula = ({ pelicula }) => {
  return (
    <Card
      className="max-w-sm h-full flex flex-col justify-between transition-all duration-300 hover:shadow-xl"
      imgAlt={pelicula.title}
      imgSrc={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`}
    >
      <div>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white truncate mb-2">
          {pelicula.title}
        </h5>
        <p className="font-semibold text-gray-500 dark:text-gray-400 line-clamp-3 mb-4">
          {pelicula.overview}
        </p>
      </div>
      <div>
        <div className="flex items-center justify-between mb-4">
          <span className="font-semibold bg-yellow-100 text-yellow-800 text-xs mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">Votos: <span className="ml-2">{pelicula.vote_count}</span></span>
          <span className="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">
          ⭐ {pelicula.vote_average.toFixed(1)}
          </span>
        </div>
        <Button
          as={Link}
          to={`/movie/${pelicula.id}`}
          className="w-full bg-cyan-700 hover:bg-cyan-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-all duration-300 transform hover:scale-105"
        >
          Ver Detalles
        </Button>
      </div>
    </Card>
  );
};

export default CardPelicula;
