import { useState } from "react";
import { useEffect } from "react";
import FooterBar from "../FooterBar/FooterBar";
import CharacterTile from "./CharacterTile";

export default function CharactersList(props) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [pagesNumber, setPagesNumber] = useState();
  const [page, setPage] = useState(1);

  const whichPageWasSelected = (e) => {
    setPage(e.target.textContent);
  };

  useEffect(() => {
    let queryParameter = props.queryParameter;
    fetch(`https://rickandmortyapi.com/api/character/${queryParameter}`)
      .then((res) => res.json())
      .then(
        (result) => {
          setItems(result.results);
          setPagesNumber(result.info.pages);
          setIsLoaded(true);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [props]);

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
        <FooterBar
          pagesNumber={pagesNumber}
          whichPageWasSelected={whichPageWasSelected}
          setPageQueryParameter={props.setPageQueryParameter}
        />
      </div>
    );
  }
}
