import Taro, {Component} from '@tarojs/taro'
import {View, Text} from '@tarojs/components'
import "./detail_basic.scss"

export class Detail_basic extends Component {
  constructor(prop) {
    super(prop);
    this.state = {}
  }

  render() {
    return (
      <View className='detail_basic'>
        <View className='name'><Text>AMERICAN LIGHTING INC</Text></View>
        <View className='country'><Text className='iconfont iconlocation'> 美国</Text></View>
        <View className='tel'><Text className='iconfont icontel'> +01 12568542</Text></View>
        <View className='web'><Text className='iconfont iconlink'> https://www.baidu.com</Text></View>
      </View>
    )
  }
}
