import { useEffect, useState } from "react";
import "./character.css";
export function Character() {
  //useState
  const [character, setCharacter] = useState([]);
  const primerCapitulo = [];
  character.map((item) => {
    primerCapitulo.push(item.episode[0]);
  });
  console.log(primerCapitulo);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => setCharacter(data.results));
  }, [setCharacter]);
  //llaves
  //useEffect y useState Hooks

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${primerCapitulo}`)
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

  //useEffect
  return (
    <>
      <div className="Fondo">
        <h1 className="titulo"> The Rick and Morty API </h1>
      </div>
      <div className="fondo2">
        <ul className="Personajes">
          {character.map((item, index) => (
            <li key={index}>
              <div className="encapsulador">
                <img src={item.image} alt="" />

                <div className="ch">
                  <h3 className="name">{item.name}</h3>
                  {item.status === "Alive" ? (
                    <p className="doa">
                      {" "}
                      🟢 {item.status} - {item.species}
                    </p>
                  ) : (
                    <p className="doa">
                      {" "}
                      🔴 {item.status} - {item.species}{" "}
                    </p>
                  )}
                  <p className="ty"> {item.type}</p>
                  <p className="lkl">Last known location:</p>
                  <p className="or"> {item.origin.name}</p>
                  <p className="fs"> First Seen</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
