import React from 'react';
import {Link} from 'react-router';

import styles from './TweetTIle.scss';
import withStyles from '../../decorators/withStyles';


@withStyles(styles)
class TweetTile extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <div className="row">
        <div className="col-lg-6 col-lg-offset-3 col-sm-10 col-sm-offset-1 tweet-tile-container">
          <div className="row">
            <div className="col-lg-1 col-sm-1">
              <img className="twitter-user-image" src={this.props.data.user.profile_image_url_https}/>
            </div>
            <div className="col-lg-10 col-sm-10">
              <p className="twitter-user-name">{this.props.data.user.url ? <a href={this.props.data.user.url}
                target="_blank">{this.props.data.user.name}</a> : <span>{this.props.data.user.name}</span>}</p>
              <p className="twitter-tag-name">{'@'}{this.props.data.user.screen_name}</p>
            </div>
            <div className="col-lg-1 col-sm-1">
              <Link to={{
                pathname: `/tweets/${this.props.data.id}`
              }}><span className="glyphicon glyphicon-chevron-right twitter-next-icon"></span></Link>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <p>{this.props.data.text}</p>
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

export default TweetTile;