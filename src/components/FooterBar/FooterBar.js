import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function FooterBar(props) {
    let arrayWithPages = [...Array(props.pagesNumber).keys()];

    return(
        <div className="container w-4/5 mx-auto pt-2 pb-2 flex flex-wrap flex-col sm:flex-row sm:flex-nowrap justify-between text-white">
            <div className="relative flex w-1/12 p-4">
                <FontAwesomeIcon icon={faArrowLeft} className="absolute top-0 right-2 w-10 h-full text-xlarge text-gray-300" />
                <div className="h-full">Prev</div>
            </div>
            <div className=" relative flex">
                {arrayWithPages.map((page) => <button className="m-1" onClick={(e) => props.setPageQueryParameter(e)}>{page+1}</button>)}
            </div>
            <div className="relative flex w-1/12 p-4">
                <div className="h-full">Next</div>
                <FontAwesomeIcon icon={faArrowRight} className="absolute top-0 right-2 w-10 h-full text-xlarge text-gray-300" />
            </div>
        </div>
    )

}