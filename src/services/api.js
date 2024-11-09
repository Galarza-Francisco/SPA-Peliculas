import axios from "axios";
const API_KEY = process.env.REACT_APP_API_KEY;

const instance = axios.create({
});

export const fetchPeliculas = async () => {
   try {
        const response = await instance.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`);
        return response.data.results;
   } catch (error) {
    console.error('error al traer las peliculas destacadas', error);
    throw error;
   }
}

export const fetchDetallePelicula = async (id) => {
    try {
         const response = await instance.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`);
         return response.data;
    } catch (error) {
     console.error('error al traer detalle', error);
     throw error;
    }
 }

export const buscarPelis = async (query) => {
    try {
        const response = await instance.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`);
        return response.data;
    } catch (error) {
        console.error('error al traer las peliculas destacadas', error);
        throw error;
    }
}

export const fetchTrailer = async (id) => {
    try {
        const response = await instance.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`);
        return response.data.results[0];
    } catch (error) {
        console.error('error al traer trailer', error);
        throw error;
    }
}

export default instance;
