import React, {Component} from 'react';
import {Text, View, ListView, StyleSheet} from 'react-native';
import Row from '../../UIElements/MyOrdersRow';

class TabBar extends Component {
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
    const {totalData} = this.formateData(value)
    this.state = {
      dataSource: ds.cloneWithRows(totalData),
    };
  }
  
  formateData(data) {
    const level = [];
    const description = [];
    const totalData = {};
    const orders = data['orders'].forEach(data => {
      level.push(data['level']), description.push(data['description']);
    });
    if (level.length > 0) {
      for (i=0; i<level.length; i++) {
        totalData[i] = [level[i], description[i]]
        
      }
    }
    return {totalData, level, description};
  }
  render() {
    return (
      <View style={{height: '98%', backgroundColor: 'white', margin: '2%'}}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={data => <Row {...data} />}
          renderSeparator={(sectionId, rowId) => (
            <View key={rowId} style={{height: 2}} />
          )}
        />
      </View>
    );
  }
}

export default TabBar;
