import { useState } from "react";
import { useEffect } from "react";
import FooterBar from "../FooterBar/FooterBar";
import CharacterTile from "./CharacterTile";
import { faUsersSlash, faWifi } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CharactersList(props) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [pagesNumber, setPagesNumber] = useState();

  useEffect(() => {
    let queryParameter = props.queryParameter;
    fetch(`https://rickandmortyapi.com/api/character/${queryParameter}`)
      .then((result) => result.json())
      .then((result) => {
        setItems(result.results ?? []);
        setPagesNumber(result.info?.pages);
        setIsLoaded(true);
      })
      .catch((error) => {
        setIsLoaded(true);
        setError(error);
        console.error(
          "There has been a problem with your fetch operation: ",
          error
        );
      });
  }, [props]);

  if (error) {
    return (
      <div className="text-white flex flex-col h-screen">
        <FontAwesomeIcon
          icon={faWifi}
          className={"text-xxxlarge text-gray-400 mx-auto my-6"}
        />
        <div className="text-xlarge">
          There is any problem with your fetch. Please check your internet
          connection.
        </div>
      </div>
    );
  } else if (!isLoaded) {
    return (
      <div className="text-white flex flex-col h-screen">
        <svg
          className="animate-spin h-12 w-12 m-auto text-white"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-20"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      </div>
    );
  } else {
    return (
      <div className="container w-11/12 mx-auto mt-3 mb-3 flex flex-wrap flex-col sm:flex-row justify-center">
        {items.length === 0 && (
          <div className="text-white flex flex-col h-screen">
            <FontAwesomeIcon
              icon={faUsersSlash}
              className={"text-xxxlarge text-gray-400 mx-auto my-6"}
            />
            <div className="text-xlarge">
              There are no users for this search. Try enter other name.
            </div>
          </div>
        )}
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
          setPageQueryParameter={props.setPageQueryParameter}
        />
      </div>
    );
  }
}
