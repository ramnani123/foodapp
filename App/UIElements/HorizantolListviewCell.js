import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

class CircularCell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bgColor: 'white',
      bgColor2: 'red',
    };
  }

  onSelect = () => {
    this.props.onSelect(this.props);
    this.setState({bgColor: 'red'});
  };

  getRowSelectionStyle(isSelect) {
    if (isSelect) {
      return {
        width: 55,
        height: 55,
        borderRadius: 55 / 2,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 5,
        marginRight: 5,
        backgroundColor: 'red',

      };
    } else {
      return {
        width: 55,
        height: 55,
        borderRadius: 55 / 2,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 5,
        marginRight: 5,
        backgroundColor: '#ffffff',
      };
    }
  }

  render() {
    return (
      <View>
        <TouchableOpacity onPress={this.onSelect}>
          <View style={this.getRowSelectionStyle(this.props[3])}>
            <Text style={styles.textCircle}>{this.props[1]}</Text>
            <Text color={this.props[3]?'white': 'black'}>{this.props[2]}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    alignItems: 'center',
  },
  bgView: {
    width: Dimensions.get('window').width * 0.82,
    flexDirection: 'row',
    margin: 10,
    marginTop: 0,
    borderColor: 'black',
  },
  CircleShapeView: {
    width: 70,
    height: 70,
    borderRadius: 70 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
    marginRight: 5,
  },
  image: {
    height: 30,
    width: 30,
  },
  textHeading: {
    width: Dimensions.get('window').width * 0.5,
    fontWeight: 'bold',
    fontSize: 15,
    // color: 'black',
  },
  textConfirm: {
    fontWeight: 'bold',
    fontSize: 15,
    // color: '#007fc8',
  },
  dropdownFeild: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    width: Dimensions.get('window').width * 0.8,
    height: 30,
    justifyContent: 'center',
  },
  textCircle: {
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: 15,
    // color: '#007fc8',
  },
  dropdownTextStyle: {
    color: 'brown',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width,
    paddingLeft: 10,
    margin: 1,
  },
});
export default CircularCell;
