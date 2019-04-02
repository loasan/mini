import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import {Detail_basic} from "../../component/detail/detail_basic/detail_basic";
import {Detail_trade} from "../../component/detail/detail_trade/detail_trade";


class Detail extends Component {

  config = {
    navigationBarTitleText: '商情发现'
  };

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View >
        <View><Detail_basic /></View>
        <View><Detail_trade /></View>
      </View>
    )
  }
}

export default Detail
