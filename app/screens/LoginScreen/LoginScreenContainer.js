import React, { Component } from 'react';
import LoginScreen from './LoginScreen';
import * as loginActions from '@actions/loginActions';
import { connect } from 'react-redux';
class LoginScreenContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <LoginScreen {...this.props} />;
    }
}

function mapStateToProps(state) {
    return {};
}
function mapDispatchToProps(dispatch) {
    return {
        onLogin: () => dispatch(loginActions.requestLogin())
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(
    LoginScreenContainer
);
