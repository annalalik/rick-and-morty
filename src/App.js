import './App.css';
import { useState } from 'react';
import CharactersList from './components/CharactersList/CharactersList';
import FavouritesCharacterList from './components/CharactersList/FavouritesCharacterList';
import TopBar from './components/TopBar/TopBar';

function App() {
  const [favourites, setFavourites] = useState([]);
  const [isShownFavourites, setIsShownFavourites] = useState(false);
  const [queryParameter, setQueryParameter] = useState('');

  const addToFavourites = (character) => {
    let alreadyInFavourites = favourites.find((item) => item.id === character.id);

    if(!alreadyInFavourites) {
        setFavourites((currentSelection) => [...currentSelection, character]);
    }
  };

  //   ToDo: add removing
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
    setIsShownFavourites(!isShownFavourites);
  };

  const setSearchQueryParameter = (e) => {
    let queryParameterForName = "?name=" + e.target.value;
    console.log(e);
    setQueryParameter(queryParameterForName);

    console.log(queryParameterForName, 'query: ', queryParameter);
  };

  const setPageQueryParameter = (currentPage) => {
    let queryParameterForPage = "?page=" + (currentPage.selected + 1);
    setQueryParameter(queryParameterForPage);
  };

  const checkIsFavouritesListEmpty = () => {
    if(favourites.length === 0) {
      return true;
    }
    return false;
  };

  return (
    <div className="App bg-gray-900 box-border h-full">
      <TopBar
        showOnlyFavourites={toggleFavourites}
        setSearchQueryParameter={setSearchQueryParameter}
      />
      {!isShownFavourites && <CharactersList
        addToFavourites={addToFavourites}
        removeFromFavourites={removeFromFavourites}
        showIsFavourite={showIsFavourite}
        queryParameter={queryParameter}
        setPageQueryParameter={setPageQueryParameter}
       />}
      {isShownFavourites && <FavouritesCharacterList 
        favourites={favourites}
        isFavouritesListEmpty={checkIsFavouritesListEmpty()}
        showIsFavourite={showIsFavourite}
      />}
    </div>
  );
}

export default App;
