import React from 'react';
import { StyleSheet, Text, View, Image, Platform, StatusBar } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import {RFValue} from 'react-native-responsive-fontsize';

import Postcard from './Postcard';

var posts = require('./temp-post.json')

export default class Feed extends React.Component{
    
    renderItem = ({item: post}) => {
        return <Postcard post = {post} />
    }

    keyExtractor = (item, index) => index.toString();
    
    render(){
        return(
            <View style = {styles.container}>

                <SafeAreaView style = {styles.droidSafeArea} />

                <View syle = {styles.appTitle}>

                    <View style = {styles.appIcon}>

                        <Image
                            source = {require('../assets/logo.png')}
                            style = {styles.iconImage}
                        />

                    </View>

                    <View style = {styles.appTitleTextContainer}>

                        <Text style = {styles.appTitleText}>Spectagram</Text>

                    </View>

                </View>

                <View style = {styles.cardContaier}>

                    <FlatList
                        keyExtractor = {this.keyExtractor}
                        data = {posts}
                        renderItem = {this.renderItem}
                    />

                </View>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'black'
    },

    droidSafeArea:{
        marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(35)
    },

    appTitle:{
        flex: 0.07,
        flexDirection: 'row'
    },

    appIcon:{
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'center'
    },

    iconImage:{
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    },

    appTitleTextContainer:{
        flex: 0.8,
        justifyContent: 'center'
    },

    appTitleText:{
        color: 'white',
        fontsize: RFValue(28)
    },

    cardContaier:{
        flex:0.85
    }
})