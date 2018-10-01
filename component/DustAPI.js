import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native'

export default class DustAPI extends Component {

    render() { 
        const mise = this.props.pm10Value.map((data) => {
            return <Text style={styles.textstyle}>{data}</Text>
        })
        const stationName = this.props.stationName.map((data) => {
            return <Text style={styles.textstyle}>{data}</Text>
        })
        alert(mise)
        return (
            <View>
                <FlatList
                    data={mise}
                    renderItem={({data}) => <Text style={styles.textstyle}>{data}</Text>}
                    />
                
            </View>
        )
    }   
}

const styles = StyleSheet.create({
    textstyle: {
        fontSize: 20,
        flex: 1,
        height: 30,
    }
})