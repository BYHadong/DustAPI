import React, { Component } from 'react'
import { Text, View, SectionList, StyleSheet } from 'react-native'

export default class DustAPI extends Component {
    render() {
        return (
            <View>
                <SectionList
                    sections={[{ title: this.props.stationName, data: this.props.mise }]}
                    renderItem={({ item }) => <Text style={styles.textstyle}>{item}</Text>}
                    renderSectionHeader={({ section }) => <Text style={styles.list}>{section.title}</Text>}
                    keyExtractor={(item, index) => index}
                />
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