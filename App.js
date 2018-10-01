import React, { Component } from 'react';
import DustAPI from "./component/DustAPI"
import {
  StyleSheet,
  Text,
  Picker,
  View,
} from 'react-native';

class App extends Component {
  constructor() {
    super();
    this.state = {
      sidoName: "서울",
      pm10Value: [],
      stationName: [],
      mise: [
        this.state.pm10Value, 
        this.state.stationName
      ],
      mise: [
        {pm10Value: [], stationName: []}
      ],
    }
  }

  componentDidMount() {
    fetch("http://openapi.airkorea.or.kr/openapi/services/rest/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?" +
      "ServiceKey=%2BBmtkr7EQF%2B1UeRAHdORtzXF%2BNVqw%2B2vZR4RdlIRKVXybmj9CU6NKdzJXthecSIwYxyMF2MJWWpMGkTQS8MrLA%3D%3D" +
      "&sidoName=" + this.state.sidoName + "&_returnType=json")
      .then((res) => res.json())
      .then((jsonData) => {
        // alert("jsonData" + jsonData.map((data) => {
        //   return data.mise
        // }))
        this.setState({
          pm10Value: jsonData.list.map((data) => { return data.pm10Value }),
          stationName: jsonData.list.map((data) => { return data.stationName }),
        })
      })
  }

  componentDidUpdate() {
    fetch("http://openapi.airkorea.or.kr/openapi/services/rest/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?" +
      "ServiceKey=%2BBmtkr7EQF%2B1UeRAHdORtzXF%2BNVqw%2B2vZR4RdlIRKVXybmj9CU6NKdzJXthecSIwYxyMF2MJWWpMGkTQS8MrLA%3D%3D" +
      "&sidoName=" + this.state.sidoName + "&_returnType=json")
      .then((res) => res.json())
      .then((jsonData) => {
        // alert("jsonData" + jsonData.map((data) => {
        //   return data.mise
        // }))
        this.setState({
          pm10Value: jsonData.list.map((data) => { return data.pm10Value }),
          stationName: jsonData.list.map((data) => { return data.stationName }),
        })
      })
  }

  /*
  "http://openapi.airkorea.or.kr/openapi/services/rest/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?" +
  "ServiceKey=%2BBmtkr7EQF%2B1UeRAHdORtzXF%2BNVqw%2B2vZR4RdlIRKVXybmj9CU6NKdzJXthecSIwYxyMF2MJWWpMGkTQS8MrLA%3D%3D" +
  "&sidoName=" + this.state.sidoName + "&_returnType=json"
  /*
  http://openapi.airkorea.or.kr/openapi/services/rest/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?ServiceKey=%2BBmtkr7EQF%2B1UeRAHdORtzXF%2BNVqw%2B2vZR4RdlIRKVXybmj9CU6NKdzJXthecSIwYxyMF2MJWWpMGkTQS8MrLA%3D%3D&_returnType=json&sidoName=%EC%84%9C%EC%9A%B8
  */
  render() {
    // %2BBmtkr7EQF%2B1UeRAHdORtzXF%2BNVqw%2B2vZR4RdlIRKVXybmj9CU6NKdzJXthecSIwYxyMF2MJWWpMGkTQS8MrLA%3D%3D
    // 서울, 부산, 대구, 인천, 광주, 대전, 울산, 경기, 강원, 충북, 충남, 전북, 전남, 경북, 경남, 제주, 세종
    return (
      <View>
        <Picker
          selectedValue={this.state.sidoName}
          onValueChange={(itemValue, itemIndex) => this.setState({ sidoName: itemValue })}>
          <Picker.Item label="서울" value="서울" />
          <Picker.Item label="경기" value="경기" />
          <Picker.Itzm label="인천" value="인천" />
        </Picker>
        {alert(this.state.mise.map((tsts) => {return tsts.pm10Value + tsts.stationName}))}
        <View>
          {this.state.mise.map((miseData) => {return (
            <DustAPI stationName={miseData.stationName} pm10Value={miseData.pm10Value}></DustAPI>
          )})}
        </View>
      </View>
    )
  }
}

export default App;