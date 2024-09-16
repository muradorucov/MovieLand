import axios from "axios";

const movieApi = import.meta.env.VITE_MOVIES_API;
const usersApi = import.meta.env.VITE_USERS_API;

export const moviesServices = {
  async getAllMovies(param) {
    try {
      if (param) {
        return await axios.get(`${movieApi}?title=${param}`);
      } else {
        return await axios.get(movieApi);
      }
    } catch (error) {
      return error;
    }
  },
  async singleMovie(id) {
    try {
      return await axios.get(`${movieApi}/${id}`);
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

export const userServices = {
  async getAllUsers() {
    try {
      return (await axios.get(usersApi)).data;
    } catch (error) {
      return error;
    }
  },
  async createUser(data) {
    try {
      return await axios.post(usersApi, data);
    } catch (error) {
      return error;
    }
  },
};
