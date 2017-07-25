import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';


import styles from './TweetSearchPage.scss';
import withStyles from '../../decorators/withStyles';
import {fetchLatestTweets, fetchSearchTweets} from '../../../../actions/tweetActions';
import Loader from '../Loader';
import TweetTile from '../TweetTile';
import TwitterBar from '../TwitterBar';
import TweetNavbar from '../TweetNavbar';

@withStyles(styles)
class TweetSearchPage extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    console.log(this.props);
    return (
      this.props.loading ? <Loader /> :
        <div className="twitter-search-container">
          <TweetNavbar fetchSearchTweets={this.props.fetchSearchTweets}/>
          <TwitterBar />
          {this.props.tweets.statuses.map((data, index) =>
            <TweetTile key={index} data={data}/>)}
        </div>
    );
  }
}

const mapStateToProps = ({ tweetsState }) => {
  return {
    tweets: tweetsState.tweets,
    loading: tweetsState.loading,
    query: tweetsState.query
  };
};

export default connect(mapStateToProps, {
  fetchLatestTweets,
  fetchSearchTweets
})(withRouter(TweetSearchPage));