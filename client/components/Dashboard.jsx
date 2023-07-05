import React from 'react';
import Header from './Header';
import Main from './main';
import './dashboard.scss';

function Dashboard({ loggedInUser }) {

  return (
    <div className='dashboard'>
      <Header loggedInUser={loggedInUser} />
      <Main loggedInUser={loggedInUser}/>
    </div>
  );
}

export default Dashboard;
