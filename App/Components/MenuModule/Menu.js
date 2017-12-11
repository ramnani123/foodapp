import React, {Component} from 'react';
import {Text, View, ListView, TouchableOpacity, Dimensions} from 'react-native';
import {MenuCell} from '../../UIElements/MenuCell';

class Menu extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    let value = {
      orders: [
        {level: 11, description: 'This is SKU 1'},
        {level: 22, description: 'This is SKU 2'},
        {level: 33, description: 'This is SKU 3'},
      ],
    };
    const {totalData} = this.formateData(value);
    this.state = {
      count: 0,
      dataSource: ds.cloneWithRows(totalData),
    };
  }

  increments = (data) => {
    this.setState({count: this.state.count + data});
    console.log('inc', this.state.count);
    this.props.increments(1)
  }
  decrements(data) {
    this.setState({count: this.state.count - data});
    console.log('dec', this.state.count, data);
  }
  formateData(data) {
    const row = [];
    const level = [];
    const description = [];
    const totalData = {};
    const orders = data['orders'].forEach(data => {
      level.push(data['level']), description.push(data['description']);
    });
    if (level.length > 0) {
      for (i = 0; i < level.length; i++) {
        totalData[i] = [row.push([i]), level[i], description[i]];
      }
    }
    return {totalData, level, description};
  }
  render() {
    return (
      <View
        style={{
          height: Dimensions.get('window').height,
          width: Dimensions.get('window').width,
          backgroundColor: 'white',
        }}
      >
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(data, sectionId, rowId) => (
            <MenuCell
              {...data}
              increment={this.increments.bind(this)}
              decrement={this.decrements.bind(this)}
            />
          )}
          renderSeparator={(sectionId, rowId) => (
            <View
              key={rowId}
              style={{height: 1, backgroundColor: 'lightgray'}}
            />
          )}
        />
      </View>
    );
  }
}

export default Menu;
