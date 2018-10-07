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
        mappedsetPlacesPredictions:input => dispatch(eventActions.setPlacesPredictions(input)),
        mappedrequestPlaceDetails:placeid => dispatch(eventActions.requestPlaceDetails(placeid)),
    }
}

export default connect(
    mapStateToProps, mapDisPatchToProps
)(SetEventLocation);