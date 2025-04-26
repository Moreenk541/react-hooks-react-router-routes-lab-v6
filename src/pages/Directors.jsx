import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Directors() {
  const [directors, setDirectors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/directors")
      .then(res => res.json())
      .then(setDirectors);
  }, []);

  return (
    <>
      <NavBar />
      <h1>Directors Page</h1>
      {directors.map((dir, i) => (
        <article key={i}>
          <h2>{dir.name}</h2>
          <ul>
            {dir.movies.map((m, j) => (
              <li key={j}>{m}</li>
            ))}
          </ul>
        </article>
      ))}
    </>
  );
}

export default Directors;
