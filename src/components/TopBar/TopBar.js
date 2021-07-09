import logo from '../../images/logo.png';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function TopBar(props) {
    return(
        <div className="container w-4/5 mx-auto pt-2 pb-2 flex flex-wrap flex-col sm:flex-row sm:flex-nowrap justify-between">
            <img src={logo} alt="Rick and Morty logo" className="w-1/4" />
            <div className="relative w-1/2 m-3">
                <input value="Search character by name" className="bg-gray-600 h-10 w-2/3 p-1"/>
                <FontAwesomeIcon icon={faStar} className="absolute top-0 left-2 w-10 h-10 text-yellow-300" />
            </div>
            <button className="relative w-1/4 mt-3 mb-3 text-small text-white border flex justify-center items-center" onClick={()=>props.showOnlyFavourites()}>
                <FontAwesomeIcon icon={faStar} className="absolute top-0 right-2 w-10 h-10 text-yellow-300" />
                <span className="">My favourites</span>
            </button>
        </div>
    )

}
