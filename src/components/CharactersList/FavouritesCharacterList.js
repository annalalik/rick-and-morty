import CharacterTile from "./CharacterTile";
import FavouriteCharacterTile from "./FavouriteCharacterTile";

export default function FavouritesCharacterList(props) {
    console.log('test: ', props.favourites);
    return (
      <div className="container w-11/12 mx-auto mt-3 mb-3 flex flex-wrap flex-col sm:flex-row justify-center">
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
