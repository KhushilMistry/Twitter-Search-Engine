import React, {PropTypes, Component} from 'react';

import styles from './TweetTag.scss';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
class TweetTag extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="tweetTagContainer">
        <a href={this.props.data.url} target="_blank">{this.props.data.name}</a>
      </div>
    );
  }
}

export default TweetTag;
