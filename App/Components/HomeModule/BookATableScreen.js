import React, { Component, PropTypes } from 'react';
import { View, Text, Dimensions, Image, ScrollView, TouchableOpacity, StyleSheet, ListView, TouchableHighlight, TextInput } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import styles from '../../Styles/BookATableStyles';

class BookATable extends React.Component {
  constructor(props) {
    super(props);  
  }

  render() {
          let hotelsArray = ['Knife&Fork', 'Fasos', 'Hyderabad biryani', 'dawat-e-kass', 'Tanduri hut']
          let adultsArray = ['1', '2', '3', '4', '5']
          return (
            <View style={styles.container}>
                <Text style={styles.header}>Hotel Name</Text>
                <View style={styles.bgView}>
                    <ModalDropdown  defaultValue={' Please select hotel '} dropdownTextStyle={styles.dropdownTextStyle} options={hotelsArray} dropdownStyle={styles.dropdownStyle} style={styles.dropdownFeild}>
                    </ModalDropdown>
                    <Image source={require('../../Assets/dropdown_arrow.png')} style={styles.image}/>
                </View>
                <Text style={styles.header}>Date</Text>
                <View style={styles.bgView}>
                <TextInput style={styles.dropdownFeild}/>
                <Image source={require('../../Assets/dropdown_arrow.png')} style={styles.image}/>
                </View>
                <View>
                <Text style={styles.header}>  Adults</Text>
                <View style={styles.bgView}>
                    <ModalDropdown  defaultValue={'Select number of adults'} dropdownTextStyle={styles.dropdownTextStyle} options={adultsArray} dropdownStyle={styles.dropdownStyle} style={styles.dropdownFeild}>
                    </ModalDropdown>
                    <Image source={require('../../Assets/dropdown_arrow.png')} style={{height: 30, width: 25}}/>
                </View>
                </View>
                <TouchableOpacity >
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Book a Table</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
  }

export default BookATable;