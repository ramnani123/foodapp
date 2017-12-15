import React, {Component} from 'react';
import {
  Text,
  View,
  ListView,
  TouchableOpacity,
  Dimensions,
  Alert,
} from 'react-native';
import {MenuCell} from '../../UIElements/MenuCell';
import Api from '../../Networking/APIS';
import request from '../../Actions/ActionCreator';
import {httpMethodes} from '../../Constants/Constants';
import {connect} from 'react-redux';
import {itemsModel} from '../../ItemsData';

var item = [];

class Menu extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      count: 0,
      dataSource: ds.cloneWithRows(item),
    };
  }
  componentDidMount() {
    const {dispatch} = this.props;
    dispatch(request(Api.itemsInHotel, httpMethodes.get)).then(response => {
      const {items} = itemsModel(response);
      item = items;
      console.log('sdgasdf', item);
      this.setState({dataSource: ds.cloneWithRows(item)});
      if (response.ok) {
      } else {
        console.log('sdgasdf', item);
        console.log('error');
      }
    });
  }
  increments = data => {
    this.setState({count: this.state.count + data});
    console.log('inc', this.state.count);
    this.props.increments(1);
  };
  decrements = data => {
    this.setState({count: this.state.count - data});
    console.log('dec', this.state.count, data);
    this.props.decrements(1);
  };

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
          enableEmptySections={true}
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
function mapStateToProps(state) {
  return {
    items: state.ItemsReducer,
  };
}
export default connect(mapStateToProps)(Menu);
