import Taro, { Component } from '@tarojs/taro'
import { AtTabBar } from 'taro-ui'

export class Tabbar extends Component{
  constructor () {
    super(...arguments)
    this.state = {
      current: 0
    }
  }

  handleClick (value) {
    this.setState({
      current: value
    });
    switch (value) {
      case 0:
        Taro.redirectTo({
          url: `/pages/index/index`
        });
        break;
      case 1:
        Taro.redirectTo({
          url: `/pages/list/list`
        });
        break;
      default:
        break;
    }
  }
  render () {
    return (
      <AtTabBar
        fixed
        tabList={[
          { title: '首页'},
          { title: '我的' }
        ]} onClick={this.handleClick.bind(this)} current={this.state.current}
      />
    )}

}
