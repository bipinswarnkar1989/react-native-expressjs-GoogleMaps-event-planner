import React, { Component } from 'react';
import { connect } from 'react-redux';
import SetEventLocation from '../components/SetEventLocation';
import * as eventActions from '../actions/eventActions';

const  mapStateToProps = (state) => {
    return {
        userState:state.authState,
        navState:state.navState,
        eventState:state.eventState
    };
}

const mapDisPatchToProps  = (dispatch) => {
    return {
        mappedNavigate:screen => dispatch(navActions.navigate(screen)),
        mappedaddEvent:event => dispatch(eventActions.addEvent(event)),
        mappedsetEventLocationOnMap:data => dispatch(eventActions.setEventLocationOnMap(data)),
        mappedsetPlacesPredictions:data => dispatch(eventActions.setPlacesPredictions(data)),
    }
}

export default connect(
    mapStateToProps, mapDisPatchToProps
)(SetEventLocation);