/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

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

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


// 1.加载图片
// export default class Bananas extends Component {
//     render () {
//         let pic = {
//             uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
//         };
//
//         return (
//             <Image
//                 source={pic}
//                 style={styles.imageStyles}
//             />
//         )
//     }
// }


// 2.闪烁效果
// export default class Blink extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {showText: true};
//
//         setInterval(() => {
//             this.setState(previousState => {
//                 return {showText: !previousState.showText};
//             });
//         }, 1000);
//     }
//
//     render() {
//         let display = this.state.showText ? this.props.text : ' ';
//         return (
//             <Text style={styles.titleStyles}>{display}</Text>
//         );
//     }
// }


//3 宽度和高度
// ()小括号里必须包含且只有一组标签
// export default class FixdDimensionsbaiscs extends Component {
//     render () {
//         return (
//             <View style={{height:200}}>
//                 <View style={{width: 50, height: 50, backgroundColor: 'powderblue', flex:2,}} />
//                 <View style={{width: 150, height: 150, backgroundColor: 'steelblue', flex:2}} />
//                 <View style={{width: 100, height: 100, backgroundColor:'blue', flex:2}}></View>
//             </View>
//         )
//
//     }
// }

// 4.布局
// export default class Layout extends Component {
//     render () {
//         return (
//             // 尝试把`justifyContent`
//             // `center` 居中
//             // 尝试把`flexDirection`改为`row`看看
//             <View style={{flex:1, alignItems:'center', flexDirection:'column', justifyContent:'space-between', }}>
//
//                 <View style={{width: 50, height: 50, backgroundColor: 'powderblue',}} />
//
//                 <View style={{width: 150, height: 150, backgroundColor: 'steelblue',}} />
//
//                 <View style={{width: 100, height: 100, backgroundColor:'blue',}} />
//
//             </View>
//         )
//     }
// }

// 5。输入框
// export default  class Input extends  Component {
//
//     constructor(proos) {
//         super(proos);
//         this.state = {text: ' '}
//     }
//
//     render () {
//
//         return (
//             <View style={{padding:40}}>
//                 <TextInput
//                     style={{height:40}}
//                     placeholder="hello"
//                     onChangeText={(text)=> this.setState({text})}
//                 />
//                 <Text style={{padding:10, fontSize: 42}}>
//                     {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
//                 </Text>
//                 <Text style={{padding:10, fontSize: 42}}>
//                     {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
//                 </Text>
//             </View>
//         );
//     }
// }

// 6.ScrollView
// export default  class ScrollViewClass extends  Component {
//     render() {
//         return(
//             <ScrollView>
//                 <Text style={{fontSize:20}}>Scroll me plz</Text>
//                 <Image source={require('./image/tree.png')} />
//                 <Image source={require('./image/mountain.png')} />
//                 <Text style={{fontSize:20}}>If you like</Text>
//                 <Image source={require('./image/mountain.png')} />
//                 <Image source={require('./image/tree.png')} />
//                 <Image source={require('./image/mountain.png')} />
//                 <Text style={{fontSize:20}}>Scrolling down</Text>
//                 <Image source={require('./image/mountain.png')} />
//                 <Image source={require('./image/tree.png')} />
//                 <Image source={require('./image/tree.png')} />
//                 <Text style={{fontSize:20}}>What's the best</Text>
//                 <Image source={require('./image/mountain.png')} />
//                 <Image source={require('./image/tree.png')} />
//                 <Image source={require('./image/tree.png')} />
//                 <Text style={{fontSize:20}}>Framework around?</Text>
//                 <Image source={require('./image/mountain.png')} />
//                 <Image source={require('./image/tree.png')} />
//                 <Image source={require('./image/tree.png')} />
//                 <Text style={{fontSize:20}}>React Native</Text>
//                 <Image source={require('./image/mountain.png')}/>
//
//                 {/*<ImageBackground source={require('./image/mountain.png')}>*/}
//                     {/*<Text>Inside</Text>*/}
//                 {/*</ImageBackground>*/}
//             </ScrollView>
//         );
//     }
// }


// 7.FlatList
// export default class FlatListClass extends Component {
//     render () {
//         return (
//
//             <View style={styles.container}>
//                 <FlatList
//                     data={[
//                         {key: 'Devin'},
//                         {key: 'hello'},
//                         {key: '你好'},
//                     ]}
//                     renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
//                 />
//
//             </View>
//
//         )
//     }
// }


// 8.SectionList
// export default class FlatListClass extends Component {
//     render () {
//         return (
//             <View style={styles.container}>
//                 <SectionList
//                     sections={[
//                         {title: 'D', data: ['Devin']},
//                         {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
//                     ]}
//                     renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
//                     renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
//                 />
//
//                 <SectionList
//
//                     sections={[
//                         {title:'section=0', data:['row=01', 'row=02', 'row=03']},
//                         {title:'section=1', data:['row=11', 'row=12', 'row=13']},
//                         {title:'section=3', data:['row=21', 'row=22', 'row=23']},
//                     ]}
//                     renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
//                     renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
//                 />
//
//             </View>
//         );
//     }
// }


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

});
