import Register from '../components/Register';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import * as userActions from '../actions/userActions';

function mapStateToProps(state) {
    return {
        userState:state.authState,
        navState:state.navState
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
       mappedNavigate:screen => dispatch(NavigationActions.navigate({ routeName:screen })),
       mappedRegister:credentials => dispatch(userActions.Register(credentials)),
    }
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(Register);