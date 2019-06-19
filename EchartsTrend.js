import React, {Component} from 'react';
import Echarts from 'native-echarts';
import {StyleSheet,View,Text} from 'react-native';

var DATA_URL = "https://www.echartsjs.com/gallery/data/asset/data/aqi-beijing.json";
export default class EchartsTrend extends Component {
    constructor(props) {
        super(props);   
        this.state = {
            data: [],  
            loaded:false,//数据未加载完成
        };
        // 在ES6中，如果在自定义的函数里使用了this关键字，则需要对其进行“绑定”操作，否则this的指向不对
        // 像下面这行代码一样，在constructor中使用bind是其中一种做法（还有一些其他做法，如使用箭头函数等）
        this.fetchData = this.fetchData.bind(this);
    }
    render() {
        // return this.renderLoadingView();
        if(!this.state.loaded){
            return this.renderLoadingView();
        }
        return this.renderView(this.state.data);     
    }
    renderLoadingView(){
        return(
            <View style={styles.container}>
                <Text>正在加载数据......</Text>
            </View>
        );
        
    }
    renderView(data){
        const option = {
            title: {
                text: '价格走势图'
            },
            tooltip: {
                trigger: 'axis'
            },
            xAxis: {
                data:data.map(function (item) {
                    return item[0];
                })
            },
            yAxis: {
                splitLine: {
                    show: true
                }
            },
            toolbox: {
                left: 'center',
                feature: {
                    dataZoom: {
                        yAxisIndex: 'none'
                    },
                    restore: {},
                    // saveAsImage: {}
                }
            },
            dataZoom: [{
                startValue: '2015-01-22'
            }, {
                type: 'inside'
            }],
            
            series: {
                name: 'Price',
                type: 'line',
                data: data.map(function (item) {
                    return item[1];
                }),
                
            }
          };
          return (
              <View style={styles.container}>
                <Echarts option={option} height={200}/>
            </View>
          );      
    }
    componentDidMount() {
        this.fetchData();
    }
    fetchData() {
        fetch(DATA_URL)
          .then((response) => response.json())
          .then((responseData) => {
            // 注意，这里使用了this关键字，为了保证this在调用时仍然指向当前组件，我们需要对其进行“绑定”操作
            this.setState({
                data: this.state.data.concat(responseData),
                loaded: true,
              });
              
          });
    }
  }
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF",
        // backgroundColor:'red'
      },
      
});