import React, { Component } from 'react'
import { Text, View, SectionList, StyleSheet, FlatList } from 'react-native'

export default class DustAPI extends Component {
    render() {
        return (
            <View>
                <SectionList
                    sections={[{ title: this.props.stationName, data: this.props.pm10Value }]}
                    renderItem={({ item }) => <Text style={styles.textstyle}>{"먼지 농도 : "+item}</Text>}
                    renderSectionHeader={({ section }) => <Text style={styles.list}>{section.title}</Text>}
                    keyExtractor={(item, index) => index}>
                </SectionList>
                {alert("pm10 : " + typeof this.props.pm10Value + "   name : " + typeof this.props.stationName)}
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
        backgroundColor: "#9C9C9C"
    },
})
