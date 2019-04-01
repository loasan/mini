import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import "./search_tip.scss"

export class Search_tip extends Component{

  render () {
    return (
      <View className='search_tip'>
        <View className='title'><Text>历史搜索</Text></View>
        <View className='line' />
      </View>
    )
  }
}
