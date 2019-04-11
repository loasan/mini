import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import "./list_tip.scss"

export class List_tip extends Component{
  constructor(prop){
    super(prop);
    // this.state={
    //   count: this.props.data.length
    // }
  }


  render () {
    return (
      <View className='list_tip'><Text>搜索到{this.props.number}家公司</Text></View>
    )
  }
}
