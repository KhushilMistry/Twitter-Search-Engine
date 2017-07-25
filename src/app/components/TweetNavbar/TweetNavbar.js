import React from 'react';
import {connect} from 'react-redux';
import {withRouter, Link} from 'react-router';

import styles from './TweetNavbar.scss';
import withStyles from '../../decorators/withStyles';
import {fetchLatestTweets, fetchSearchTweets} from '../../../../actions/tweetActions';


@withStyles(styles)
class TweeterNavbar extends React.Component {
  constructor(props) {
    super(props);
  }

  onEnter = (event, callback) => {
    if (event.charCode === 13) {
      callback({
        search: event.target.value
      });
      this.props.router.push('/tweets');
    }
  };

  render() {
    return (
      <div className="tweeter-navbar-container">
        <div className="row ">
          <div className="col-sm-2 col-sm-offset-1">
            <p className="tweeter-navbar-title">
              <Link
                to={{ pathname: '/' }}
                className="tweeter-link"
              >{'Twitterati'}</Link></p>
          </div>
          <div className="col-sm-2 padding-zero">
            <input type="text"
              className="tweeter-navbar-input"
              placeholder={this.props.query.search}
              onKeyPress={(event) => this.onEnter(event, this.props.fetchSearchTweets)}
            />
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
})(withRouter(TweeterNavbar));
