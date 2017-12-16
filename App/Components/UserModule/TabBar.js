import React, {Component} from 'react';
import {Text, View, ListView, StyleSheet} from 'react-native';
import Row from '../../UIElements/MyOrdersRow';
import {connect} from 'react-redux';
import request from '../../Actions/ActionCreator';
import Api from '../../Networking/APIS';
import {httpMethodes} from '../../Constants/Constants';

var ds;
class TabBar extends Component {
  componentWillMount() {
    const {dispatch} = this.props;
    dispatch(request(Api.orderList, httpMethodes.get)).then(response => {
      console.log(this.props.orders.result.Data)
      if (response.ok) {
        this.setState({dataSource: ds.cloneWithRows(this.props.orders.result.Data)})
      } else {
        console.log('error');
      }
    });
  }
  constructor(props) {
    super(props);
    ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {
      dataSource: ds.cloneWithRows([]),
    };
  }
  render() {
    return (
      <View style={{height: '98%', backgroundColor: 'white', margin: '2%'}}>
        <ListView
          enableEmptySections={true}
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

function mapStateToProps(state) {
  return {
    orders: state.ordersReducers,
  };
}
export default connect(mapStateToProps)(TabBar);
