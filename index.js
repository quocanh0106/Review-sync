const axios = require('axios');

const url = 'https://judge.me/api/v1/reviews';
const params = {
  api_token: 'LKHuXY2bRyid1-eniSKib8rzvIM',
  shop_domain: 'personal-house-us.myshopify.com',
  response_type: 'code',
  scope: 'read_reviews',
  per_page: 10000
};

axios.get(url, { params })
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });
