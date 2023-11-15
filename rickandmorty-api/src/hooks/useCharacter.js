import { useState } from "react";

export function useCharacter() {
  const [allCharacters, setAllCharacters] = useState([]);
  const [episodes,setAllEpisodes] = useState([]);
  const getAllCharacters = () => {
    const data = fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => setAllCharacters(data.results));
    return data;
  };
  const getEpisodeFromCharacter = (episodes) =>{

    const data = fetch(`https://rickandmortyapi.com/api/episode/${episodes}`)
    .then((res)=> res.json())
    .then((data) => setAllEpisodes(data));
    return data;
  };
  return {
    getAllCharacters,
    allCharacters,
    getEpisodeFromCharacter,
    episodes,
  };
}

