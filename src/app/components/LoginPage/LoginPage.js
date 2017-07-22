import React from 'react';
import LoginForm from './LoginForm';
import Auth from '../../../middlewares/Auth';       //todo: make it such that we can use absolute path
import axios from 'axios';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    const storedMessage = localStorage.getItem('successMessage');
    let successMessage = '';

    if (storedMessage) {
      successMessage = storedMessage;
      localStorage.removeItem('successMessage');
    }

    // set the initial component state
    this.state = {
      errors: {},
      successMessage,
      user: {
        email: '',
        password: ''
      }
    };

    this.processForm = this.processForm.bind(this);
    this.changeUser = this.changeUser.bind(this);
  }

  processForm(event) {
    event.preventDefault();

    // create a string for an HTTP body message
    const email = this.state.user.email;
    const password = encodeURIComponent(this.state.user.password);
    const router = this.props.router;

    axios.post(`http://localhost:3000/v1/signin`, {
      email: email,
      password: password
    }).then((res) => {
      Auth.authenticateUser(res.data.token);
      router.replace('/');
      console.log(res);
    }).catch((err) => {
      console.log(err);
    });
  }

  changeUser(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({
      user
    });
  }

  render() {
    return (
      <LoginForm
        onSubmit={this.processForm}
        onChange={this.changeUser}
        errors={this.state.errors}
        successMessage={this.state.successMessage}
        user={this.state.user}
      />
    );
  }

}

export default LoginPage;
