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

export default class BookATable extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    const ds1 = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    const ds2 = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    let value = {
      orders: [
        {
          level: 11,
          description:
            'https://images2.roomstogo.com/is/image/roomstogo/dr_tbl_8218211p_brynwood_black~Brynwood-Black-Round-Table.jpeg?$PDP_Primary_936x650$',
        },
        {
          level: 22,
          description:
            'https://images2.roomstogo.com/is/image/roomstogo/dr_tbl_8218211p_brynwood_black~Brynwood-Black-Round-Table.jpeg?$PDP_Primary_936x650$',
        },
        {
          level: 33,
          description:
            'https://images2.roomstogo.com/is/image/roomstogo/dr_tbl_8218211p_brynwood_black~Brynwood-Black-Round-Table.jpeg?$PDP_Primary_936x650$',
        },
        {
          level: 11,
          description:
            'https://images2.roomstogo.com/is/image/roomstogo/dr_tbl_8218211p_brynwood_black~Brynwood-Black-Round-Table.jpeg?$PDP_Primary_936x650$',
        },
        {
          level: 22,
          description:
            'https://images2.roomstogo.com/is/image/roomstogo/dr_tbl_8218211p_brynwood_black~Brynwood-Black-Round-Table.jpeg?$PDP_Primary_936x650$',
        },
        {
          level: 33,
          description:
            'https://images2.roomstogo.com/is/image/roomstogo/dr_tbl_8218211p_brynwood_black~Brynwood-Black-Round-Table.jpeg?$PDP_Primary_936x650$',
        },
      ],
    };
    let value1 = {
      orders1: [
        {level: 14, description: 'thu'},
        {level: 15, description: 'fri'},
        {level: 16, description: 'sat'},
        {level: 17, description: 'sun'},
        {level: 18, description: 'mon'},
        {level: 19, description: 'tue'},
        {level: 20, description: 'wed'},
        {level: 21, description: 'thu'},
        {level: 22, description: 'fri'},
        {level: 23, description: 'sat'},
        {level: 24, description: 'sun'},
        {level: 25, description: 'mon'},
        {level: 26, description: 'tue'},
        {level: 27, description: 'wed'},
        {level: 28, description: 'thu'},
        {level: 29, description: 'fri'},
        {level: 30, description: 'sat'},
        {level: 31, description: 'sun'},
      ],
    };
    let value2 = {
      orders2: [
        {level: '01', description: 'am'},
        {level: '02', description: 'am'},
        {level: '03', description: 'am'},
        {level: '04', description: 'am'},
        {level: '05', description: 'am'},
        {level: '06', description: 'am'},
        {level: '07', description: 'am'},
        {level: '08', description: 'am'},
        {level: '09', description: 'am'},
        {level: '10', description: 'am'},
        {level: '11', description: 'am'},
        {level: '12', description: 'am'},
        {level: '01', description: 'pm'},
        {level: '02', description: 'pm'},
        {level: '03', description: 'pm'},
        {level: '04', description: 'pm'},
        {level: '05', description: 'pm'},
        {level: '06', description: 'pm'},
        {level: '07', description: 'pm'},
        {level: '08', description: 'pm'},
        {level: '09', description: 'pm'},
        {level: '10', description: 'pm'},
        {level: '11', description: 'pm'},
        {level: '12', description: 'pm'},
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
        totalData[i] = [row.push([i]), level[i], description[i]];
      }
    }
    return {totalData, level, description};
  }
  formateData1(data) {
    const row = [];
    const level = [];
    const description = [];
    const totalData1 = {};
    const orders = data['orders1'].forEach(data => {
      level.push(data['level']), description.push(data['description']);
    });
    if (level.length > 0) {
      for (i = 0; i < level.length; i++) {
        totalData1[i] = [row.push([i]), level[i], description[i]];
      }
    }
    return {totalData1, level, description};
  }
  formateData2(data) {
    const row = [];
    const level = [];
    const description = [];
    const totalData2 = {};
    const orders = data['orders2'].forEach(data => {
      level.push(data['level']), description.push(data['description']);
    });
    if (level.length > 0) {
      for (i = 0; i < level.length; i++) {
        totalData2[i] = [row.push([i]), level[i], description[i]];
      }
    }
    return {totalData2, level, description};
  }

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
            {parseInt(this.state.value * 10)}
          </Text>
        </View>
        <View style={{width: Dimensions.get('window').width * 0.9}}>
          <Slider
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
          <Text style={styles.textConfirm}>December 2017</Text>
        </View>
        <ListView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          dataSource={this.state.dataSource1}
          renderRow={rowData => <CircularCell {...rowData} />}
        />
        <View style={{width: Dimensions.get('window').width * 0.9}}>
          <Text style={styles.textHeading}>Time</Text>
        </View>
        <ListView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          dataSource={this.state.dataSource2}
          renderRow={rowData => <CircularCell {...rowData} />}
        />
        <View
          style={{
            width: Dimensions.get('window').width * 0.9,
            alignItems: 'center',
            height: 44,
            justifyContent: 'center',
          }}
        >
          <TouchableOpacity>
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
    color: 'black',
  },
  textConfirm: {
    fontWeight: 'bold',
    fontSize: 22,
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
    fontSize: 20,
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
    width: Dimensions.get('window').width*0.85,
    marginTop: 8,
    borderWidth: 2,
  },
});
