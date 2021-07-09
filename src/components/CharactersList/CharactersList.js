import { useState } from "react";
import { useEffect } from "react";
import CharacterTile from "./CharacterTile";

export default function CharacterList(props) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then((res) => res.json())
      .then(
        (result) => {
          setItems(result.results);
          setIsLoaded(true);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="container w-11/12 mx-auto mt-3 mb-3 flex flex-wrap flex-col sm:flex-row justify-center">
        {items.map((item) => (
          <CharacterTile
            key={item.id}
            item={item}
            addToFavourites={props.addToFavourites}
            removeFromFavourites={props.removeFromFavourites}
            isFavourite={props.showIsFavourite(item)}
          />
        ))}
      </div>
    );
  }
}
