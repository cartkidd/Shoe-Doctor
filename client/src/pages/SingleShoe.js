import React from 'react';

const SingleShoe = props => {
  return (
    <div>
      <div className="card mb-3">
        <p className="card-header">
          <span style={{ fontWeight: 700 }} className="text-light">
            Username
          </span>{' '}
          shoe on createdAt
        </p>
        <div className="card-body">
          <p>Shoe Text</p>
        </div>
      </div>
    </div>
  );
};

export default SingleThought;
