import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import "./search_panel.scss"

export class Search_panel extends Component{
  constructor(props){
    super(props);
  }


  onclick_skip()
  {
    Taro.navigateTo({url: '../list/list?value='+ this.props.value});
  }

  render () {
    return (
      <View className='search_panel'>
        <View className='row' onClick={this.onclick_skip.bind(this)}>
          <View className='icon_clock'><View className='at-icon at-icon-clock' /></View>
          <View className='list'><Text>AMERICAN LIGHTING INC</Text></View>
        </View>
        <View className='line2' />
        <View className='row'>
          <View className='icon_clock'><View className='at-icon at-icon-clock' /></View>
          <View className='list'><Text>AMERICAN LIGHTING INC</Text></View>
        </View>
      </View>
    )
  }
}

{/*<View className='row' onClick={this.skipToList.bind(this, this.state.inputValue)}>*/}
