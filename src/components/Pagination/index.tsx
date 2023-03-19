import React from "react";
import ReactPaginate from "react-paginate";

import styles from "./Pagination.module.scss";

type PaginationProps = {
	onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({onPageChange}) => {
  return (
    <ReactPaginate
      className={styles.root}
      breakLabel='...'
      nextLabel='>'
      onPageChange={(e) => onPageChange(e.selected + 1)}
      pageRangeDisplayed={4}
      pageCount={3}
      previousLabel='<'
    />
  );
};

export default Pagination;
