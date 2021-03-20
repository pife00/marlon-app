import React from "react";
import Pages from './Pages/Pages'
const pagination = () => {
  return (
    <nav className="pagination" role="navigation" aria-label="pagination">
      <ul className="pagination-list">
          <Pages />
      </ul>
    </nav>
  );
};

export default pagination;
