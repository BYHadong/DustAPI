import React, { Component } from 'react';
import DustAPI from "./component/DustAPI"
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  Picker,
} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidoName: "서울",
      mise: []
    }
  }

  componentDidMount() {
    const ApiUrl = "http://openapi.airkorea.or.kr/openapi/services/rest/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?" +
    "ServiceKey=%2BBmtkr7EQF%2B1UeRAHdORtzXF%2BNVqw%2B2vZR4RdlIRKVXybmj9CU6NKdzJXthecSIwYxyMF2MJWWpMGkTQS8MrLA%3D%3D" +
    "&sidoName=" + encodeURI(this.state.sidoName) + "&_returnType=json";

    fetch(ApiUrl)
      .then(res => res.json())
      .then(jsonData => {
        this.setState({
          mise: jsonData.list.map((data) => {
            return {
              pm10Value: data.pm10Value,
              stationName: data.stationName
            }
          })
        })
      })
      .catch((err) => alert(err))
  }

  componentDidUpdate(prevProps, prevState) {
    const {sidoName} = this.state;

    if (prevState.sidoName !== sidoName) {
      const ApiUrl = "http://openapi.airkorea.or.kr/openapi/services/rest/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?" +
      "ServiceKey=%2BBmtkr7EQF%2B1UeRAHdORtzXF%2BNVqw%2B2vZR4RdlIRKVXybmj9CU6NKdzJXthecSIwYxyMF2MJWWpMGkTQS8MrLA%3D%3D" +
      "&sidoName=" + encodeURI(sidoName) + "&_returnType=json";

      fetch(ApiUrl)
      .then(res => res.json())
      .then(jsonData => {
        this.setState({
          mise: jsonData.list.map((data) => {
            return {
              pm10Value: data.pm10Value,
              stationName: data.stationName
            }
          })
        })
      })
      .catch((err) => alert(err))
    }
  }
  
  render() {
    const {mise} = this.state;
    let title = this.state.mise.map((item, i) => item.stationName)
    let data = this.state.mise.map((item, i) => item.pm10Value)

    return (
      <View>
        <Picker
          selectedValue={this.state.sidoName}
          onValueChange={itemValue => this.setState({sidoName: itemValue})}
        >
          <Picker.Item label="서울" value="서울" />
          <Picker.Item label="경기" value="경기" />
          <Picker.Item label="인천" value="인천" />
        </Picker>

        <ScrollView>
          {this.state.mise.map((miseData, index) => {
            return (
              <Text>{miseData['stationName']}</Text>              
            )
          })}
        </ScrollView>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  textstyle: {
    display: "flex",
    fontSize: 20,
    flex: 1,
  },
  list: {
    display: "flex",
    fontSize: 20,
    flex: 1,
    backgroundColor: "gray"
  },
})

export default App;
