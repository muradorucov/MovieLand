import MovieCard from "../movieCard";

import { useEffect, useState } from "react";
import { moviesServices } from "../../../services";

function Movies() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    moviesServices.getAllMovies().then((res) => setMovies(res.data));
  }, []);
  return (
    <>
      {movies.map((movie) => (
        <MovieCard {...movie} key={movie.id} />
      ))}
    </>
  );
}

export default Movies;
