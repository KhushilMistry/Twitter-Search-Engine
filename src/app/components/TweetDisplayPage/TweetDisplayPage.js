import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';


import styles from './TweetDisplayPage.scss';
import withStyles from '../../decorators/withStyles';
import {fetchLatestTweets, fetchSearchTweets} from '../../../../actions/tweetActions';
import Loader from '../Loader';

@withStyles(styles)
class TweetDisplayPage extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {

    const id = this.props.params._id;

    console.log(id);

    const data = this.props.tweets.statuses.filter(function (data) {
      return id == data.id
    });

    console.log(data[0]);

    return (
      this.props.loading ? <Loader /> :
        <div className="twitter-Display-container">
          <div className="row">
            <div className="col-lg-6 col-lg-offset-3 col-sm-10 col-sm-offset-1 tweet-tile-container">
              <div className="row">
                <div className="col-lg-1 col-sm-1">
                  <img className="twitter-user-image" src={data[0].user.profile_image_url_https}/>
                </div>
                <div className="col-lg-10 col-sm-10">
                  <p className="twitter-user-name">{data[0].user.url ? <a href={data[0].user.url}
                    target="_blank">{data[0].user.name}</a> : <span>{data[0].user.name}</span>}</p>
                  <p className="twitter-tag-name">{'@'}{data[0].user.screen_name}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <p>{data[0].text}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  {data[0].entities.media ? <img src={data[0].entities.media[0].media_url_https} className="twitter-tile-image"/> : null}
                </div>
              </div>
              <div className="row twitter-icon-container">
                <div className="col-sm-2">
                  <p>{data[0].retweeted_status ? data[0].retweeted_status.favorite_count : 0}</p>
                </div>
                <div className="col-sm-2">
                  <p>{data[0].retweeted_status ? data[0].retweeted_status.retweet_count : 0}</p>
                </div>
                <div className="col-sm-2">
                  <p>{data[0].entities.media ?
                    <a href={data[0].entities.media[0].url} target="_blank">Open</a> : null}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

const mapStateToProps = ({ tweetsState }) => {
  return {
    tweets: tweetsState.tweets,
    loading: tweetsState.loading
  };
};

export default connect(mapStateToProps, {
  fetchLatestTweets,
  fetchSearchTweets
})(withRouter(TweetDisplayPage));