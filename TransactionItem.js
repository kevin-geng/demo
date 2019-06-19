import React, {Component} from 'react';
import {Text,View,StyleSheet,Image} from 'react-native';

export default class Transaction extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.topView}>
                    <Image style={styles.avator}></Image>
                    <Text style={styles.title}>{this.props.title}</Text>
                </View>
                <View style={styles.bottomView}>
                    <Text style={styles.price}>{this.props.price}</Text>
                    <Text style={styles.count}>数量:{this.props.count}</Text>
                    <Text style={styles.quota}>限额:{this.props.minimumAmount}-{this.props.maxmimumAmount}</Text>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        // height:50,
    },
    topView:{
        flexDirection:'row',
        // height:20,
    },
    bottomView:{
        // height:30,
        flexDirection:'column',

    },
    avator:{
        width:20,
        height:20,
    },
    title:{
        fontSize:12,
        marginLeft:10,
    },
    price:{
        fontSize:20,
        paddingLeft:10,
    },
    count:{
        fontSize:12,
        paddingLeft:10,
    },
    quota:{
        fontSize:12,
        paddingLeft:10,
        paddingBottom:10,
    }
})