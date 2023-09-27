import { useEffect } from "react";
import { useCharacter } from "../../hooks/useCharacter";

export const allCharacters = () => {
  const { getAllCharacters, allCharacters } = useCharacter();

  useEffect(() => {
    getAllCharacters();
  }, []);
};
