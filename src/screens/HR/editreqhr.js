import React, { Component } from 'react'
import { View, TextInput, StyleSheet, ScrollView, Alert } from 'react-native'
import Resource from '../../network/Resource'
import { Dropdown } from 'react-native-material-dropdown'
import DatePicker from 'react-native-datepicker'
import { Button, Text } from 'native-base'
import moment from 'moment'

const myStyle = StyleSheet.create({
  form: {
    borderColor: "#d9d9d9",
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    height: 45,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    marginTop: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 0.1,

    elevation: 0,
  },
  title: {
    fontSize: 17,
    fontFamily: "Lato-Medium",
    marginTop: 15
  },
  container: {
    flex: 1,
    padding: 8,
    paddingTop: 50
  },
  error: {
    borderColor: 'red',
    backgroundColor: "#FEFEFE",
    borderWidth: 2,
    height: 45,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    marginTop: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 0.1,

    elevation: 0,
  },
  errorTextLabel: {
    color: 'red',
  }
});

const leave = [
  { value: 0, label: 'Compliment' },
  { value: 1, label: 'Sick' },
  { value: 2, label: 'Unpaid' },
  { value: 3, label: 'Full Day' },
  { value: 4, label: 'Half Day ' }
]

const projects = [
  { value: 'Internet Banking', label: 'Internet Banking' },
  { value: 'Ecommerce', label: 'E-Commerce' }
]

const sm = [
  { value: "Ryan", label: 'Ryan' },
  { value: "Marisa", label: 'Marisa' }
]

export default class editreqhr extends Component {

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
      endDateVisible: true,
      timeVisible: false,
      startTime: "",
      endTime: "",
      textDisabled: false,
      purposeValidate: true,
      jobhandedValidate: true,
      projectValidate: true,
      enableButton: false,
      disableButton: true,
      errorPurpose: false,
      errorJobHanded: false,
      textLabelError: true,
      textLabelSuccess: false,
      employeeId : this.data.employeeId
    }
  }

  validate(text, type) {
    alph = /^[a-zA-Z" "]+$/
    error = /^[""]+$/
    if (type == 'purpose') {
      if (alph.test(text) && !error.test(text)) {
        this.setState({
          purposeValidate: true,
          errorPurpose: false
        })
      } else {
        this.setState({
          purposeValidate: false,
          errorPurpose: true
        })
      }
    }
    else if (type == 'jobhanded') {
      if (alph.test(text) && !error.test(text)) {
        this.setState({
          jobhandedValidate: true,
          errorJobHanded: false
        })
      } else {
        this.setState({
          jobhandedValidate: false,
          errorJobHanded: true
        })
      }
    }

    const { purpose, jobOverTo } = this.state
    if ((purpose != "") && (jobOverTo != "")) {
      if (alph.test(text)) {
        this.setState({
          enableButton: true,
          disableButton: false,
          textLabelError: false,
          textLabelSuccess: true
        })
      }
      else {
        this.setState({
          enableButton: false,
          disableButton: true,
          textLabelError: true,
          textLabelSuccess: false
        })
      }
    }
  }

  submitLeave() {
    var startDate, endDate

    if (this.state.LeaveType == 4) {
      startDate = this.state.StartDate + " " + this.state.startTIme
      endDate = this.state.StartDate + " " + this.state.endTime
    } else {
      startDate = this.state.StartDate
      endDate = this.state.EndDate
    }

    let body = {
      "leaveType": this.state.leaveType,
      "startDate": startDate,
      "endDate": endDate,
      "totalLeaveTaken": this.state.totalLeaveTaken,
      "purpose": this.state.purpose,
      "jobOverTo": this.state.jobOverTo,
      "employeeId" : this.state.employeeId
    }

    Resource.createLeave(body)
      .then((res) => {
        this.resetForm();
        // Alert.alert(
        //   'Request has been created',
        //   'Press OK to Home',
        //   [
        //     { text: 'OK', onPress: () => this.props.navigation.navigate("MainScreenSm") },
        //   ],
        //   { cancelable: false },
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
      totalLeaveTaken: 0,
      purpose: "",
      jobOverTo: "",
      employeeId : 2,
      showText: false
    })
  }

  dateChangeDelegate(date) {

    var totalLeave = moment(date).diff(moment(this.state.startDate).add(-1, 'days'), 'days')

    this.setState({
      endDate: date,
      totalLeaveTaken: totalLeave,
    })
  }

  render() {

    var today = moment().add(1, 'days');
    var next = moment(this.state.startDate);

    if (this.state.leaveType == 0 || this.state.leaveType == 1) {
      today = ""
      next = ""
    } else {
      today = today
      next = next
    }

    if (this.state.startDate == "") {
      next = moment().add(1, 'days')
    } else {
      next = next
    }

    return (
      <View>
        <ScrollView style={{ marginBottom: 100, backgroundColor: "#fafafa"}}>
          <View style={{ paddingTop: 10, paddingLeft: 50, paddingRight: 70, marginBottom:10, flex: 1}}>
            <Text style={myStyle.title}>Leave Type</Text>
            <Dropdown
              label='Choose Leave Type'
              value={this.state.leaveType}
              data={leave}
              onChangeText={(leaveType) => {
                if (leaveType == 4) {
                  this.setState({ endDateVisible: false, timeVisible: true })
                  this.state.totalLeaveTaken = 0.5
                }
                else {
                  this.setState({ endDateVisible: true, timeVisible: false })
                  this.state.totalLeaveTaken = 0
                }
                this.setState({ leaveType })
              }}
            />
            <Text style={{ fontSize: 16, fontFamily: "Lato-Medium", marginTop: 10 }}>Start Date</Text>
            <DatePicker
              style={{ width: 275 }}
              date={this.state.startDate}
              mode="date"
              placeholder="Select Start Project Date"
              format="dddd, D MMMM YYYY"
              minDate={today}
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
                }
              }}
              onDateChange={(date) => { this.setState({ startDate: date }) }}
            />
            <Text style={{ fontSize: 16, fontFamily: "Lato-Medium", marginTop: 20, display: this.state.endDateVisible ? "flex" : "none" }}>End Date</Text>
            <DatePicker
              style={{ width: 275, display: this.state.endDateVisible ? "flex" : "none" }}
              date={this.state.endDate}
              mode="date"
              placeholder="Select End Project Date"
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
                }
              }}
              onDateChange={(date) => this.dateChangeDelegate(date)}
            />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ fontSize: 16, fontFamily: "Lato-Medium", marginTop: 20, display: this.state.timeVisible ? "flex" : "none" }}>From</Text>
              <Text style={{ fontSize: 16, fontFamily: "Lato-Medium", marginTop: 20, marginRight: 100, display: this.state.timeVisible ? "flex" : "none" }}>To</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <DatePicker
                style={{ width: 120, display: this.state.timeVisible ? "flex" : "none" }}
                date={this.state.startTIme}
                placeholder="Select Time"
                mode="time"
                format="H:mm"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                iconSource={require("../../assets/images/clock.png")}
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
                  }
                }}
                onDateChange={(date) => { this.setState({ startTIme: date }) }}
              />
              <DatePicker
                style={{ width: 120, display: this.state.timeVisible ? "flex" : "none" }}
                date={this.state.endTime}
                placeholder="Select Time"
                mode="time"
                format="HH:mm"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                iconSource={require("../../assets/images/clock.png")}
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
                  }
                }}
                onDateChange={(date) => { this.setState({ endTime: date }) }}
              />
            </View>
            <Text style={{ fontSize: 16, fontFamily: "Lato-Medium", marginTop: 25 }}>Total Leave Taken</Text>
            <TextInput onSubmitEditing={this.submitLeave}
              style={myStyle.form}
              editable={this.state.textDisabled}
              value={this.state.totalLeaveTaken.toString()}
              onChangeText={(totalLeaveTaken) => this.setState({ totalLeaveTaken })}>
            </TextInput>
            <Text style={myStyle.title}>Purpose</Text>
            <TextInput
              value={this.state.purpose}
              style={[myStyle.form, !this.state.purposeValidate ? myStyle.error : null]}
              onChangeText={(purpose) => {
                this.validate(purpose, 'purpose')
                this.setState({ purpose })
              }}>
            </TextInput>
            <TextInput style={{display : this.state.showText ? "flex" : "none"}} 
              value = {this.state.employeeId} />
            <Text style={{ display: this.state.errorPurpose ? "flex" : "none", color: 'red', fontSize: 12 }}>Form must be alphabet and not Empty</Text>
            <Text style={myStyle.title}>Job Handed To</Text>
            <TextInput
              value={this.state.jobOverTo}
              style={[myStyle.form, !this.state.jobhandedValidate ? myStyle.error : null]}
              onChangeText={(jobOverTo) => {
                this.validate(jobOverTo, 'jobhanded')
                this.setState({ jobOverTo })
              }}>
            </TextInput>
            <Text style={{ display: this.state.errorJobHanded ? "flex" : "none", color: 'red', fontSize: 12 }}>Form must be alphabet and not Empty</Text>
          </View>
        </ScrollView>
        <View style={{ flex: 1, justifyContent: "flex-end" }}>
          <Button full style={{ backgroundColor: "#0077BC", height: 45, margin:20, borderRadius: 5, display: this.state.enableButton ? "flex" : "none" }} onPress={() => this.submitLeave()}>
            <Text style={{ fontWeight: 'bold', fontSize: 18 }}>SUBMIT</Text>
          </Button>
          <Button disabled full style={{ backgroundColor: "#cfcfcf", height: 45, margin: 20, borderRadius: 5, display: this.state.disableButton ? "flex" : "none" }}>
            <Text style={{ fontWeight: 'bold', fontSize: 18 }}>SUBMIT</Text>
          </Button>
        </View>
      </View>
    )
  }
}
