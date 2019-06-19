import React, { Component } from 'react';
import {StyleSheet, View,DeviceEventEmitter } from 'react-native';
import CustomBtn from './CustomBtn';

export default class MarketTab extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.market}>
                <CustomBtn  title="市场" onClick={()=>{
                    DeviceEventEmitter.emit('index', 1)
                }}/>
                </View>
                <View style={styles.finishedDeal}>
                <CustomBtn  title="已完成" onClick={()=>{
                    DeviceEventEmitter.emit('index', 2)
                }}/>
                </View>
                <View style={styles.rank}>
                <CustomBtn  title="排行榜" onClick={()=>{
                    DeviceEventEmitter.emit('index', 3)
                }}/>
                </View>
                
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        height:44,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    market:{
        flex:1,
    },
    finishedDeal:{
        flex:1,
    },
    rank:{
        flex:1,
    }

});