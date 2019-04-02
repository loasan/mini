import Taro, {Component} from '@tarojs/taro'
import {View, Text} from '@tarojs/components'
import "./detail_trade.scss"

export class Detail_trade extends Component {
  constructor(prop) {
    super(prop);
    this.state = {}
  }

  render() {
    return (
      <View className='detail_trade'>
        <View className='head'><Text>近一年贸易数据</Text></View>
        <View><Text className='iconfont iconchart iconcolor' /><Text className='frequency'>贸易次数</Text></View>
        <View><Text className='iconfont iconpurchaser' /><Text className='amount'>供应商</Text></View>
        <View><Text className='iconfont iconhistory' /><Text className='record'>最近一次进口记录</Text></View>
      </View>
    )
  }
}
