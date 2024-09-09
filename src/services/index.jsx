import axios from "axios";

const movieApi = import.meta.env.VITE_MOVIES_API;

export const moviesServices = {
  async getAllMovies() {
    try {
      return (await axios.get(movieApi)).data;
    } catch (error) {
      return error;
    }
  },
  async createMovie(data) {
    try {
      return await axios.post(movieApi, data);
    } catch (error) {
      return error;
    }
  },
};
