const axios = require('axios');
const yelpController = {};

const fetchInfo = {};

const BEARER_TOKEN2 =
  'CuFmwamx8ZGyAJq4-jmFkFSEo-yld8-BzkNXX8qLVHn5NTv9LUrq2lB13q5LhS9hKBdDGrB2Xcogn6e1PPR1s51YazYpOE9re3-PrcKv6us-stSyvzNhW1tVLWufZHYx';

const BEARER_TOKEN3 =
  '3fL-Z1zOIZnAWPYAVo462Sbf4R9ODxQ0CQXTW2KXAFRQeLuHyX38jrBGDIeplBuy04evgJvqVMj3zUhR1mFN2WzaxnyVRwvwboqceelX108pa3gL2jFOoyTXnj-fZHYx';

const BEARER_TOKEN4 =
  'NQtgqFXiB4H1t9aKk24hEWeKskMM19YNJqXHuIBWiuk7FFPKKVU7r2eyuezHs1_jJUZvqY0HZ5ShL7_aGp_Ntya_4o7GUDBUj8YeZXX5ORPb2ZjthIPwlBKJNCanZHYx';

// dummy zipCode
// const location = 20912;
// const location = 11238;

// config file for fetching from yelp
// use the limit to adjust the number of restaurants displayed
// you can also change the term to another one to get any business
// fetchInfo.config = {
//   headers: {
//     Authorization: `Bearer ${BEARER_TOKEN3}`,
//     Origin: 'localhost',
//     withCredentials: true,
//   },
//   params: {
//     term: 'restaurants',
//     location: location,
//     radius: 1609,

//     limit: 20,
//   },
// };

yelpController.getData = (req, res, next) => {
  const { zip } = req.params;

  fetchInfo.config = {
    headers: {
      Authorization: `Bearer ${BEARER_TOKEN4}`,
      Origin: 'localhost',
      withCredentials: true,
    },
    params: {
      term: 'restaurants',
      location: zip,
      radius: 1609,
      limit: 20,
    },
  };

  axios
    .get('https://api.yelp.com/v3/businesses/search', fetchInfo.config)
    .then((response) => {
      // console.log(response);
      res.locals.rawData = response.data;
      return next();
    })
    .catch((error) => {
      //   console.log(err);
      return next({
        log: `Error in yelpController.getData: ERROR: ${error}`,
        status: error.status || 400,
        message: { error: 'Error in yelpController.getData. See log. ' },
      });
    });
};

yelpController.searchData = (req, res, next) => {
  console.log('entered search controller');
  console.log(req.body);
  return next();
};

module.exports = yelpController;
