import Taro, { Component } from '@tarojs/taro'
import { View, Input } from '@tarojs/components'
import "./common_searchinput.scss"

export class Common_searchinput extends Component{
  constructor(props){
    super(props);
    this.state={
      inputVal:''
    }
  }

  onclick_skip() {

  }

  inputHandler(e){
    this.setState({
      inputVal: e.target.value
    })
  }

  render () {
    return (
      <View className='searchInput'>
        <View className='shade'>
          <View className='icon-search'>
            <View className='at-icon at-icon-search' />
          </View>
          <Input className='input' type='text' value={this.state.inputVal} placeholder='请输入公司名称，仅支持英文' onConfirm={this.onclick_skip.bind(this)} onInput={this.inputHandler.bind(this)} confirmType='search' focus={this.props.focus} />
          <View className='at-icon at-icon-camera' />
        </View>
      </View>
    )
  }
}


{/*<View className='head'>*/}
  {/*<View className='shade'>*/}
    {/*<View className='icon-search'>*/}
      {/*<View className='at-icon at-icon-search' />*/}
    {/*</View>*/}
    {/*<Input className='input' value={this.state.inputValue} bindinput='inputBind' onInput={this.onInput.bind(this)}*/}
           {/*type='text' placeholder='请输入公司名称，仅支持英文' confirmType='search' onConfirm={this.skipToList.bind(this, this.state.inputValue)} focus/>*/}
    {/*<View className='at-icon at-icon-camera' />*/}
  {/*</View>*/}
{/*</View>*/}
