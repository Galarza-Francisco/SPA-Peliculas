import React, { useEffect, useState } from "react";
import { buscarPelis, fetchPeliculas } from "../services/api";
import PeliculasContainer from "../components/PeliculasContainer";
import Header from "../components/BarraBusqueda";
import NavBar from "../components/NavBar";
import Paginacion from "../components/Paginacion";

const Home = () => {
  const [peliculas, setPeliculas] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [paginaActual, setPaginaActual] = useState(1);
  const [peliculasPorPagina] = useState(6);

  useEffect(() => {
    const getPeliculas = async () => {
      try {
        const peliculas = await fetchPeliculas();
        setPeliculas(peliculas);
      } catch (error) {
        console.error("error al traer las peliculas", error);
      }
    };
    getPeliculas();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (busqueda.trim() === "") {
      const peliculas = await fetchPeliculas();
      setPeliculas(peliculas);
      setPaginaActual(1); // Resetear a la primera página
    } else {
      const resultados = await buscarPelis(busqueda);
      setPeliculas(resultados.results);
      setPaginaActual(1); // Resetear a la primera página
    }
  };

  // Calcular el índice de las películas a mostrar
  // Este código toma el arreglo peliculas y obtiene una sub-matriz de las películas que corresponden a la página actual.
// Con los índices primeraPag y ultimaPag, obtenemos las películas correctas para la página en cuestión. Por ejemplo, si estamos en la página 2, se tomarán las películas desde el índice 6 hasta el índice 11 (es decir, las películas 7-12).
  const ultimaPag = paginaActual * peliculasPorPagina;
  const primeraPag = ultimaPag - peliculasPorPagina;
  const peliculasActuales = peliculas.slice(
    primeraPag,
    ultimaPag
  );

  // Cambiar de página
  const onPageChange = (pageNumber) => {
    setPaginaActual(pageNumber);
  };

  // Calcular el número total de páginas
  const totalPages = Math.ceil(peliculas.length / peliculasPorPagina);

  return (
    <div className="p-4">
      <NavBar />
      <Header
        busqueda={busqueda}
        setBusqueda={setBusqueda}
        handleSubmit={handleSubmit}
      />
      <PeliculasContainer peliculas={peliculasActuales} />
      <Paginacion
        paginaActual={paginaActual}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </div>
  );
};

export default Home;
