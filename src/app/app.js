import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';

import withStyles from './decorators/withStyles';
import styles from './app.scss';
import {fetchLatestTweets, fetchSearchTweets} from '../../actions/tweetActions';

import Bootstrap from '../../node_modules/bootstrap/dist/css/bootstrap.css';

@withStyles(styles)
class App extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className="app_container">
        {React.cloneElement(this.props.children, {
          fetchLatestTweets: this.fetchLatestTweets,
          fetchSearchTweets: this.fetchSearchTweets
        })}
      </div>
    );
  }
}


// const mapStateToProps = ({ coursesState }) => {
//   return {
//     courses: coursesState.courses,
//     loading: coursesState.loading,
//     query : coursesState.query
//   };
// };

const mapStateToProps = ({ tweetsState }) => {
  return {
    tweets: tweetsState.tweets,
    loading: tweetsState.loading
  };
};

export default connect(mapStateToProps, {
  fetchLatestTweets,
  fetchSearchTweets
})(withRouter(App));

