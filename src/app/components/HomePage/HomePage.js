import React from 'react';
import {Navbar} from 'react-bootstrap';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';


import styles from './HomePage.scss';
import withStyles from '../../decorators/withStyles';
import TweetTag from '../TweetTag';
import {fetchLatestTweets, fetchSearchTweets} from '../../../../actions/tweetActions';
import Loader from '../Loader';


@withStyles(styles)
class HomePage extends React.Component {
  constructor(props) {
    super(props);
  };

  componentDidMount() {
    this.props.fetchLatestTweets();
  };

  onEnter = (event, callback) => {
    if (event.charCode === 13) {
      callback({
        search: event.target.value
      });
      this.props.router.push('/tweets');
    }
  };


  render() {
    console.log(this.props);
    return (
      this.props.loading ? <Loader /> : <div className="container">
        <Navbar className="navbar_container">
          <Navbar.Header>
            <Navbar.Brand className="navbar_header">
              <a href="#">{'Twitterati'}</a>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
        <div className="searchInputContainer container row">
          <input
            type="text"
            placeholder='Search Tweets...'
            className="searchInput col-sm-offset-1 col-sm-10 col-md-offset-2 col-md-8"
            onKeyPress={(event) => this.onEnter(event, this.props.fetchSearchTweets)}
          />
          <div className="trendingContainer col-sm-offset-1 col-sm-10 col-md-offset-2 col-md-8">
            <h1>{'#Trending on Twitter'}</h1>
            <div className="trendingTagContainer">
              {this.props.latest[0].trends.slice(0, 10).map((data, index) =>
                <TweetTag key={index} data={data}/>)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ tweetsState }) => {
  return {
    latest: tweetsState.latest,
    loading: tweetsState.loading
  };
};

export default connect(mapStateToProps, {
  fetchLatestTweets,
  fetchSearchTweets
})(withRouter(HomePage));