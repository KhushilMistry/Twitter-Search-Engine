import React, { PropTypes } from 'react';

class Dashboard extends React.Component {

  render(){
    return (
      <div>
        <span>{'You should get access to this page only after authentication.'}</span>
      </div>
    );
  }
}

export default Dashboard;
