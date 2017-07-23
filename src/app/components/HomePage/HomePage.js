import React from 'react';
import {Grid, Row, Col, Navbar} from 'react-bootstrap';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';

import styles from './HomePage.scss';
import withStyles from '../../decorators/withStyles';
import TweetTag from '../TweetTag';

var data = [{
  "name": "#JLSarahOnGGV",
  "url": "http://twitter.com/search?q=%23JLSarahOnGGV",
  "promoted_content": null,
  "query": "%23JLSarahOnGGV",
  "tweet_volume": 28445
},
  {
    "name": "#VoleiNaGlobo",
    "url": "http://twitter.com/search?q=%23VoleiNaGlobo",
    "promoted_content": null,
    "query": "%23VoleiNaGlobo",
    "tweet_volume": 12693
  },
  {
    "name": "#7YearOfOneDirection",
    "url": "http://twitter.com/search?q=%237YearOfOneDirection",
    "promoted_content": null,
    "query": "%237YearOfOneDirection",
    "tweet_volume": 135222
  },
  {
    "name": "#EnBuenChileno",
    "url": "http://twitter.com/search?q=%23EnBuenChileno",
    "promoted_content": null,
    "query": "%23EnBuenChileno",
    "tweet_volume": null
  },
  {
    "name": "#WWC17Final",
    "url": "http://twitter.com/search?q=%23WWC17Final",
    "promoted_content": null,
    "query": "%23WWC17Final",
    "tweet_volume": 104712
  },
  {
    "name": "Bruno Henrique",
    "url": "http://twitter.com/search?q=%22Bruno+Henrique%22",
    "promoted_content": null,
    "query": "%22Bruno+Henrique%22",
    "tweet_volume": null
  },
  {
    "name": "Lucas Lima",
    "url": "http://twitter.com/search?q=%22Lucas+Lima%22",
    "promoted_content": null,
    "query": "%22Lucas+Lima%22",
    "tweet_volume": null
  },
  {
    "name": "Rosa Maria",
    "url": "http://twitter.com/search?q=%22Rosa+Maria%22",
    "promoted_content": null,
    "query": "%22Rosa+Maria%22",
    "tweet_volume": null
  },
  {
    "name": "仙台市長選",
    "url": "http://twitter.com/search?q=%E4%BB%99%E5%8F%B0%E5%B8%82%E9%95%B7%E9%81%B8",
    "promoted_content": null,
    "query": "%E4%BB%99%E5%8F%B0%E5%B8%82%E9%95%B7%E9%81%B8",
    "tweet_volume": null
  },
  {
    "name": "Adenizia",
    "url": "http://twitter.com/search?q=Adenizia",
    "promoted_content": null,
    "query": "Adenizia",
    "tweet_volume": null
  }
];

@withStyles(styles)
class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
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
          />
          <div className="trendingContainer col-sm-offset-1 col-sm-10 col-md-offset-2 col-md-8">
            <h1>{'#Trending on Twitter'}</h1>
            <div className="trendingTagContainer">
              {data.map((data) => <TweetTag data={data}/>)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
