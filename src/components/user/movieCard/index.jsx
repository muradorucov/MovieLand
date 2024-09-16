import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { Link } from "react-router-dom";

function MovieCard(movie) {
  let { id, title, thumbnail, year } = movie;

  return (
    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6">
      <div className="movie">
        <Link to={`/movie/${id}`}>
          <img src={thumbnail} alt={title} />
        </Link>
        <Link to={`/movie/${id}`}>
          <h3>{title}</h3>
        </Link>

        <div className="d-flex justify-content-space-between">
          <p>Year: {year}</p>
          <button>
            <MdFavoriteBorder />
          </button>
          {/* <button>
            <MdFavorite/>
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
