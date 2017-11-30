/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

// 闪烁效果

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    StatusBar,
    Navigator,
    Image,
    TextInput,
    ScrollView,
    ImageBackground,
    FlatList,
    SectionList,
} from 'react-native';

import App from './public/LotsOfStyles'

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';
var MOVIES_URL = 'https://facebook.github.io/react-native/movies.json';

export default class FlatListClass extends Component {


    constructor(props) {
        super(props);
        this.state = {
            title:null,
            movies: [],
            loaded: false,
        };
        this.fetchData = this.fetchData.bind(this);
    }

    fetchData() {
        fetch(MOVIES_URL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                // firstParam: 'yourValue',
                // secondParam: 'yourOtherValue',
            }),
        })
    }


    componentDidMount() {
        // this.fetchData();

        this.getMoviesFromApiAsync();
    }


    getMoviesFromApiAsync() {
        fetch(MOVIES_URL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                firstParam: 'yourValue',
                secondParam: 'yourOtherValue',
            }),
        }).then((response) => {
            response.json();
            console.log('response====', response.json());
            console.log('responseJson====', response.json());
        }).then((responseJson) => {
            console.log('hello====', responseJson);
                this.setState({
                    title: this.state.title,
                    movies:this.state.movies,
                    load:true,
                })
            })
            .catch((error) => {
            console.error(error);
            })
    }

    // 加载动画提示
    renderLoadingView() {
        return (
            <View style={styles.loadContainer}>
                <Text>
                    Loading movies...
                </Text>
            </View>
        );
    }

    render () {

        if (!this.state.loaded) {
            return this.renderLoadingView();
        }
        return (

            <View style={styles.container}>
                <SectionList
                    sections={[
                        {title:'section=0', data:['row=01', 'row=02', 'row=03']},
                        {title:'section=1', data:['row=11', 'row=12', 'row=13']},
                        {title:'section=3', data:['row=21', 'row=22', 'row=23']},
                    ]}
                    renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
                    renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}

                />
            </View>
        )
    }

    // render() {
    //     return(
    //         <View style={styles.containerStyle}>
    //             <TextInput
    //                 style={styles.textInputStyle}
    //                 onChangeText={(text) => this.handleTextChange(text)} >
    //             </TextInput>
    //             <TouchableHighlight
    //                 style={styles.confirmStyle}
    //                 onPress={() => this.fetchWeatherData(this.state.address)} >
    //                 <Text >确认</Text>
    //             </TouchableHighlight>
    //             <Text>{this.state.weather}</Text>
    //         </View>
    //     );
    // }

}

const styles = StyleSheet.create ({
    imageStyles : {
        width:100,
        height:100,
    },
    titleStyles : {
        backgroundColor : '#123456',

    },
    container: {
        flex:1,
        paddingTop:22,
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
    sectionHeader:{
        paddingTop:2,
        paddingLeft:10,
        paddingRight:10,
        paddingBottom:2,
        fontSize:14,
        fontWeight:'bold',
        backgroundColor:'red',
    },
    loadContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});
