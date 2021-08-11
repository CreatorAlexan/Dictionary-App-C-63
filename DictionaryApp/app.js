import React, {Component} from 'react';
import {StyleSheet,View,Text,TextInput,TouchableOpacity} from 'react-native';
import { Header } from 'react-native-elements';
import HomeScreen from './screens/HomeScreen';

export default class App extends Component{
    
    render(){
        return(
            <View>
                <HomeScreen/>
            </View>
        )
    }
}