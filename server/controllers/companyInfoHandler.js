if (!process.env.API_KEY) {
  require('../../.apikey');
}

const { API_KEY } = process.env;

const request = require('request');

module.exports.companyInfoHandler = (req, res) => {
    const { location } = req.params;
    const options = {
        url: `https://api.yelp.com/v3/businesses/search?location=${location}&limit=50`,
        headers: {
          'Authorization': `Bearer ${API_KEY}`
        }
    };

    function callback(error, response, body) {
        if (error) {
          res.send('Not a valid location');
        }
        if (!error && response.statusCode == 200) {
          const info = JSON.parse(body);
          const { businesses } = info;
          businesses.sort((a, b) => {
            return a.rating - b.rating
          });
          res.send(businesses);
        }
    };

    request(options, callback);
}