import React from 'react';

const ShoeList = ({ shoes, title }) => {
  if (!shoes.length) {
    return <h3>No Shoes Yet</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {shoes &&
        shoes.map(shoe => (
          <div key={shoe._id} className="card mb-3">
            <p className="card-header">
              {shoe.username}
              thought on {shoe.createdAt}
            </p>
            <div className="card-body">
              <p>{shoe.shoeText}</p>
              <p className="mb-0">
                Reactions: {shoe.reactionCount} || Click to{' '}
                {shoe.reactionCount ? 'see' : 'start'} the discussion!
              </p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ShoeList;