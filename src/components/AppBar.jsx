import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import Constants from 'expo-constants';
import Text from './Text'
import theme from '../theme.js'

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        // ...
        // display: 'flex',
        backgroundColor: theme.colors.heading,
        alignSelf: 'stretch',
        height: 90,
        padding: 20
    },
    // ...
});

const AppBar = () => {
    const onPressFunction = () => {
        console.log('pressed');
    }

    return (
        <View style={styles.container}>
            <Text color="white" fontWeight="bold" fontSize="subheading">
                Repositories
            </Text>
        </View>
    )
};

export default AppBar;