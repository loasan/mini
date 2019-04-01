import Taro, {Component} from '@tarojs/taro'
import {View} from '@tarojs/components'
import {List_searchinput} from "../../component/list/list_searchinput/list_searchinput";
import {List_tip} from "../../component/list/list_tip/list_tip";
import {List_panel} from "../../component/list/list_panel/list_panel";


class List extends Component {

  config = {
    navigationBarTitleText: '商情发现'
  };

  constructor(prop) {
    super(prop);
    // this.state = {
    //   list: []
    // }
  }

  componentWillMount() {
    console.log(this.$router.params); // 输出 { value: value }
    const data = [
      {name: 'AMERICAN LIGHTING INC', country: '美国', buyer_number: 15, mate_number: 83},
      {name: 'BBBBBBB', country: '英国', buyer_number: 5, mate_number: 25},
      {name: 'BBBBBBB', country: '英国', buyer_number: 5, mate_number: 25}
    ];
    this.setState(
      {
        value: this.$router.params.value,
        list: data
      }
    )
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  componentDidShow() {
  }

  componentDidHide() {
  }

  render() {
    return (
      <View>
        <View><List_searchinput value={this.state.value}/></View>
        <View><List_tip data={this.state.list}/></View>
        <View><List_panel data={this.state.list}/></View>
      </View>

    )
  }
}

export default List

// <View className='list'>
//         <View className='head'>
//           <View className='shade'>
//             <View className='icon-search'>
//               <View className='at-icon at-icon-search' />
//             </View>
//             <Input className='input' value={this.value} type='text' placeholder='请输入公司名称，仅支持英文' confirmType='search' />
//             <View className='at-icon at-icon-camera' />
//           </View>
//         </View>
//
//         <View className='total'><Text>搜索到{data.length}家公司</Text></View>
//
//         <ul>
//           {
//             data.map((item) => {
//               return (
//                 <li>
//                   <View className='row'>
//                     <Text className='name'>{item.name}</Text>
//                     <View className='info'>
//                       <View className='country'><Text>{item.country}</Text></View>
//                       <View className='separate'><Text>|</Text></View>
//                       <View className='type'><Text>供应商：</Text></View>
//                       <View><Text>{item.buyer_number}</Text></View>
//                     </View>
//                     <View>
//                       <View className='number'><Text>{item.mate_number}</Text></View>
//                       <View className='count'><Text>总匹配次数</Text></View>
//                     </View>
//                   </View>
//                 </li>
//               )
//             })
//           }
//         </ul>
//
//       </View>


// {"name":'AMERICAN LIGHTING INC', country:'美国',buyer_number:15, mate_number:83 }

// <li>
// <View className='row'>
//   <View className='name'><Text>{data.name}</Text></View>
// <View className='info'>
//   <View className='country'><Text>{data.country}</Text></View>
//   <View className='separate'><Text>|</Text></View>
//   <View className='type'><Text>供应商：</Text></View>
//   <View><Text>{data.buyer_number}</Text></View>
// </View>
// <View>
// <View className='number'><Text>{data.mate_number}</Text></View>
// <View className='count'><Text>总匹配次数</Text></View>
// </View>
// </View>
// </li>
