import Taro, { Component } from '@tarojs/taro'
import { View, Input , Text} from '@tarojs/components'
import "./list_panel.scss"


export class List_panel extends Component{
  constructor(props){
    super(props);
  }

  skipToDetail(){
    Taro.navigateTo({url: '../detail/detail'});
  }

  render() {
    return (
      <View className='list_panel'>
        <ul>
          {
            this.props.list.map((item) => {
              return (
                <li>
                  <View className='row' onClick={this.skipToDetail.bind(this)}>
                    <Text className='name'>{item.name}</Text>
                    <View className='info'>
                      <View className='country'><Text>{item.location}</Text></View>
                      <View className='separate'><Text>|</Text></View>
                      <View className='type'><Text>供应商：</Text></View>
                      <View><Text>{item.shipmentSum}</Text></View>
                    </View>
                    <View>
                      <View className='number'><Text>{item.partnerSum}</Text></View>
                      <View className='count'><Text>总匹配次数</Text></View>
                    </View>
                  </View>
                </li>
              )
            })
          }
        </ul>
      </View>
    )
  }
}
