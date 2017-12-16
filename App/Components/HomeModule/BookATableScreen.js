import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  ListView,
} from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import Slider from 'react-native-slider';
import CircularCell from '../../UIElements/HorizantolListviewCell';
import { Actions } from 'react-native-router-flux';

var totalData2 = [];
var ds2;
var ds1;
var totalData1 = [];
export default class BookATable extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    ds1 = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    ds2 = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    let value = {
      orders: [
        {
          level: 11,
          description:
            'https://images2.roomstogo.com/is/image/roomstogo/dr_tbl_8218211p_brynwood_black~Brynwood-Black-Round-Table.jpeg',
        },
        {
          level: 22,
          description:
            'https://images2.roomstogo.com/is/image/roomstogo/dr_tbl_8218211p_brynwood_black~Brynwood-Black-Round-Table.jpeg',
        },
        {
          level: 33,
          description:
            'https://images2.roomstogo.com/is/image/roomstogo/dr_tbl_8218211p_brynwood_black~Brynwood-Black-Round-Table.jpeg',
        },
        {
          level: 11,
          description:
            'https://images2.roomstogo.com/is/image/roomstogo/dr_tbl_8218211p_brynwood_black~Brynwood-Black-Round-Table.jpeg',
        },
        {
          level: 22,
          description:
            'https://images2.roomstogo.com/is/image/roomstogo/dr_tbl_8218211p_brynwood_black~Brynwood-Black-Round-Table.jpeg?$PDP_Primary_936x650$:00',
        },
        {
          level: 33,
          description:
            'https://images2.roomstogo.com/is/image/roomstogo/dr_tbl_8218211p_brynwood_black~Brynwood-Black-Round-Table.jpeg?$PDP_Primary_936x650$:00',
        },
      ],
    };
    let value1 = {
      orders1: [
        {level: 14, description: 'thu', tk: false},
        {level: 15, description: 'fri', tk: false},
        {level: 16, description: 'sat', tk: false},
        {level: 17, description: 'sun', tk: false},
        {level: 18, description: 'mon', tk: false},
        {level: 19, description: 'tue', tk: false},
        {level: 20, description: 'wed', tk: false},
        {level: 21, description: 'thu', tk: false},
        {level: 22, description: 'fri', tk: false},
        {level: 23, description: 'sat', tk: false},
        {level: 24, description: 'sun', tk: false},
        {level: 25, description: 'mon', tk: false},
        {level: 26, description: 'tue', tk: false},
        {level: 27, description: 'wed', tk: false},
        {level: 28, description: 'thu', tk: false},
        {level: 29, description: 'fri', tk: false},
        {level: 30, description: 'sat', tk: false},
        {level: 31, description: 'sun', tk: false},
      ],
    };
    let value2 = {
      orders2: [
        {level: '01:00', description: 'am', tk: false},
        {level: '02:00', description: 'am', tk: false},
        {level: '03:00', description: 'am', tk: false},
        {level: '04:00', description: 'am', tk: false},
        {level: '05:00', description: 'am', tk: false},
        {level: '06:00', description: 'am', tk: false},
        {level: '07:00', description: 'am', tk: false},
        {level: '08:00', description: 'am', tk: false},
        {level: '09:00', description: 'am', tk: false},
        {level: '10:00', description: 'am', tk: false},
        {level: '11:00', description: 'am', tk: false},
        {level: '12:00', description: 'am', tk: false},
        {level: '01:00', description: 'pm', tk: false},
        {level: '02:00', description: 'pm', tk: false},
        {level: '03:00', description: 'pm', tk: false},
        {level: '04:00', description: 'pm', tk: false},
        {level: '05:00', description: 'pm', tk: false},
        {level: '06:00', description: 'pm', tk: false},
        {level: '07:00', description: 'pm', tk: false},
        {level: '08:00', description: 'pm', tk: false},
        {level: '09:00', description: 'pm', tk: false},
        {level: '10:00', description: 'pm', tk: false},
        {level: '11:00', description: 'pm', tk: false},
        {level: '12:00', description: 'pm', tk: false},
      ],
    };

    const {totalData} = this.formateData(value);
    const {totalData1} = this.formateData1(value1);
    const {totalData2} = this.formateData2(value2);

    this.state = {
      value: 1,
      count: 0,
      dataSource: ds.cloneWithRows(totalData),
      dataSource1: ds1.cloneWithRows(totalData1),
      dataSource2: ds2.cloneWithRows(totalData2),
      bgColor: 'white',
    };
  }
  
  confirm() {
    Actions.bookConfirm()
  }  
  formateData(data) {
    const row = [];
    const level = [];
    const description = [];
    const totalData = {};
    const orders = data['orders'].forEach(data => {
      level.push(data['level']), description.push(data['description']);
    });
    if (level.length > 0) {
      for (i = 0; i < level.length; i++) {
        totalData[i] = [(row[i] = i), level[i], description[i]];
      }
    }
    return {totalData, level, description};
  }
  formateData1(data) {
    const row = [];
    const level = [];
    const description = [];
    const orders = data['orders1'].forEach(data => {
      level.push(data['level']), description.push(data['description']);
    });
    if (level.length > 0) {
      for (i = 0; i < level.length; i++) {
        totalData1[i] = [(row[i] = i), level[i], description[i]];
      }
    }
    return {totalData1, level, description};
  }
  formateData2(data) {
    const row = [];
    const level = [];
    const description = [];
    const tk = [];
    const orders = data['orders2'].forEach(data => {
      level.push(data['level']),
        description.push(data['description']),
        tk.push(data['tk']);
    });
    if (level.length > 0) {
      for (i = 0; i < level.length; i++) {
        totalData2[i] = [(row[i] = i), level[i], description[i], tk[i]];
      }
    }
    return {totalData2, level, description, tk};
  }
  onSelectTime = data => {
    for (i = 0; i < totalData2.length; i++) {
      if (data[0] != i) {
        totalData2[i][3] = false;
      } else {
        totalData2[i][3] = true;
      }
    }
    this.setState({dataSource2: ds2.cloneWithRows(totalData2)});
  };
  onSelectDate = data => {
    console.log(data)
    for (i = 0; i < totalData1.length; i++) {
      if (data[0] != i) {
        totalData1[i][3] = false;
      } else {
        totalData1[i][3] = true;
      }
    }
    this.setState({dataSource1: ds1.cloneWithRows(totalData1)});
  };
  
  render() {
    let hotelsArray = [
      'Knife&Fork',
      'Fasos',
      'Hyderabad biryani',
      'dawat-e-kass',
      'Tanduri hut',
    ];
    return (
      <View style={styles.container}>
        <View
          style={{
            width: Dimensions.get('window').width * 0.9,
          }}
        >
          <Text style={styles.textHeading}> Choose a Hotel</Text>
        </View>
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
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            width: Dimensions.get('window').width * 0.9,
          }}
        >
          <Text style={styles.textHeading}>Choose a Table</Text>
        </View>
        <ListView
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          dataSource={this.state.dataSource}
          renderRow={rowData => (
            <Image
              style={{width: 75, height: 75, margin: 15}}
              source={{uri: rowData[2]}}
            />
          )}
        />
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            width: Dimensions.get('window').width * 0.9,
          }}
        >
          <Text style={styles.textHeading}>Number of Persons </Text>
          <Text style={styles.textConfirm}>
            {parseInt(this.state.value)}
          </Text>
        </View>
        <View style={{width: Dimensions.get('window').width * 0.9}}>
          <Slider
            minimumValue={0}
            maximumValue={10}
            minimumTrackTintColor={'#007fc8'}
            thumbTintColor={'#007fc8'}
            width={Dimensions.get('window').width * 0.9}
            value={this.state.value}
            onValueChange={value => this.setState({value})}
          />
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            width: Dimensions.get('window').width * 0.9,
          }}
        >
          <Text style={styles.textHeading}>Pick a date </Text>
          <Text style={{fontWeight: 'bold',
    fontSize: 15,
    color: '#007fc8', textAlign: 'right', width: Dimensions.get('window').width*0.4}}>December 2017</Text>
        </View>
        <ListView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          dataSource={this.state.dataSource1}
          renderRow={rowData => (
            <CircularCell
              {...rowData}
              onSelect={this.onSelectDate.bind(this)}
            />
          )}
        />
        <View style={{width: Dimensions.get('window').width * 0.9}}>
          <Text style={styles.textHeading}>Time</Text>
        </View>
        <ListView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          dataSource={this.state.dataSource2}
          renderRow={rowData => (
            <CircularCell
              {...rowData}
              onSelect={this.onSelectTime.bind(this)}
            />
          )}
        />
        <View
          style={{
            width: Dimensions.get('window').width * 0.9,
            alignItems: 'center',
            height: 44,
            justifyContent: 'center',
          }}
        >
          <TouchableOpacity onPress={this.confirm}>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'white',
                width: Dimensions.get('window').width * 0.5,
                height: 44,
                borderRadius: 22,
              }}
            >
              <Text style={styles.textConfirm}>Confirm</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
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
    fontSize: 18,
    color: 'black',
    marginBottom: 8,
  },
  textConfirm: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#007fc8',
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
    color: '#007fc8',
  },
  dropdownTextStyle: {
    color: 'brown',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    height: 44,
    width: '100%',
    paddingLeft: 10,
  },
  dropdownStyle: {
    width: Dimensions.get('window').width * 0.85,
    marginTop: 8,
    borderWidth: 2,
  },
});
