import React, { useState, useEffect } from 'react';
import Header from './Header';
import Main from './main';
import './dashboard.scss';
import axios from 'axios';

function Dashboard({ loggedInUser }) {
  const [zipcode, setZipcode] = useState(loggedInUser.zipcode);

  const zipcodeSetter = setZipcode;

  // const zipcode = loggedInUser.zipcode ? loggedInUser.zipcode : '11238';
  console.log('console log zipcode from MAIN.jsx : ', loggedInUser.zipcode);
  const [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    axios
      // .get(`http://localhost:3000/yelp/${loggedInUser.zipcode}`)
      .get(`http://localhost:3000/yelp/${zipcode}`)
      .then((response) => {
        const rawData = response.data.businesses;
        setFetchedData(rawData);
      })
      .catch((err) => console.log(err));
  }, [zipcode]);

  // user has a zipcode, and we send that zipcode up and get the restaurants right here
  // we send those restaurants down to Main

  // if someone changes that zipcode in Header, it will likewise be stored right here in dashboard, and..,
  // we can run the search again as needed.

  return (
    <div className='dashboard'>
      <Header loggedInUser={loggedInUser} zipcodeSetter={zipcodeSetter} />
      <Main fetchedData={fetchedData} loggedInUser={loggedInUser} />
    </div>
  );
}

export default Dashboard;
