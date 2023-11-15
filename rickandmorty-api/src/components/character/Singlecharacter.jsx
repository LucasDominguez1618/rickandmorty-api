import { Character } from "./Character.jsx";
import { useCharacter } from "../../hooks/useCharacter.js";
import { useEffect } from "react";
export function Singlecharacter(props) {
  const { personajes, index } = props;
  const { status, image, species, name, origin, id, created, type,episode } =
    personajes;

  const{episodes,getEpisodeFromCharacter}=useCharacter() 

    const primerCapitulo = [];
  
  function episodios(){
    episode.map((item)=>{

      const numeros = item.slice(40)
      primerCapitulo.push(numeros)      


    })
    
    getEpisodeFromCharacter(primerCapitulo);
    
  }
useEffect (()=>{

if (episodes.length>1 ){
  episodes.map((episode)=>{
    console.log(episode.name)
    
  })
}else{

  console.log(episodes.name)
}

},[episodes])


  return (

    <li key={index}>
      <div className="encapsulador">
        <img src={image} alt="" />

        <div className="ch">
          <div className="interlineado1">
            <h3 className="name">{name}</h3>
            {status === "Alive" ? (
              <p className="doa">
                {" "}
                🟢 {status} - {species}
              </p>
            ) : (
              <p className="doa">
                {" "}
                🔴 {status} - {species}{" "}
              </p>
            )}
          </div>
          <div className="interlineado2">
            <p className="ty"> {type}</p>
            <p className="lkl">Last known location:</p>
            <p className="or"> {origin.name}</p>
          </div>
          <div className="interlineado3">
            <p className="fs"> First Seen</p>
            <p onClick = {episodios}>Episodios</p>
          </div>
        </div>
      </div>
    </li>
  );
}

