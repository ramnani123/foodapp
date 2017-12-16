import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

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
    console.log(this.props)
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.props.price}</Text>
        <Text style={styles.text}>{this.props.id}</Text>
        {this.props.amountPaid?(<View><Text>Paid</Text></View>):<View><Text>Not paid</Text></View>}
      </View>
    );
  }
}

export default Row;
