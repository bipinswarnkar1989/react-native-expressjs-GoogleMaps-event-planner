import Login from '../components/Login';
import { connect } from 'react-redux';
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
)(App);