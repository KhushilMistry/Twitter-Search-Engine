import tweetUtils from '../src/utils/tweetUtils';

export default {
  fetchLatestTweets: () => {
    return (dispatch) => {
      dispatch({ type: 'TWEETS_LOADING' })
      tweetUtils.fetchLatestTweets()
        .then(({ data }) => {
          dispatch({ type: 'LATEST_TWEETS_LOADED', data: data});
        });
    };
  },
  fetchSearchTweets: (query) => {
    return (dispatch) => {
      dispatch({ type: 'TWEETS_LOADING' })
      tweetUtils.fetchSearchTweets(query)
        .then(({ data }) => {
          dispatch({ type: 'SEARCH_TWEETS_LOADED', data: data , query : query});
        });
    };
  }
};
