const apiKey = 'azoHYRNYPZnEOnhBybFMYvu4_aACyhDvsfhWc6bqAq0odQfxz09iQZrmNJaI7JOH0XKxPB208V88BLb7uEjtBzr0r7o9f88U_AiU2vVo8Vjro5FbSgM9f5xOXuJmYHYx';

const Yelp = {
  search(term, location, sortBy) {
    return fetch(`https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    }).then(response => {
      return response.json();
    }).then(jsonResponse => {
      if (jsonResponse.businesses) {
        return jsonResponse.businesses.map(business => ({
          id: business.id,
          imageSrc: business.image_url,
          name: business.name,
          address: business.location.address1,
          city: business.location.city,
          state: business.location.state,
          zipCode: business.location.zip_code,
          category: business.categories[0].title,
          rating: business.rating,
          reviewCount: business.review_count
        }));
      }
    });
  }
};

export default Yelp;
