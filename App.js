import React, { Component } from 'react';
import DustAPI from "./component/DustAPI"
import {
  StyleSheet,
  View,
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

  componentDidUpdate() {
    // fetch("http://openapi.airkorea.or.kr/openapi/services/rest/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?" +
    //   "ServiceKey=%2BBmtkr7EQF%2B1UeRAHdORtzXF%2BNVqw%2B2vZR4RdlIRKVXybmj9CU6NKdzJXthecSIwYxyMF2MJWWpMGkTQS8MrLA%3D%3D" +
    //   "&sidoName=" + this.state.sidoName + "&_returnType=json")
    //   .then((res) => res.json())
    //   .then((jsonData) => {
    //     // alert("jsonData" + jsonData.map((data) => {
    //     //   return data.mise
    //     // }))
    //     this.setState({
    //       // pm10Value: jsonData.list.map((data) => { return data.pm10Value }),
    //       // stationName: jsonData.list.map((data) => { return data.stationName }),
    //       // mise: [jsonData.list.map((data) => { return data.pm10Value }), jsonData.list.map((data) => { return data.stationName })]
    //       mise: this.state.mise.concat({
    //         pm10Value: jsonData.list.map((data) => { return data.pm10Value }),
    //         stationName: jsonData.list.map((data) => { return data.stationName })
    //       })
    //     })
    //   })
  }

  /*
  "http://openapi.airkorea.or.kr/openapi/services/rest/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?" +
  "ServiceKey=%2BBmtkr7EQF%2B1UeRAHdORtzXF%2BNVqw%2B2vZR4RdlIRKVXybmj9CU6NKdzJXthecSIwYxyMF2MJWWpMGkTQS8MrLA%3D%3D" +
  "&sidoName=" + this.state.sidoName + "&_returnType=json"
  /*
  http://openapi.airkorea.or.kr/openapi/services/rest/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?ServiceKey=%2BBmtkr7EQF%2B1UeRAHdORtzXF%2BNVqw%2B2vZR4RdlIRKVXybmj9CU6NKdzJXthecSIwYxyMF2MJWWpMGkTQS8MrLA%3D%3D&_returnType=json&sidoName=%EC%84%9C%EC%9A%B8
  */
  render() {
    let title = this.state.mise.map((item, i) => item.stationName)
    let data = this.state.mise.map((item, i) => item.pm10Value)
    return (
      <View>
        <Picker
          selectedValue={this.state.sidoName}
          onValueChange={(itemValue, itemIndex) => this.setState({ sidoName: itemValue })}>
          <Picker.Item label="서울" value="서울" />
          <Picker.Item label="경기" value="경기" />
          <Picker.Itzm label="인천" value="인천" />
        </Picker>

        {/* {alert(this.state.mise.map((tsts, i) => { return typeof tsts.pm10Value[i] + "   " + typeof tsts.stationName[i] }))} */}
        
        {/* <SectionList
          sections={[{
            title: title,
            data: data
          }]}
          renderItem={({ item }) => <Text style={styles.textstyle}>{"먼지 농도 : " + item}</Text>}
          renderSectionHeader={({ section }) => <Text style={styles.list}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        /> */}

        {/* <FlatList
          data={this.state.mise.map((tsts, i) => { return tsts.stationName[i] })}
          renderItem={({ item }) => <Text style={styles.list}>{item}</Text>}>
        </FlatList>
        <FlatList
          data={this.state.mise.map((tsts, i) => { return tsts.pm10Value[i] })}
          renderItem={({ item }) => <Text style={styles.textstyle}>미세먼지 농도 : {item}</Text>}>
        </FlatList> */}


        {/* <ScrollView>
          {this.state.mise.map((miseData, index) => {
            return (
              <DustAPI stationName={miseData.stationName[index]} pm10Value={miseData.pm10Value[index]}>
                {alert("asdf : " + typeof miseData.pm10Value[index] + "   asdf : " + typeof miseData.stationName[index] + " index : " + index)}            
              </DustAPI>
            )
          })}
        </ScrollView> */}

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