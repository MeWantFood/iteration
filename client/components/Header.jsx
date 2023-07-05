import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './header.scss';
import axios from 'axios';

const Header = ({ loggedInUser, zipcodeSetter }) => {
  const [searchParams, setSearchParams] = useState({
    term: '',
    location: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('clicked');
    console.log(searchParams.location);
    zipcodeSetter(searchParams.location);

    // axios
    //   .post('/yelp/search', searchParams)
    //   .then((response) => {
    //     console.log('data sent to server');
    //     console.log(response.data);
    //   })
    //   .catch((error) => console.log(error));
  };

  return (
    <>
      <main className='header'>
        {/* left corner logo  */}
        <h3 className='logo-form'>MeWantFood</h3>
        <form onSubmit={handleSubmit} className='nav-btn-container'>
          <input
            name='preference'
            type='text'
            placeholder='How Hungry You Wanna Be?'
            className='input-header'
            value={searchParams.term}
            onChange={(e) =>
              setSearchParams({ ...searchParams, term: e.target.value })
            }
          />
          <input
            name='preference'
            type='text'
            placeholder='Enter Location'
            className='input-header'
            value={searchParams.location}
            onChange={(e) =>
              setSearchParams({ ...searchParams, location: e.target.value })
            }
          />
          <button className='btn search-btn'>Search</button>
        </form>
        <div className='account-container'>
          <div className='profile-pic-plain-color'></div>
          <div className='account-name-container'>
            <p className='account-name'>{loggedInUser.first_name}</p>
            <p className='account-name'>{loggedInUser.last_name}</p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Header;
