import Taro, { Component } from '@tarojs/taro'
import { View, Input } from '@tarojs/components'
import "./list_searchinput.scss"

export class List_searchinput extends Component{
  constructor(prop){
    super(prop);
    this.state={
       value:this.props.searchValue
    }
  }

  onclick_skip = () => {
    this.props.onSearch(this.state.value);
  };

  inputHandler = (e) => {
    const newValue = e.target.value;
    this.setState({
      value: newValue
    });
  };

  render () {
    return (
      <View className='list_searchInput'>
        <View className='shade'>
          <View className='icon-search'>
            <View className='at-icon at-icon-search' />
          </View>
          <Input className='input' value={this.state.value} type='text' placeholder='请输入公司名称，仅支持英文'
                 onConfirm={this.onclick_skip.bind(this)} onInput={this.inputHandler.bind(this)} confirmType='search' />
          <View className='at-icon at-icon-camera' />
        </View>
      </View>
    )
  }
}



// click(a,b){
//    console.log(a,b)
// }

// onClick={this.Click.bind(this,{test:11111},{test:333333})}
