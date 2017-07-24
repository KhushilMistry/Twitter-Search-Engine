const INITIAL_STATE = {
  loading: true,
  query: {
    search : 'hello'
  }
};

export default function (state = INITIAL_STATE, action) {
  const appState = Object.assign({}, state)

  switch (action.type) {
    case 'TWEETS_LOADING':
      appState.loading = true;
      break;
    case 'LATEST_TWEETS_LOADED':
      appState.loading = false;
      appState.latest = action.data;
      //console.log(action.data);
      break;
    case 'SEARCH_TWEETS_LOADED':
      appState.loading = false;
      appState.tweets = action.data;
      appState.query = action.query;
      break;

    default:
      return state;
  }

  return appState;
};
