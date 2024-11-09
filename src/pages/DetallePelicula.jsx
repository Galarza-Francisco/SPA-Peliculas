import React, { useEffect, useState } from "react";
import { fetchDetallePelicula, fetchTrailer } from "../services/api";
import { Link, useParams } from "react-router-dom";
import { Button, Card, Modal } from 'flowbite-react';


const DetallePelicula = () => {
  const { id } = useParams();
  const [detallePeli, setDetallePeli] = useState(null);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [trailer, setTrailer] = useState(null);

  useEffect(() => {
    const getPeliculaDetalle = async () => {
      try {
        const pelicula = await fetchDetallePelicula(id);
        setDetallePeli(pelicula);
      } catch (error) {
        setError('Error al traer detalle');
        console.error("error al traer detalle", error);
      }
    };
    getPeliculaDetalle();
  }, [id]);

  useEffect(() => {
    const getTrailer = async () => {
      try {
        const trailer = await fetchTrailer(id);
        setTrailer(trailer);
      } catch (error) {
        console.error('error al traer trailer', error);
      }
    };
    getTrailer();
  }, [id, detallePeli]);

  if (error) return <div className="text-center text-red-500">{error}</div>;
  if (!detallePeli) return <div className="text-center">Cargando...</div>;

  return (
    <div className="container mx-auto px-4 py-8">

      <Button as={Link} to="/" className="inline-flex items-center mb-4 text-white hover:text-white transition-all duration-300 transform hover:scale-105   bg-cyan-700 hover:bg-cyan-600 focus:ring-4 focus:ring-blue-300">
        Volver al Home
      </Button>
      <Card className="overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/3">
            <img
              src={`https://image.tmdb.org/t/p/w500${detallePeli.poster_path}`}
              alt={detallePeli.title}
              className="w-full h-auto object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
            />
          </div>
          <div className="md:w-2/3 p-6">
            <h1 className="text-3xl font-bold mb-4">{detallePeli.title}</h1>
            <p className="text-gray-700 mb-4">{detallePeli.overview}</p>
            <div className="mb-4">
              <span className="font-semibold">Fecha de lanzamiento:</span> {detallePeli.release_date}
            </div>
            <div className="mb-4">
              <span className="font-semibold">Puntuación:</span> {detallePeli.vote_average.toFixed(1)}/10
            </div>
            <div className="mb-4">
              <span className="font-semibold">Géneros:</span> {detallePeli.genres.map(g => g.name).join(', ')}
            </div>
            <Button onClick={() => setShowModal(true)} className="mt-4">
              <p className="" />
              Ver Trailer
            </Button>
          </div>
        </div>
      </Card>

      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <Modal.Header>Trailer de {detallePeli.title}</Modal.Header>
        <Modal.Body>
          <div className="aspect-w-16 aspect-h-9">
            {trailer ? (
              <iframe
              src={`https://www.youtube.com/embed/${trailer.key}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={`Trailer de ${detallePeli.title}`}
              className="w-full h-full"
            ></iframe>
            ) : (
              <p>No hay trailer disponible</p>
            )}
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default DetallePelicula;