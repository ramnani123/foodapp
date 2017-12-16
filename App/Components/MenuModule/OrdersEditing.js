import React, {Component} from 'react';
import {Text, View, Dimensions, ListView} from 'react-native';
import {connect} from 'react-redux';
import EditOrdersCell from '../../UIElements/EditOrdersCell';
import {itemsModel} from '../../ItemsData';

var item = [];
class EditOrders extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      count: 0,
      dataSource: ds.cloneWithRows(this.props.selectedItems),
    };
  }

  increments = (data, price) => {
    this.setState({count: this.state.count + data});
    this.props.increments(1, price);
  };
  decrements = (data, price) => {
    this.setState({count: this.state.count - data});
    this.props.decrements(1, price);
  };
  componentWillReceiveProps() {
    console.log(this.props)
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
          enableEmptySections={true}
          dataSource={this.state.dataSource}
          renderRow={(data, sectionId, rowId) => (
            <EditOrdersCell
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
export default connect(mapStateToProps)(EditOrders);
