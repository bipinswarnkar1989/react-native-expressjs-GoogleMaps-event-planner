import React, { Component } from 'react';
import { connect } from 'react-redux';
import Home from '../components/Home';
import * as navActions from '../actions/navActions';
import * as userActions from '../actions/userActions';

function mapStateToProps(state) {
    return {
       userState:state.authState,
       navState:state.navState
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
      mappedNavigate:screen => dispatch(navActions.navigate(screen)),
      mappedvalidateUser:(token,routeName) => dispatch(userActions.validateUser(token,routeName)),
    }
}


export default connect(
    mapStateToProps, mapDispatchToProps
)(Home);