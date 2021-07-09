import './App.css';
import { useState } from 'react';
import CharacterList from './components/CharactersList/CharactersList';
import FavouritesCharacterList from './components/CharactersList/FavouritesCharacterList';
import TopBar from './components/TopBar/TopBar';

function App() {
  const [favourites, setFavourites] = useState([]);
  const [isShownFavourites, setIsShownFavourites] = useState(false);

  const addToFavourites = (character) => {
    // let alreadyInFavourites = false;
    // favourites.forEach((favouriteItem) => {
    //     if(character.id === favouriteItem.id){
    //         alreadyInFavourites = true;
    //     }
    // })
    // if(!alreadyInFavourites){
    //     setFavourites((currentSelection) => [...currentSelection, character]);
    // }

    // using find()
    let alreadyInFavourites = favourites.find((item) => item.id === character.id);

    if(!alreadyInFavourites) {
        setFavourites((currentSelection) => [...currentSelection, character]);
    }
  };

  //   add removing
  const removeFromFavourites = (character) => {
    let alreadyInFavourites = favourites.find((item) => item.id === character.id);

    if(!alreadyInFavourites) {
        setFavourites((currentSelection) => [...currentSelection, character]);
    }
  };

  const showIsFavourite = (character) => {
    let alreadyInFavourites = favourites.find((item) => item.id === character.id);

    return !!alreadyInFavourites;
  };

  const toggleFavourites = () => {
    console.log('kliknieto');
    setIsShownFavourites(!isShownFavourites);
  };

  return (
    <div className="App bg-gray-900 box-border h-screen">
      <TopBar
        showOnlyFavourites={toggleFavourites}
      />
      {!isShownFavourites && <CharacterList
        addToFavourites={addToFavourites}
        removeFromFavourites={removeFromFavourites}
        showIsFavourite={showIsFavourite}
       />}
      {isShownFavourites && <FavouritesCharacterList 
        favourites={favourites}
        showIsFavourite={showIsFavourite}
      />}
    </div>
  );
}

export default App;
