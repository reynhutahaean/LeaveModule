import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Button, ScrollView } from 'react-native'

const myStyles = StyleSheet.create({
    Title: {
      fontSize: 18,
      marginTop: 15,
      fontFamily: "Lato-Black"
    }
  })

export default class detailhistory extends Component {
    render() {
        return (
          <ScrollView>
            <View style={{ paddingTop: 20, paddingLeft: 50, paddingRight: 50 }}>
              <Text style={myStyles.Title}>Name</Text>
              <Text>Alexander Salim</Text>
              <Text style={myStyles.Title}>Leave Type</Text>
              <Text>Full Day (Annual Leave)</Text>
              <Text style={myStyles.Title}>Start Date</Text>
              <Text>Monday, 15 Agustus 2019</Text>
              <Text style={myStyles.Title}>End Date</Text>
              <Text>Monday, 22 Agustus 2019</Text>
              <Text style={myStyles.Title}>Total Leave Taken</Text>
              <Text>7 Days</Text>
              <Text style={myStyles.Title}>Purpose</Text>
              <Text>Pulang Kampung</Text>
              <Text style={myStyles.Title}>Job Handed To</Text>
              <Text>Puteri Grace</Text>
              <Text style={myStyles.Title}>Department</Text>
              <Text>Software Tailor</Text>
              <Text style={myStyles.Title}>Position</Text>
              <Text>Product Owner</Text>
              <Text style={myStyles.Title}>Status Request</Text>
              <Text>Approved</Text>
              <Text style={myStyles.Title}>Scrum Master</Text>
              <Text>Ryan</Text>
              <Text style={myStyles.Title}>Human Resource</Text>
              <Text>Jackson</Text>
            </View>
            </ScrollView>
        )
      }
}