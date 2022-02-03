import React from 'react';
import ShoeList from '../components/ShoeList';
import { useQuery } from '@apollo/client';
import { QUERY_SHOES } from '../utils/queries';


const Home = () => {
  const { loading, data } = useQuery(QUERY_SHOES);
  const shoes = data?.shoes || [];

  return (
    <main>
      <div className="flex-row justify-space-between">
        <div className="col-12 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ShoeList
              shoes={shoes}
              title="Some Feed for Shoe (s)..."
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;




