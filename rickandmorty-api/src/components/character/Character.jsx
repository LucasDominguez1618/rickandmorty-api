import { useEffect, useState } from "react";
import "./character.css";
export function Character() {
  //useState
  const [character, setCharacter] = useState([]);

  //llaves
  //useEffect y useState Hooks

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => setCharacter(data.results));
  }, [setCharacter]);

  //useEffect
  return (
    <>
      <ul className="Personajes">
        {character.map((item, index) => (
          <li key={index}>
            <div className="encapsulador">
              <div className="img">
                <img src={item.image} alt="" />
              </div>
              <div className="ch">
                <h3>{item.name}</h3>
                <p className="doa"> {item.status}</p>
                <p className="sp"> {item.species}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
