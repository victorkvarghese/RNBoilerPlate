import React, { Component } from 'react';
import { View, Button, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

class MainScreen extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>MAIN SCREEN</Text>
            </View>
        );
    }
}

export default MainScreen;

MainScreen.propTypes = {};
