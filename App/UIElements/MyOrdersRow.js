import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'gray',
  },
  text: {
    marginLeft: 12,
    fontSize: 16,
  },
  photo: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
});
class Row extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  render() {
    return (
      <View style={styles.cell}>
      <View style={styles.detailsView}>
        <Text style={styles.text}>HotelName}</Text>
        <Text style={styles.text}>Date</Text>
        <Text style={{}}>No.of People</Text>
        </View>
        <View style={styles.timeAndActive}>
        <Text>Time</Text>
          </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  cell: {
    width: Dimensions.get('window').width,
    padding: 8,
    flexDirection: 'row',
  },
  detailsView: {
    width: Dimensions.get('window').width * 0.8,
  },
  timeAndActive: {
    width: Dimensions.get('window').width * 0.2,
  },
 
});
export default Row;
