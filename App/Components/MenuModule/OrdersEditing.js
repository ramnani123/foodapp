import React, {Component} from 'react';
import {Text, View, Dimensions, ListView, TouchableOpacity} from 'react-native';
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
    console.log(this.props);
  }
  render() {
    return (
      <View
        style={{
          width: Dimensions.get('window').width,
          backgroundColor: 'white',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <View>
          <ListView
            enableEmptySections={true}
            dataSource={this.state.dataSource}
            showsVerticalScrollIndicator={false}
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
          <View>
            <View
              style={{
                height: 60,
                width: Dimensions.get('window').width,
                borderWidth: 0.5,
                justifyContent: 'center',
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  paddingLeft: 15,
                  width: Dimensions.get('window').width * 0.95,
                  justifyContent: 'space-between',
                }}
              >
                <Text>Total</Text>
                <Text>120</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  paddingLeft: 15,
                  width: Dimensions.get('window').width * 0.95,
                  justifyContent: 'space-between',
                  paddingTop: 10,
                }}
              >
                <Text>Tax</Text>
                <Text>120</Text>
              </View>
            </View>
            <View
              style={{
                height: 44,
                width: Dimensions.get('window').width,
                backgroundColor: 'black',
              }}
            >
              <TouchableOpacity>
                <View style={{justifyContent: 'space-between', flexDirection: 'row', padding: 15}}>
                  <Text style={{color: 'white', fontWeight: 'bold'}}>Confirm order</Text>
                  <Text style={{color: 'white', fontWeight: 'bold'}}>120</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
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
