import FavouriteCharacterTile from "./FavouriteCharacterTile";
import { faUsersSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function FavouritesCharacterList(props) {
  return (
    <div className="container w-11/12 mx-auto mt-3 mb-3 flex flex-wrap flex-col sm:flex-row justify-center">
      {props.isFavouritesListEmpty && (
        <div className="text-white flex flex-col h-screen">
          <FontAwesomeIcon
            icon={faUsersSlash}
            className={"text-xxxlarge text-gray-400 mx-auto my-6"}
          />
          <div className="text-xlarge">
            You have no favourites characters yet.
          </div>
        </div>
      )}
      {props.favourites.map((item) => (
        <FavouriteCharacterTile
          key={item.id}
          item={item}
          isFavourite={props.showIsFavourite(item)}
        />
      ))}
    </div>
  );
}
