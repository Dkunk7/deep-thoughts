import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_THOUGHTS } from '../utils/queries';
import ThoughtList from '../components/ThoughtList';

const Home = () => {
  // use useQuery hook to make query request
  const { loading, data } = useQuery(QUERY_THOUGHTS);

  const thoughts = data?.thoughts || []; // this says, If data exists, store data.thoughts in thoughts, otherwise thoughts is an empty array. I think it returns an empty array until there is data to store to the variable
  console.log(thoughts);

  return (
    <main>
      <div className='flex-row justify-space-between'>
        <div className='col-12 mb-3'>
          {loading ? (
            <div>Loading...</div> /* if it's loading, display a div that says Loading... */
          ) : (
            <ThoughtList thoughts = {thoughts} title = "Some Feed for Thought(s)..." />
          )}  
        </div>
      </div>
    </main>
  );
};

export default Home;
