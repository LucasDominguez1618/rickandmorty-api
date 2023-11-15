import { useEffect, useState } from "react";
import "./character.css";
import { Singlecharacter } from "./Singlecharacter";
import { Svg } from "./svg";




export  function Character() {
  //useState
  const [character, setCharacter] = useState([]);
  



  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => setCharacter(data.results));
  }, [setCharacter]);
  //llaves
  //useEffect y useState Hooks

  //useEffect
  return (
    <>
      <div className="Fondo">
        <div className="svg-header">
        <Svg className="svg" />
        </div>
        <h1 className="titulo"> The Rick and Morty API </h1>
      </div>
      <div className="fondo2">
        <ul className="Personajes">
          {character.map((item, index) => (
            <Singlecharacter personajes={item} key={index} />
          ))}
        </ul>
      </div>
    </>
  );

          }
          