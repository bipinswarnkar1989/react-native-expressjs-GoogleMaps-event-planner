import React, { Component } from 'react';
import { connect } from 'react-redux';
import Home from '../components/Home';
import * as navActions from '../actions/navActions';

function mapStateToProps(state) {
    return {

    };
}

const mapDispatchToProps = (dispatch) => {
    return {
      mappedNavigate: screen => dispatch(navActions.navigate(screen)),
    }
}


export default connect(
    mapStateToProps, mapDispatchToProps
)(Home);