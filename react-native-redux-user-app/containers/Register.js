import Register from '../components/Register';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

function mapStateToProps(state) {
    return {

    };
}

const mapDispatchToProps = (dispatch) => {
    return {
       mappedNavigate: screen => dispatch(NavigationActions.navigate({ routeName:screen })),
    }
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(Register);