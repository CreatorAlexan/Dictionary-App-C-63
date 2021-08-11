import React, {Component} from 'react';
import {StyleSheet,View,Text,TextInput,TouchableOpacity} from 'react-native';
import { Header } from 'react-native-elements';

export default class HomeScreen extends Component{
    constructor(){
        super();
        this.state={
            word:''
        }
    }
    
    render(){
        return(
            <View>
                <Header centerComponent={{
                    text: 'Dictionary',
                    style:{color:'white',fontSize:20}
                }}
                    backgroundColor={'black'}/>
                <TextInput
                placeholder="Type here"
                onChangeText={(text)=>{
                    this.setState({
                        word: text
                    })
                }}/>
                <TouchableOpacity style={styles.searchBtn}>
                    <Text style={{fontSize:18,fontWeight:'bold'}}>Search</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    searchBtn:{
        borderRadius:30,
        alignItems:'center',
        alignSelf:'center',
        marginTop:20,
        borderWidth:5,
        paddingTop:6
    }
})