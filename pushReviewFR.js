const fs = require('fs');
const axios = require('axios');

const postReviews = async (reviews) => {
  for (const review of reviews) {
    try {
      const formattedReview = {
        shop_domain: 'cadeau-plus-fr.myshopify.com',
        platform: 'shopify',
        id: review.id,
        email: review.reviewer.email,
        name: review.reviewer.name,
        reviewer_name_format: '',
        rating: review.rating,
        title: review.title,
        body: review.body,
        ip_addr: review.ip_address
      };
      if (review.pictures.length > 0) {
        formattedReview.picture_urls = review.pictures.map(picture => {
          return Object.values(picture.urls).filter(url => !url.includes('original'));
        }).flat();
      }
      await axios.post('https://judge.me/api/v1/reviews', formattedReview, {
        headers: {
          'Authorization': 'VzZLiThmcDPYYM8MOQwL9A_8QSk'
        }
      });

      console.log(`Review ${review.id} posted successfully.`);
    } catch (error) {
      console.error(`Error posting review ${review.id}:`, error.message);
    }
  }
};

fs.readFile('reviewsFR.json', 'utf8', async (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  try {
    const reviews = JSON.parse(data);
    await postReviews(reviews.reviews);
  } catch (error) {
    console.error('Error parsing JSON:', error);
  }
});
