import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';

export default class EditOrdersCell extends Component {
  constructor(props) {
    super(props);
    console.log(this.props)
        this.state = {
      count: 0,
      selectedRow: [],
      totalCount: 0,
    };
    this.increment.bind(this);
  }

    increment = () => {
      this.setState({count: this.state.count + 1}), this.props.increment(1,this.props);
    };
    decrement = () => {
      if (this.state.count > 0) {
        this.setState({count: this.state.count - 1});
        this.props.decrement(1,this.props);
      }
    };

  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          marginLeft: 15,
          marginTop: 15,
          marginBottom: 15,
        }}
      >
        <View style={{width: '85%'}}>
          <Text style={{margin: 4}}>{this.props.item_name}</Text>
          <Text style={{margin: 4, color: 'gray'}}>{this.props.item_name}</Text>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity onPress={this.increment}>
              <View
                style={{
                  borderWidth: 0.5,
                  justifyContent: 'center',
                  alignItems: 'center',
                  margin: 4,
                  height: 25,
                  width: 25,
                }}
              >
                <Text style={{margin: 4}}>+</Text>
              </View>
            </TouchableOpacity>
            <Text style={{margin: 4, textAlign: 'center', alignSelf: 'center'}}>
              {this.state.count}
            </Text>
            <TouchableOpacity onPress={this.decrement}>
              <View
                style={{
                  borderWidth: 0.5,
                  justifyContent: 'center',
                  alignItems: 'center',
                  margin: 4,
                  height: 25,
                  width: 25,
                }}
              >
                <Text style={{margin: 4}}>-</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flexDirection: 'column', justifyContent: 'space-between'}}>
        <View style={{margin: 4}}>
          <Text>{this.props.price}</Text>
        </View>
        <TouchableOpacity>
          <View>
            <Image source={require('../Images/delete.png')} style={{width: 30, height: 30}} />
          </View>
        </TouchableOpacity>
        </View>
      </View>
    );
  }
}
