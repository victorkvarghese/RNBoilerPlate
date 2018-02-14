import React, { Component } from 'react';
import { View, Button } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

class LoginScreen extends Component {
    constructor(props) {
        super(props);
    }

    onPress = () => {
        this.props.onLogin();
    };

    render() {
        return (
            <View style={styles.container}>
                <Button
                    onPress={this.onPress}
                    title="Login with Auth0"
                    color="grey"
                />
            </View>
        );
    }
}

export default LoginScreen;

LoginScreen.propTypes = {
    onLogin: PropTypes.func
};
