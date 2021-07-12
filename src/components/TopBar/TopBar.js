import logo from '../../images/logo.png';
import { faStar, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function TopBar(props) {
    return(
        <div className="relative container w-11/12 mx-auto pt-2 pb-2 flex flex-wrap flex-col sm:flex-row sm:flex-nowrap justify-between">
            <img src={logo} alt="Rick and Morty logo" className="sm:w-1/4 w-10/12 mx-auto" />
            <div className="relative flex items-center sm:w-1/3 w-11/12 sm:m-3 mx-auto my-1">
                <input type="text" name="input" placeholder="Search character by name" className="bg-gray-600 h-11 w-full p-5 rounded-lg" onKeyUp={(e)=>props.setSearchQueryParameter(e)}></input>
                <FontAwesomeIcon icon={faSearch} className="absolute sm:top-3 top-1 right-2 w-10 h-10  text-gray-300 text-xlarge" />
            </div>
            <button className="relative sm:w-1/5 w-11/12 mx-auto sm:my-auto my-1 text-large text-white border flex justify-center items-center h-11" onClick={()=>props.showOnlyFavourites()}>
                <FontAwesomeIcon icon={faStar} className="absolute top-0 right-2 w-10 h-10 text-yellow-300" />
                <span className="">My favourites</span>
            </button>
        </div>
    )

}
