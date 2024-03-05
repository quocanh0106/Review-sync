const axios = require('axios');
const fs = require('fs');

const url = 'https://judge.me/api/v1/reviews';

const paramsPersonalchic = {
  api_token: 'EgVfJqbCFK8Oig-jP1jA5ajV6uY',
  shop_domain: 'personal-chic.myshopify.com',
  response_type: 'code',
  scope: 'read_reviews',
  per_page: 10000
};

axios.get(url, { params: paramsPersonalchic }).then(response => {console.log(response.data)}).catch(error => {console.error(error);});

// const paramsCustomchic = {
//   api_token: 'C4_s8nx2_xExToSHD_SGAbjOpig',
//   shop_domain: 'customchic-uk-uk.myshopify.com',
//   response_type: 'code',
//   scope: 'read_reviews',
//   per_page: 10000
// };

// axios.get(url, { paramsCustomchic }).then(response => {console.log(response.data)}).catch(error => {console.error(error);});

// const paramsCadeauPlus = {
//   api_token: 'VzZLiThmcDPYYM8MOQwL9A_8QSk',
//   shop_domain: 'cadeau-plus-fr.myshopify.com',
//   response_type: 'code',
//   scope: 'read_reviews',
//   per_page: 10000
// };

// axios.get(url, { paramsCadeauPlus }).then(response => {console.log(response.data)}).catch(error => {console.error(error);});

// const paramsVivelamode = {
//   api_token: 'hogAe7CFwnIgRRcT7cYHitr2bV0',
//   shop_domain: 'vive-la-mode-fr.myshopify.com',
//   response_type: 'code',
//   scope: 'read_reviews',
//   per_page: 10000
// };

// axios.get(url, { paramsVivelamode }).then(response => {console.log(response.data)}).catch(error => {console.error(error);});

// const paramsGeschenkeMall = {
//   api_token: 'UmYWQyhjQAU_9reBQkYNB1gEHhU',
//   shop_domain: 'geschenke-mall.myshopify.com',
//   response_type: 'code',
//   scope: 'read_reviews',
//   per_page: 10000
// };

// axios.get(url, { paramsGeschenkeMall }).then(response => {console.log(response.data)}).catch(error => {console.error(error);});

// const paramsDietollemode = {
//   api_token: 'skxExPhJJ3epcz588N2KQ-EGjqQ',
//   shop_domain: 'dietollemode.myshopify.com',
//   response_type: 'code',
//   scope: 'read_reviews',
//   per_page: 10000
// };

// axios.get(url, { paramsDietollemode }).then(response => {console.log(response.data)}).catch(error => {console.error(error);});