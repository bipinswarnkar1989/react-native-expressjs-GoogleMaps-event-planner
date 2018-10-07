import { connect } from 'react-redux';
import Home from '../components/Home';
import * as navActions from '../actions/navActions';
import * as userActions from '../actions/userActions';
import * as eventActions from '../actions/eventActions';

function mapStateToProps(state) {
    return {
       userState:state.authState,
       navState:state.navState,
       eventState:state.eventState
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
      mappedNavigate:screen => dispatch(navActions.navigate(screen)),
      mappedvalidateUser:(token,routeName) => dispatch(userActions.validateUser(token,routeName)),
      mappedLogOut: () => dispatch(userActions.logOut()),
      mappedgetEvents: (user,page,limit) => dispatch(eventActions.getEvents(user,page,limit)),
    }
}


export default connect(
    mapStateToProps, mapDispatchToProps
)(Home);