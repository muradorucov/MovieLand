import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { moviesServices } from "../../../services";
import MovieCard from "../../../components/user/movieCard";

function Search() {
  const { param } = useParams();
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    moviesServices.getAllMovies(param).then((res) => {
      if (res.status === 200) {
        setMovies(res.data);
      } else {
        setError(res.response.data);
      }
    });
  }, [param, navigate]);
  return (
    <section id="searchpage">
      <div className="container">
        <div className="row">
          {error ? (
            <p>{error}</p>
          ) : (
            movies.map((movie) => <MovieCard {...movie} key={movie.id} />)
          )}
        </div>
      </div>
    </section>
  );
}

export default Search;
