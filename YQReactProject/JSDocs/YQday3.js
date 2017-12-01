/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

// 导航栏跳转

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    StatusBar,
    Navigator,
    Image,
    Button,
} from 'react-native';

import {
    StackNavigator,
} from 'react-navigation'

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text>Hello, Navigation!</Text>
                <Button
                    onPress={() => navigate('Chat')}
                    title={"Chat With Lucky"}
                />

            </View>
        )

    }
}

class ChatScreen extends React.Component {
    static navigationOptions = {
        title: 'Chat with Lucy',
    };
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View>
                <Text>Chat with Lucy</Text>
                <Button
                    onPress={() => navigate('Third')}
                    title={"这是一个按钮"}
                />
            </View>
        );
    }
}

class ThirdScreen extends React.Component {
    static navigationOptions = {
        title : 'third',
    };
    render () {
        return (
            <View>
                <Text>hello third </Text>
            </View>
        );
    }
}

const SimpleApp = StackNavigator({
    Home: { screen: HomeScreen },
    Chat: { screen: ChatScreen },
    Third:{ screen: ThirdScreen},
});

export default class App extends Component {
    render() {
        return <SimpleApp />;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
