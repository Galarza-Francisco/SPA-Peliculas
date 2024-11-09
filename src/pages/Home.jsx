import React, { useEffect, useState } from "react";
import { buscarPelis, fetchPeliculas } from "../services/api";
import PeliculasContainer from "../components/PeliculasContainer";
import BarraBusqueda from "../components/BarraBusqueda";
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
      setPaginaActual(1); // Resetear la primer pag
    } else {
      const resultados = await buscarPelis(busqueda);
      setPeliculas(resultados.results);
      setPaginaActual(1); // Resetear la primer pag
    }
  };

  //PAGINACION
  const ultimaPag = paginaActual * peliculasPorPagina; //indice de la ultima peli que se va a mostrar
  const primeraPag = ultimaPag - peliculasPorPagina;  //indice de la perimera peli que se va a mostrar
  const peliculasActuales = peliculas.slice(primeraPag,ultimaPag); //array que va a tener las pelis que se van a mostrar en esa pagina 

  // Cambiar de página
  const onPageChange = (pageNumber) => {
    setPaginaActual(pageNumber);
  };

  // Calcular el número total de páginas
  const pagTotal = Math.ceil(peliculas.length / peliculasPorPagina); //math.celi redondea el nro para arriba


  return (
    <div className="p-4">
      <NavBar />
      <BarraBusqueda
        busqueda={busqueda}
        setBusqueda={setBusqueda}
        handleSubmit={handleSubmit}
      />
      <PeliculasContainer peliculas={peliculasActuales} />
      <Paginacion
        paginaActual={paginaActual}
        pagTotal={pagTotal}
        onPageChange={onPageChange}
      />
    </div>
  );
};

export default Home;
