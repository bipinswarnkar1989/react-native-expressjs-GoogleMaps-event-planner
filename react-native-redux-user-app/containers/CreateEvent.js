import React, { Component } from 'react';
import { connect } from 'react-redux';
import CreateEvent from '../components/CreateEvent';

const  mapStateToProps = (state) => {
    return {

    };
}

const mapDisPatchToProps  = (dispatch) => {
    return {

    }
}

export default connect(
    mapStateToProps, mapDisPatchToProps
)(CreateEvent);