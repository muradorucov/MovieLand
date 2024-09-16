import { useState } from "react";
import Movies from "../../../components/user/movies";

function Home() {

  useState()
  return (
    <div>
      <section id="movies">
        <div className="container">
          <div className="row text-center justify-content-center my">
            <div>
              <h2>Filmlər</h2>
              <p>Aksiyon dolu filmlər yanlız bizdə!!!</p>
            </div>
          </div>
          <div className="row">
            <Movies />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
