import React, {Component} from 'react';
import {Text,View,StyleSheet} from 'react-native';
export default class UserRankItem extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.name}>{this.props.name}</Text>
                <Text style={styles.userId}>ID:{this.props.userId}</Text>
            </View>
            
        );
    }
}
const styles =StyleSheet.create({
    container:{
        // backgroundColor:"yellow",
        height:50,
    },
    name:{
        fontSize:14,
        flex:1,
        paddingLeft:20,
    },
    userId:{
        fontSize:14,
        flex:1,
        // textAlign:'center',
        paddingLeft:20,
    }
});