import Taro, { Component } from '@tarojs/taro'
import { View, Input , Text} from '@tarojs/components'
import "./panel.scss"


export class Panel extends Component{
  constructor(prop){
    super(prop);
    this.state={
      data: this.props.data
    }
  }


  render() {
    return (
      <View className='panel'>
        <ul>
          {
            this.state.data.map((item) => {
              return (
                <li>
                  <View className='row'>
                    <Text className='name'>{item.name}</Text>
                    <View className='info'>
                      <View className='country'><Text>{item.country}</Text></View>
                      <View className='separate'><Text>|</Text></View>
                      <View className='type'><Text>供应商：</Text></View>
                      <View><Text>{item.buyer_number}</Text></View>
                    </View>
                    <View>
                      <View className='number'><Text>{item.mate_number}</Text></View>
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
