import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Button, ScrollView, Alert, RefreshControl } from 'react-native'
import moment from 'moment'
import Resource from '../network/Resource'

const myStyles = StyleSheet.create({
  Title: {
    fontSize: 20,
    marginTop: 15,
    fontFamily: "Lato-Medium"
  },
  TouchableOpacityStyle: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})

export default class detailrequest extends Component {
  constructor(props) {
    super(props);

    this.leaveTypeLabel = ""

    this.startDateLabel = ""

    this.endDateLabel = ""

    this.data = this.props.navigation.getParam("data", null)

    this.state = {
      loading: false
    };
  }

  deleteLeave(leave) {
    let id = leave.id

    Resource.deteleLeave(id)
      .then((res) => {
        Alert.alert(
          'Request has been deleted',
          'Press OK to Home',
          [
            { text: 'OK', onPress: () => this.props.navigation.navigate("MainScreen") },
          ],
          { cancelable: false },
        );
        this.deleteItemById(leave.id)
      })
  }

  deleteItemById(id) {
    const filteredData = this.data.filter(item => item.id !== id);
    this.setState({ data: filteredData });
  }

  render() {

    switch (this.data.leaveType) {
      case 0:
        this.leaveTypeLabel = "Compliment"
        break;

      case 1:
        this.leaveTypeLabel = "Sick"
        break;

      case 2:
        this.leaveTypeLabel = "Unpaid"
        break;

      case 3:
        this.leaveTypeLabel = "Full Day"
        break;

      case 4:
        this.leaveTypeLabel = "Half Day"
    }

    if (this.data.leaveType == 4) {
      this.startDateLabel = moment(this.data.startDate).format('dddd, D MMMM YYYY H:mm')
      this.endDateLabel = moment(this.data.endDate).format('dddd, D MMMM YYYY H:mm')
    } else {
      this.startDateLabel = moment(this.data.startDate).format('dddd, D MMMM YYYY')
      this.endDateLabel = moment(this.data.endDate).format('dddd, D MMMM YYYY')
    }

    return (
      <View>
        <View style={myStyles.TouchableOpacityStyle}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("EditScreen", { data: this.data })}>
            <View>
              <Text style={{ color: "#1a60ed", fontSize: 20, fontFamily: "Lato-Medium"}}>Edit</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.deleteLeave(this.data)}>
            <View>
              <Text style={{ color: "#bf0000", fontSize: 20, fontFamily: "Lato-Medium"}}>Delete</Text>
            </View>
          </TouchableOpacity>
        </View>
        <ScrollView 
          refreshControl={
          <RefreshControl
            refreshing={this.state.loading}
          />
          }
          >
          <View style={{ paddingTop: 5, paddingLeft: 50, paddingRight: 50,paddingBottom: 90 }}>
            <View>
              <Text style={myStyles.Title}>Name</Text>
              <Text>{this.data.employeeName}</Text>
              <Text style={myStyles.Title}>Leave Type</Text>
              <Text>{this.leaveTypeLabel}</Text>
              <Text style={myStyles.Title}>Start Date</Text>
              <Text>{this.startDateLabel}</Text>
              <Text style={myStyles.Title}>End Date</Text>
              <Text>{this.endDateLabel}</Text>
              <Text style={myStyles.Title}>Total Leave Taken</Text>
              <Text>{this.data.totalLeaveTaken} days</Text>
              <Text style={myStyles.Title}>Purpose</Text>
              <Text>{this.data.purpose}</Text>
              <Text style={myStyles.Title}>Job Handed To</Text>
              <Text>{this.data.jobOverTo}</Text>
              <Text style={myStyles.Title}>Status Request</Text>
              <Text>Waiting</Text>
              <Text style={myStyles.Title}>Scrum Master</Text>
              <Text>-</Text>
              <Text style={myStyles.Title}>Human Resource</Text>
              <Text>-</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    )
  }
}
