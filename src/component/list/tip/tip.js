import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import "./tip.scss"

export class Tip extends Component{
  constructor(prop){
    super(prop);
    this.state={
      count: this.props.data.length
    }
  }


  render () {
    return (
      <View className='tip'><Text>搜索到{this.state.count}家公司</Text></View>
    )
  }
}
