import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactPaginate from "react-paginate";

export default function FooterBar(props) {
  return (
    <div className="container sm:w-full mx-auto pt-2 pb-2 flex flex-wrap flex-col sm:flex-row sm:flex-nowrap justify-center text-white">
      <ReactPaginate
        previousLabel={"prev"}
        nextLabel={"next"}
        breakLabel={"..."}
        pageCount={props.pagesNumber}
        initialPage={0}
        marginPagesDisplayed={3}
        pageRangeDisplayed={1}
        onPageChange={props.setPageQueryParameter}
        containerClassName={"pagination"}
        activeClassName={"active"}
        pageClassName={"page"}
        pageLinkClassName={"pageLink"}
        previousClassName={"previous"}
        nextClassName={"next"}
        breakClassName={"break"}
      />
    </div>
  );
}
