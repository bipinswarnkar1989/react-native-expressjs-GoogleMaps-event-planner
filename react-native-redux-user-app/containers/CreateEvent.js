import { connect } from 'react-redux';
import CreateEvent from '../components/CreateEvent';
import * as eventActions from '../actions/eventActions';
import * as navActions from '../actions/navActions';

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
    }
}

export default connect(
    mapStateToProps, mapDisPatchToProps
)(CreateEvent);