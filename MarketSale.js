import React, { Component } from 'react';
import { Text, StyleSheet, View ,FlatList,DeviceEventEmitter} from 'react-native';
import MarketSaleItem from './MarketSaleItem';
import UserRankItem from './UserRankItem';
import TransactionItem from './TransactionItem';
export default class MarketSale extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedIndex:1,
            loaded: true,//数据是否加载完成
            dataSource: [{date:"06-06 12:00",count:"3",price:"6.11",state:"立即出让"},
                        {date:"06-07 12:00",count:"20",price:"0.66",state:"立即出让"},
                        {date:"06-05 14:00",count:"4",price:"0.99",state:"立即出让"},
                        {date:"06-06 15:00",count:"6",price:"0.88",state:"立即出让"}],//数据源
            nameData:[{name:"小明",userId:"10002"},
            {name:"小灰",userId:"10003"},
            {name:"小白",userId:"10004"},
            {name:"小新",userId:"10005"}],
            transactionData:[{title:"海陆空俱乐部（1382|60%）",price:"120CNY",count:"2000",minimumAmount:"1000",maxmimumAmount:"3000"},
            {title:"海陆空俱乐部（1382|60%）",price:"120CNY",count:"2000",minimumAmount:"1000",maxmimumAmount:"3000"},
            {title:"海陆空俱乐部（1382|60%）",price:"120CNY",count:"2000",minimumAmount:"1000",maxmimumAmount:"3000"},
            {title:"海陆空俱乐部（1382|60%）",price:"120CNY",count:"2000",minimumAmount:"1000",maxmimumAmount:"3000"},
            {title:"海陆空俱乐部（1382|60%）",price:"120CNY",count:"2000",minimumAmount:"1000",maxmimumAmount:"3000"},
            {title:"海陆空俱乐部（1382|60%）",price:"120CNY",count:"2000",minimumAmount:"1000",maxmimumAmount:"3000"}],
            };
            
        // 在ES6中，如果在自定义的函数里使用了this关键字，则需要对其进行“绑定”操作，否则this的指向不对
        // 像下面这行代码一样，在constructor中使用bind是其中一种做法（还有一些其他做法，如使用箭头函数等）
        // this.fetchData = this.fetchData.bind(this);
    }
    componentDidMount(){
        // 添加监听者
        this.listener = DeviceEventEmitter.addListener('index', (index) => {
            this.setState({
                selectedIndex: index,
            });
        })
    }
    componentWillUnmount(){
        // 销毁监听者
        this.listener.remove();
    }
    render() {
        if (!this.state.loaded) {
            return this.renderLoadingView();
        }
        const selectIndex = this.state.selectedIndex;
        if(selectIndex === 1){
            return (
                <FlatList
                    data={this.state.dataSource}
                    renderItem={this.renderMarket}
                    style={styles.list}
                    keyExtractor={item => item.date}
                />
            );
        }else if(selectIndex === 2){
            return (
                <FlatList
                    data={this.state.transactionData}
                    renderItem={this.renderTransation}
                    style={styles.list}
                    
                />
            );
        }else if(selectIndex === 3){
            return (<FlatList
                data={this.state.nameData}
                renderItem={this.renderUser}
                style={styles.list}
                keyExtractor={item => item.userId}
            />);
        }else{
            return this.renderLoadingView(); 
        }
        
    }
    renderLoadingView() {
        return (
            <View style={styles.container}>
                <Text>正在加载数据......</Text>
            </View>
        );

    }
    //市场价格列表
    renderMarket({ item }) {
        return (
            <MarketSaleItem  saleDate={item.date} saleCount={item.count} salePrice ={item.price}
            saleState={item.state}
             ></MarketSaleItem>
        );
    }
    //已完成列表
    renderTransation({item}){
        return(
            <TransactionItem {...item}></TransactionItem>
        );
    }
    //用户列表
    renderUser({item}){
        return (
            <UserRankItem name={item.name} userId={item.userId}
             ></UserRankItem>
        );
    }
    

}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF",
    },
    list: {
        // paddingTop: 20,
        backgroundColor: "#F5FCFF"
    },
    
});