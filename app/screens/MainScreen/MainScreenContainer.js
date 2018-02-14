import React, { Component } from 'react';
import MainScreen from './MainScreen';
import * as loginActions from '@actions/loginActions';
import { connect } from 'react-redux';

class LoginScreenContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <MainScreen {...this.props} />;
    }
}

function mapStateToProps(state) {
    return {
        accessToken: state.loginReducer.accessToken,
        idToken: state.loginReducer.idToken,
        expiresIn: state.loginReducer.expiresIn,
        tokenType: state.loginReducer.tokenType
    };
}
function mapDispatchToProps(dispatch) {
    return {};
}
export default connect(mapStateToProps, mapDispatchToProps)(
    LoginScreenContainer
);
