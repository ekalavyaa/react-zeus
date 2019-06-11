import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class UserComponent extends Component {
  componentDidMount() {
    if (this.props.user.isLoggedIn) {
      console.log(this.props.user);
    }
  }
  componentWillUpdate() {
    if (this.props.user.isLoggedIn) {
      console.log(this.props.user);
    }
  }
  render() {
    return (
      <div>
        user { this.props.user.isLoggedIn ? 'true' : 'false' }
      </div>
    );
  }
}

UserComponent.propTypes = {
  user: PropTypes.object
};

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  return {
    user: state.user,
    ...ownProps
  };
};

export default connect(mapStateToProps, null)(UserComponent);
