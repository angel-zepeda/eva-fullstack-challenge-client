import React from 'react';

const Pagination = () => {
  let initial_page = 0;

  return (
    <div>
      <ul className="pagination pagination-sm">
        <li className="page-item disabled">
          <a className="page-link" href={`?page=${initial_page - 1}&limit=12`}>&laquo;</a>
        </li>
        <li className="page-item active">
          <a className="page-link" href={`?page=${initial_page}&limit=12`}>1</a>
        </li>
        <li className="page-item">
          <a className="page-link" href={`?page=${initial_page + 1}&limit=12`}>2</a>
        </li>
        <li className="page-item">
          <a className="page-link" href={`?page=${initial_page + 2}&limit=12`}>3</a>
        </li>
        <li className="page-item">
          <a className="page-link" href={`?page=${initial_page + 3}&limit=12`}>4</a>
        </li>
        <li className="page-item">
          <a className="page-link" href={`?page=${initial_page + 4}&limit=12`}>5</a>
        </li>
        <li className="page-item">
          <a className="page-link" href={`?page=${initial_page + 1}&limit=12`}>&raquo;</a>
        </li>
      </ul>
    </div>
  );
}

export default Pagination;