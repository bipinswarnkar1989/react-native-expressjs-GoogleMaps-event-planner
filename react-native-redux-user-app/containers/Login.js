import App from '../components/App';
import { connect } from 'react-redux';
import Login from '../components/Login';
import { NavigationActions } from 'react-navigation';

const mapStateToProps = (state) => {
    return {
         
    };
}

const mapDispathToProps = (dispatch) => {
    return {
        mappedNavigate: screen => dispatch(NavigationActions.navigate({ routeName: screen}))
    };
}

export default connect(
    mapStateToProps, mapDispathToProps
)(Login);