import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { moviesServices } from "../../../services";

function SingleMovie() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  useEffect(() => {
    moviesServices.singleMovie(id).then((res) => setMovie(res.data));
  }, [id]);

  return (
    <section id="singleMovie">
      <div className="container">
        <div className="row justify-content-center mb">
          <div>
            <h2>{movie.title}</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
            <p>{movie.description}</p>
            <p>Year: {movie.year}</p>
            <p>Released: {movie.released}</p>
            <p>Rating: {movie.rating}</p>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
            <img src={movie.thumbnail} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SingleMovie;
