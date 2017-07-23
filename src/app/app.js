import React from 'react';
import {connect} from 'react-redux';

import withStyles from './decorators/withStyles';
import styles from './app.scss';

import Bootstrap from '../../node_modules/bootstrap/dist/css/bootstrap.css';

@withStyles(styles)
class App extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className="app_container">
        {React.cloneElement(this.props.children)}
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

export default App;
