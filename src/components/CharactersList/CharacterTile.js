import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CharacterTile(props) {
  return (
    <div className="container w-full sm:w-1/3 h-52 sm:h-44 m-1 flex justify-center bg-gray-600 rounded-lg">
      <img src={props.item.image} alt="" className="w-5/12 rounded-lg" />
      <div className="flex flex-col justtify-center relative container w-7/12">
        <div className="absolute top-0 right-0 z-50">
          <button onClick={() => props.removeFromFavourites(props.item)}>
            <FontAwesomeIcon
              icon={faStar}
              className={
                "absolute top-0 right-2 w-8 h-8 " +
                (props.isFavourite ? "text-yellow-300" : "text-white")
              }
            />
          </button>
        </div>
        <div className="relative text-left m-2 h-3/4 overflow-y-auto overflowWithScrollFunctionality">
          <div>
            <h2 className="text-large text-white">{props.item.name}</h2>
            <p className="text-base text-white">
              {props.item.status} - {props.item.species}
            </p>
          </div>
          <div>
            <h3 className="text-small text-gray-400">Last known location:</h3>
            <p className="text-base text-white">{props.item.location.name}</p>
          </div>
          <div>
            <h3 className="text-small text-gray-400">First seen in:</h3>
            <p className="text-base text-white">{props.item.origin.name}</p>
          </div>
        </div>
        <button
          className={"relative text-small w-11/12 h-1/5 m-auto mb-2 border " +
          (props.isFavourite ? "hidden" : "text-white")}
          onClick={() => props.addToFavourites(props.item)}
        >
          Add to Favourites
        </button>
      </div>
    </div>
  );
}
