import Taro, { Component } from '@tarojs/taro'
import { View, Input, Text } from '@tarojs/components'
import {Search_searchinput} from "../../component/search/search_searchinput/search_searchinput";
import {Search_tip} from "../../component/search/search_tip/search_tip";
import {Search_panel} from "../../component/search/search_panel/search_panel";
import './search.scss'

class Search extends Component {

  constructor(props){
    super(props);

    this.handle = this.handle.bind(this);

    this.state={
      value:""
    }

  }

  handle(v){
    this.setState({
      value: v
    })
  }

  render () {
    return (
      <View>
        <View><Search_searchinput onGetval={this.handle} /></View>
        <View><Search_tip /></View>
        <View><Search_panel value={this.state.value} /></View>
      </View>
    )
  }
}

export default Search


// <View className='history'>
//   <View className='title'><Text>历史搜索</Text></View>
// <View className='line' />
//
//   <View className='row' onClick={this.skipToList.bind(this, this.state.inputValue)}>
//   <View className='icon_clock'><View className='at-icon at-icon-clock' /></View>
// <View className='list'><Text>AMERICAN LIGHTING INC</Text></View>
// </View>
// <View className='line2' />
// <View className='row'>
//   <View className='icon_clock'><View className='at-icon at-icon-clock' /></View>
// <View className='list'><Text>AMERICAN LIGHTING INC</Text></View>
// </View>
// </View>
