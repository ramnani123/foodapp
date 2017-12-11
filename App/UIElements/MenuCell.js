import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

export class MenuCell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      selectedRow: -1,
      totalCount: 0,
    };
    this.increment.bind(this);
  }

  increment = () => {
    this.setState({count: this.state.count + 1}),
      this.props.increment(1);
  };
  decrement = () => {
    if (this.state.count > 0) {
      this.setState({count: this.state.count - 1});
      this.props.decrement(1);
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
          <Text style={{margin: 4}}>{this.props[1]}</Text>
          <Text style={{margin: 4, color: 'gray'}}>{this.props[2]}</Text>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              onPress={this.increment}
              testID="${this.props[0]}"
            >
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
        <View style={{margin: 4}}>
          <Text>100</Text>
        </View>
      </View>
    );
  }
}
