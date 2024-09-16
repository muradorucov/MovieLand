import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

function MovieCard(movie) {
  let { id, title, thumbnail, year } = movie;
  const dispacth = useDispatch();
  const favList = useSelector((state) => state.favList);
  function addToFav() {
    dispacth({
      type: "ADD_TO_FAV",
      payload: movie,
    });
  }
  function removeFromFav() {
    dispacth({
      type: "REMOVE_FROM_FAV",
      payload: id,
    });
  }

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
          {favList.find((movie) => movie.id === id) ? (
            <button onClick={removeFromFav}>
              <MdFavorite />
            </button>
          ) : (
            <button onClick={addToFav}>
              <MdFavoriteBorder />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
