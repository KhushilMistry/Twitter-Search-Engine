import App from './app/app';
import HomePage from './app/components/HomePage';
import Loader from './app/components/Loader';

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
      path: '/tweets/:id',
      getComponent: (location, callback) => {
        callback(null, TweetDisplayPage);
      }
    }

  ]
};

export default routes;
