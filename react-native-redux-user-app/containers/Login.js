import { connect } from 'react-redux';
import Login from '../components/Login';
import { NavigationActions } from 'react-navigation';
import * as userActions from '../actions/userActions';

const mapStateToProps = (state) => {
    return {
        userState:state.authState,
        navState:state.navState
    };
}

const mapDispathToProps = (dispatch) => {
    return {
        mappedNavigate: screen => dispatch(NavigationActions.navigate({ routeName: screen})),
        mappedLogin: credentials => dispatch(userActions.Login(credentials)),
        mappedvalidateUser:(token,routeName) => dispatch(userActions.validateUser(token,routeName)),
    };
}

export default connect(
    mapStateToProps, mapDispathToProps
)(Login);