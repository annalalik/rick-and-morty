import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactPaginate from 'react-paginate';

export default function FooterBar(props) {
    return(
        <div className="container w-1/2 sm:w-4/5 mx-auto pt-2 pb-2 flex flex-wrap flex-col sm:flex-row sm:flex-nowrap justify-center text-white">
            <ReactPaginate
                previousLabel={'<'}
                nextLabel={'>'}
                breakLabel={'...'}
                pageCount={props.pagesNumber}
                initialPage={0}
                marginPagesDisplayed={3}
                pageRangeDisplayed={2}
                onPageChange={props.setPageQueryParameter}
                containerClassName={'pagination'}
                activeClassName={'active'}
                pageClassName={'page'}
                pageLinkClassName={'pageLink'}
                previousClassName={'previous'}
                nextClassName={'next'}
                breakClassName={'break'}
            />
        </div>
    )

}