import React, {Component} from 'react';
import {Text,StyleSheet,TouchableOpacity} from 'react-native';
export default class MarketSaleItem extends Component{
    render(){
        const {saleDate,saleCount,salePrice,saleState,onClick} = this.props;
        return(
            <TouchableOpacity style={styles.container}
            onPress={onClick}
            >
                <Text style={styles.date}>{this.props.saleDate}</Text>
                <Text style={styles.count}>{this.props.saleCount}个</Text>
                <Text style={styles.price}>{this.props.salePrice}元</Text>
                <Text style={styles.state}>{this.props.saleState}</Text>
            </TouchableOpacity>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        height:44,
        // backgroundColor:"yellow",
    },
    date:{
        flex:2,
        color:"black",
        fontSize:16,
        textAlign: 'center',
    },
    count:{
        flex:1,
        color:"black",
        fontSize:16,
        textAlign: 'center',
    },
    price:{
        flex:1,
        color:"black",
        fontSize:16,
        textAlign: 'center',
    },
    state:{
        flex:2,
        color:"red",
        fontSize:16,
        textAlign: 'center',
    }
});