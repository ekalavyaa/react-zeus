import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userLogin } from './login.action';
import PropTypes from 'prop-types';

class LoginComponent extends Component {
  clickLogin(e) {
    this.props.login({ name: 'antony' });
  }

  componentDidMount() {
    if (this.props.user.isLoggedIn) {
      console.log(this.props.user);
    }
  }

  componentWillUpdate() {
    if (this.props.user.isLoggedIn) {
      console.log(this.props.user);
      this.props.history.push('/');
    }
  }

  render() {
    return (
      <div>
        <button onClick={() => this.clickLogin()}> Login </button>
      </div>
    );
  }
}

LoginComponent.propTypes = {
  login: PropTypes.func,
  user: PropTypes.object,
  history: PropTypes.object
};

const mapDispatchToProps = dispatch => ({
  login: (payload) => dispatch(userLogin(payload))
});

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);
