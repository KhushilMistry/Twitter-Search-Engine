import App from './app/app';
import HomePage from './app/components/HomePage';
import TweetSearchPage from './app/components/TweetSearchPage';
import TweetTile from './app/components/TweetTile';
import TweetDisplayPage from './app/components/TweetDisplayPage';


const routes = {
  // base component (wrapper for the whole application).
  component: App,
  childRoutes: [
    {
      path: '/',
      getComponent: (location, callback) => {
        callback(null, HomePage);
      }
    },
    {
      path: '/tweets',
      getComponent: (location, callback) => {
        callback(null, TweetSearchPage);
      }
    },
    {
      path: '/tweets/:_id',
      getComponent: (location, callback) => {
        callback(null, TweetDisplayPage);
      }
    }

  ]
};

export default routes;
