import React, {Component} from 'react';
import {StyleSheet,TouchableOpacity,Text} from 'react-native';

export default class CustomBtn extends Component{
    render(){
        const {title,onClick} = this.props;
        return(
            <TouchableOpacity style={styles.container}
            onPress={onClick}
            >
                <Text style={styles.titleStyle}>{this.props.title}</Text>   
            </TouchableOpacity>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        // backgroundColor:'blue',
        height:44,
        justifyContent:'center',
        alignItems:'center',
    },
    titleStyle:{
        color:'black',
        fontSize:16,
        textAlign:'center',
        // backgroundColor:'red',
    }
});