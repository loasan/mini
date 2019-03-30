import Taro, { Component } from '@tarojs/taro'
import { View, Input, Text } from '@tarojs/components'
import './search.scss'

class Index extends Component {

  config = {
    navigationBarTitleText: '商情发现'
  }

  state = {
    inputValue:"",
  }

  onInput(event){
    this.setState({
      inputValue:event.target.value,
    })
  }

  skipToList(inputValue){
    Taro.navigateTo({url: '../list/list?value='+ inputValue})
  }


  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='search'>
        <View className='head'>
          <View className='shade'>
            <View className='icon-search'>
              <View className='at-icon at-icon-search' />
            </View>
            <Input className='input' value={this.state.inputValue} bindinput='inputBind' onInput={this.onInput.bind(this)}
                   type='text' placeholder='请输入公司名称，仅支持英文' confirmType='search' onConfirm={this.skipToList.bind(this, this.state.inputValue)} focus/>
            <View className='at-icon at-icon-camera' />
          </View>
        </View>

        <View className='history'>
          <View className='title'><Text>历史搜索</Text></View>
          <View className='line' />

          <View className='row' onClick={this.skipToList.bind(this, this.state.inputValue)}>
            <View className='icon_clock'><View className='at-icon at-icon-clock' /></View>
            <View className='list'><Text>AMERICAN LIGHTING INC</Text></View>
          </View>
          <View className='line2' />
          <View className='row'>
            <View className='icon_clock'><View className='at-icon at-icon-clock' /></View>
            <View className='list'><Text>AMERICAN LIGHTING INC</Text></View>
          </View>
        </View>
      </View>
    )
  }
}

export default Index
