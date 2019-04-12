import Taro, {Component, PropTypes} from '@tarojs/taro'
import {View, Input} from '@tarojs/components'
//import {Common_searchinput} from "../../common/common_searchinput/common_searchinput";
import "./search_searchinput.scss"

export class Search_searchinput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: ''
    }

  }

  onclick_skip() {
    Taro.navigateTo({
      url: '../list/list?value='+ this.state.inputVal
    });

  }

  inputHandler(e) {
    const newValue = e.target.value;
    this.setState({
      inputVal: newValue
    });
    this.props.onGetval(newValue);
  }

  componentWillMount() {

  }

  render() {
    return (
      <View className='searchInput' >
        <View className='shade'>
          <View className='icon-search'>
            <View className='at-icon at-icon-search' />
          </View>
          <Input className='input' type='text' value={this.state.inputVal} placeholder='请输入公司名称，仅支持英文' onConfirm={this.onclick_skip.bind(this)} onInput={this.inputHandler.bind(this)} confirmType='search' focus />
          <View className='at-icon at-icon-camera' />
        </View>
      </View>
    )
  }
}

// Search_searchinput.propTypes = {
//   onGetval: PropTypes.func
// };

// onClick={this.onclick_skip.bind(this)}
