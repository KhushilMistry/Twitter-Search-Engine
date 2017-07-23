import axios from 'axios';

export default {
  fetchLatestTweets: function () {
    return axios({
      method: 'get',
      url: 'http://localhost:3000/v1/',
    });
  },
  fetchSearchTweets: function (query) {
    return axios({
      method: 'post',
      url: 'http://localhost:3000/v1/tweets',
      params: query
    });
  }
};
