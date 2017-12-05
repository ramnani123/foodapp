import React, {Component, PropTypes} from 'react';
import {
  View,
  Text,
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  ListView,
  TouchableHighlight,
  TextInput,
} from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import styles from '../../Styles/BookATableStyles';
import DateTimePicker from 'react-native-modal-datetime-picker';
import Moment from 'moment';

class BookATable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDateTimePickerVisible: false,
      selectedDateAndTime: 'Pic date and time',
    };
  }
  _showDateTimePicker = () => this.setState({isDateTimePickerVisible: true});

  _hideDateTimePicker = () => this.setState({isDateTimePickerVisible: false});

  _handleDatePicked = date => {
    Moment.locale('en');    
    console.log(date)
    this.setState({selectedDateAndTime:  Moment(date).format('LLLL')})
    this._hideDateTimePicker();
  };
  render() {
    let hotelsArray = [
      'Knife&Fork',
      'Fasos',
      'Hyderabad biryani',
      'dawat-e-kass',
      'Tanduri hut',
    ];
    let adultsArray = ['1', '2', '3', '4', '5'];
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Hotel Name</Text>
        <View style={styles.bgView}>
          <ModalDropdown
            defaultValue={' Please select hotel '}
            dropdownTextStyle={styles.dropdownTextStyle}
            options={hotelsArray}
            dropdownStyle={styles.dropdownStyle}
            style={styles.dropdownFeild}
          />
          <Image
            source={require('../../Assets/dropdown_arrow.png')}
            style={styles.image}
          />
        </View>
        <Text style={styles.header}>Date</Text>
        <View style={styles.bgView}>
          <TouchableOpacity onPress={this._showDateTimePicker}>
            <View style={{width: Dimensions.get('window').width*0.75}}>
            <Text style={{fontSize: 12, marginLeft: 1}}>{this.state.selectedDateAndTime}</Text>
            </View>
          </TouchableOpacity>
          <DateTimePicker
            mode={'datetime'}
            isVisible={this.state.isDateTimePickerVisible}
            onConfirm={this._handleDatePicked}
            onCancel={this._hideDateTimePicker}
          />
          <Image
            source={require('../../Assets/dropdown_arrow.png')}
            style={styles.image}
          />
        </View>
        <Text style={styles.header}>Adults</Text>
        <View>
          <View style={styles.bgView}>
            <ModalDropdown
              defaultValue={'Select number of adults'}
              dropdownTextStyle={styles.dropdownTextStyle}
              options={adultsArray}
              dropdownStyle={styles.dropdownStyle}
              style={styles.dropdownFeild}
            />
            <Image
              source={require('../../Assets/dropdown_arrow.png')}
              style={{height: 30, width: 25}}
            />
          </View>
        </View>
        <TouchableOpacity>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Book a Table</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default BookATable;
