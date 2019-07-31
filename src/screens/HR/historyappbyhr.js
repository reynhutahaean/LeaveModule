import React, { Component } from 'react'
import { View, TextInput, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native'
import Resource from '../../network/Resource'
import { Dropdown } from 'react-native-material-dropdown'
import DatePicker from 'react-native-datepicker'
import { Button, Text, Item, Input, Icon } from 'native-base'
import moment from 'moment'

const myStyle = StyleSheet.create({
  form: {
    borderColor: "#d9d9d9",
    backgroundColor: "#FEFEFE",
    borderWidth: 1,
    height: 40,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    marginTop: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  title: {
    fontSize: 16,
    fontFamily: "Lato-Black",
    marginTop: 15
  }
});

const leave = [
  { value: 0, label: 'Compliment' },
  { value: 1, label: 'Sick' },
  { value: 2, label: 'Unpaid' },
  { value: 3, label: 'Full Day' },
  { value: 4, label: 'Half Day ' }
]

export default class approvalsm extends Component {

  constructor(props) {

    super(props)

    this.data = this.props.navigation.getParam("data", null)

    this.state = {
      leaveType: this.data.leaveType,
      startDate: moment(this.data.startDate).format('dddd, D MMMM YYYY'),
      endDate: moment(this.data.endDate).format('dddd, D MMMM YYYY'),
      totalLeaveTaken: this.data.totalLeaveTaken,
      purpose: this.data.purpose,
      jobOverTo: this.data.jobOverTo,
      project: this.data.project,
      sm: this.data.sm,
      textDisabled: false,
      answer : "",
      disableButton : true
    }
  }

  submitLeave() {
    let body = {
      "leaveType": this.state.leaveType,
      "startDate": this.state.startDate,
      "endDate": this.state.endDate,
      "totalLeaveTaken": this.state.totalLeaveTaken,
      "purpose": this.state.purpose,
      "jobOverTo": this.state.jobOverTo,
      "project": this.state.project,
      "sm": this.state.sm,
      "answer" : this.state.answer
    }

    Resource.editLeave(body, this.data.id)
      .then((res) => {
        this.resetForm();
        // Alert.alert(
        //   'Request has been edited',
        //   'Press OK',
        //   [
        //     { text: 'OK', onPress: () => this.props.navigation.navigate("DetailScreen") },
        //   ],
        // );
        alert(JSON.stringify(body))
      })
      .catch((err) => {
        alert(JSON.stringify(err))
      })
  }

  resetForm() {
    this.setState({
      leaveType: "",
      startDate: "",
      endDate: "",
      totalLeave: 0,
      purpose: "",
      jobOverTo: "",
      project: "",
      sm: ""
    })
  }

  // validateButton () {

  //   if (answer != "") {
  //     this.setState({
  //       enableButton: true,
  //       disableButton: false,
  //     })
  //   } else {
  //     this.setState({
  //       enableButton: false,
  //       disableButton: true,
  //     })
  //   }
  // }

  dateChangeDelegate(date) {

    var totalLeave = moment(date).diff(moment(this.state.StartDate), 'days')

    this.setState({
      endDate: date,
      totalLeaveTaken: totalLeave,
    })
  }

  render() {

    let approval = [
      { value: 'Yes' },
      { value: 'No' },
    ]

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

    var today = moment().add(1, 'days');
    var next = moment(this.state.startDate).add(1, 'days');

    return (
      <View>
        <ScrollView style={{ marginBottom: 100, backgroundColor: "#fafafa"}}>
          <View style={{ paddingTop: 10, paddingLeft: 50, paddingRight: 70, marginBottom:10, flex: 1}}>
            <Text style={myStyle.title}>Leave Type</Text>
            <Dropdown
              label='Choose Leave Type'
              value={this.leaveTypeLabel}
              onChangeText={(leaveType) => { this.setState({ leaveType }) }}
            />
            <Text style={{ fontSize: 16, fontFamily: "Lato-Black", marginTop: 10 }}>Start Date</Text>
            <DatePicker
              style={{ width: 275 }}
              date={this.state.startDate}
              disabled={true}
              mode="date"
              format="dddd, D MMMM YYYY"
              iconSource={require("../../assets/images/calendar.png")}
              customStyles={{
                dateIcon: {
                  position: 'absolute',
                  left: 0,
                  top: 17,
                  marginLeft: 0,
                  height: 30,
                  width: 28
                },
                dateInput: {
                  marginLeft: 36,
                  top: 7,
                  borderColor: "#d9d9d9",
                  borderTopColor: "#FFFFFF",
                  borderLeftColor: "#FFFFFF",
                  borderRightColor: "#FFFFFF",
                },
                disabled: {
                  marginLeft: 36,
                  top: 7,
                  borderColor: "#d9d9d9",
                  borderTopColor: "#FFFFFF",
                  borderLeftColor: "#FFFFFF",
                  borderRightColor: "#FFFFFF",
                  backgroundColor: "#FFFFFF"
                }
              }}
              onDateChange={(date) => { this.setState({ startDate: date }) }}
            />
            <Text style={{ fontSize: 16, fontFamily: "Lato-Black", marginTop: 20 }}>End Date</Text>
            <DatePicker
              style={{ width: 275 }}
              date={this.state.endDate}
              mode="date"
              disabled={true}
              format="dddd, D MMMM YYYY"
              minDate={next}
              maxDate="2020-01-01"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              iconSource={require("../../assets/images/calendar.png")}
              customStyles={{
                dateIcon: {
                  position: 'absolute',
                  left: 0,
                  top: 17,
                  marginLeft: 0,
                  height: 30,
                  width: 28
                },
                dateInput: {
                  marginLeft: 36,
                  top: 7,
                  borderColor: "#d9d9d9",
                  borderTopColor: "#FFFFFF",
                  borderLeftColor: "#FFFFFF",
                  borderRightColor: "#FFFFFF",
                },
                disabled: {
                  marginLeft: 36,
                  top: 7,
                  borderColor: "#d9d9d9",
                  borderTopColor: "#FFFFFF",
                  borderLeftColor: "#FFFFFF",
                  borderRightColor: "#FFFFFF",
                  backgroundColor: "#FFFFFF"
                }
              }}
              onDateChange={(date) => this.dateChangeDelegate(date)}
            />
            <Text style={{ ffontSize: 16, fontFamily: "Lato-Black", marginTop: 25 }}>Total Leave Taken</Text>
            <Item disabled style={myStyle.form}>
              <TextInput
                value={this.state.totalLeaveTaken.toString()}
                onChangeText={(totalLeaveTaken) => this.setState({ totalLeaveTaken })}>
              </TextInput>
            </Item>
            <Text style={myStyle.title}>Purpose</Text>
            <TextInput
              editable={this.state.textDisabled}
              style={myStyle.form} value={this.state.purpose}
              onChangeText={(purpose) => this.setState({ purpose })}>
            </TextInput>
            <Text style={myStyle.title}>Job Handed To</Text>
            <TextInput
              editable={this.state.textDisabled}
              style={myStyle.form} value={this.state.jobOverTo}
              onChangeText={(jobOverTo) => this.setState({ jobOverTo })}>
            </TextInput>
            <Text style={myStyle.title}>Project</Text>
            <Dropdown
              editable={this.state.textDisabled}
              label='Choose Your Project'
              value={this.state.project}
              onChangeText={(project) => this.setState({ project })}
            />
            <Text style={myStyle.title}>Scrum Master</Text>
            <Dropdown
              label='Choose Your Scrum Master'
              value={this.state.sm}
              onChangeText={(sm) => this.setState({ sm })}
            />
            <Text style={myStyle.title}>Approval</Text>
            <Dropdown
              label='Yes/No'
              value={this.state.answer}
              data={approval}
              onChangeText={(answer) => { 
                if (answer != "") {
                  this.setState({
                    enableButton: true,
                    disableButton: false,
                  })
                } else {
                  this.setState({
                    enableButton: false,
                    disableButton: true,
                  })
                }
                this.setState({ answer })}}
            />
          </View>
        </ScrollView>
        <View style={{ flex: 1, justifyContent: "flex-end" }}>
          <Button full style={{ backgroundColor: "#0077BC", height: 55, margin: 20, borderRadius: 5, display: this.state.enableButton ? "flex" : "none"}} onPress={() => this.submitLeave()}>
            <Text style={{ fontWeight: 'bold', fontSize: 18 }}>SAVE</Text>
          </Button>
          <Button disabled full style={{ backgroundColor: "#cfcfcf", height: 55, margin: 20, borderRadius: 5, display: this.state.disableButton ? "flex" : "none" }}>
            <Text style={{ fontWeight: 'bold', fontSize: 18 }}>SAVE</Text>
          </Button>
        </View>
      </View>
    )
  }
}
