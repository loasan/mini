import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'

import './index.scss'

class Index extends Component {

  config = {
    navigationBarTitleText: '商情发现'
  };

  skipToSearch(){
    Taro.navigateTo({url: '../search/search'})
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <View className='introduce'>
          <Text>商情发现，发现外贸人的专属客户</Text>
        </View>
        <View className='search' onClick={this.skipToSearch}>
          <View className='at-icon at-icon-search' />
            <Text className='tips'>请输入公司名称，仅支持英文</Text>
          <View className='camera'>
            <View className='at-icon at-icon-camera' />
          </View>
        </View>
      </View>
    )
  }
}

export default Index
