import React from 'react';

const Pagination = () => {
  let initial_page = 0;

  return (
    <div>
      <ul className="pagination pagination-sm">
        <li className="page-item disabled">
          <a className="page-link" href={`?page=${initial_page - 1}&limit=15`}>&laquo;</a>
        </li>
        <li className="page-item active">
          <a className="page-link" href={`?page=${initial_page}&limit=15`}>1</a>
        </li>
        <li className="page-item">
          <a className="page-link" href={`?page=${initial_page + 1}&limit=15`}>2</a>
        </li>
        <li className="page-item">
          <a className="page-link" href={`?page=${initial_page + 2}&limit=15`}>3</a>
        </li>
        <li className="page-item">
          <a className="page-link" href={`?page=${initial_page + 3}&limit=15`}>4</a>
        </li>
        <li className="page-item">
          <a className="page-link" href={`?page=${initial_page + 4}&limit=15`}>5</a>
        </li>
        <li className="page-item">
          <a className="page-link" href={`?page=${initial_page + 1}&limit=15`}>&raquo;</a>
        </li>
      </ul>
    </div>
  );
}

export default Pagination;