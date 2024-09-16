import { useSelector } from "react-redux";
import MovieCard from "../../../components/user/movieCard";

function Favorite() {
  const favList = useSelector((state) => state.favList);

  return (
    <section id="favorite">
      <div className="container">
        <div className="row">
          {favList.map((movie) => (
            <MovieCard {...movie} key={movie.id} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Favorite;
