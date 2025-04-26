import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Actors() {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/actors")
      .then(res => res.json())
      .then(setActors);
  }, []);

  return (
    <>
      <NavBar />
      <h1>Actors Page</h1>
      {actors.map((actor, i) => (
        <article key={i}>
          <h2>{actor.name}</h2>
          <ul>
            {actor.movies.map((m, j) => (
              <li key={j}>{m}</li>
            ))}
          </ul>
        </article>
      ))}
    </>
  );
}

export default Actors;
