import React from 'react';


import styles from './Loader.scss';
import withStyles from '../../decorators/withStyles';


@withStyles(styles)
class Loader extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div>
        <div className="loader"></div>
      </div>
    );
  }
}

export default Loader;
