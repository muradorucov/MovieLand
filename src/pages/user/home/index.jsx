import { useEffect } from "react";
import { moviesServices } from "../../../services";

function Home() {
  useEffect(() => {
    moviesServices.getAllMovies().then((data) => console.log(data));
  }, []);
  return <div>Home</div>;
}

export default Home;
