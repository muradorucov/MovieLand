import { moviesServices } from "../../../services";
import { useState } from "react";
import axios from "axios";

function CreateMovie() {
  const cloudApi = import.meta.env.VITE_CLOUD_API;
  const cloudName = import.meta.env.VITE_CLOUD_NAME;
  const cloudPReset = import.meta.env.VITE_CLOUD_PRESET;
  const [movieData, setMovieData] = useState({
    title: "",
    description: "",
    year: "",
    released: "",
    rating: "",
    thumbnail: "",
  });
  const [file, setFile] = useState(null);

  const submitForm = (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("file", file);
    formData.append("upload_preset", cloudPReset);

    axios.post(`${cloudApi}/${cloudName}/upload`, formData).then((res) => {
      moviesServices
        .createMovie({ ...movieData, thumbnail: res.data.url })
        .then((res) => console.log(res));
    });
  };
  return (
    <div id="createmovie">
      <form onSubmit={submitForm}>
        <input
          type="text"
          placeholder="Movie Title"
          onChange={(e) =>
            setMovieData({ ...movieData, title: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Movie year"
          onChange={(e) => setMovieData({ ...movieData, year: e.target.value })}
        />
        <input
          type="text"
          placeholder="Movie Rating"
          onChange={(e) =>
            setMovieData({ ...movieData, rating: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Movie Released"
          onChange={(e) =>
            setMovieData({ ...movieData, released: e.target.value })
          }
        />
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        <textarea
          placeholder="Description"
          onChange={(e) =>
            setMovieData({ ...movieData, description: e.target.value })
          }
        ></textarea>

        <button>Create Movie</button>
      </form>
    </div>
  );
}

export default CreateMovie;
