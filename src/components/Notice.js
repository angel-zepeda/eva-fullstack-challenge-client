import React from 'react';

const Notice = ({ type, message }) => {
  return (
    <div className={`alert alert-dismissible alert-${type} col-md-4 mx-auto`}>
      <button type="button" className="close" data-dismiss="alert">&times;</button>
      <p className="alert-link">{message}</p>
    </div>
  );
}

export default Notice;