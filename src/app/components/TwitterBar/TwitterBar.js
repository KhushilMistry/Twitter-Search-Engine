import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';


import styles from './TwitterBar.scss';
import withStyles from '../../decorators/withStyles';
import {fetchLatestTweets, fetchSearchTweets} from '../../../../actions/tweetActions';

@withStyles(styles)
class TwitterBar extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {

    return (
      <div className="tweeter-query-container">
        <div className="row">
          <div className="col-sm-offset-1 col-sm-6">
            <p className="tweeter-query-heading"><span
              className="tweeter-secondary-heading">{'Searched Word '}</span>{this.props.query.search}</p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ tweetsState }) => {
  return {
    query: tweetsState.query
  };
};

export default connect(mapStateToProps, {
  fetchLatestTweets,
  fetchSearchTweets
})(withRouter(TwitterBar));