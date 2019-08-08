import React, { Component } from 'react'
import { View, FlatList, TouchableOpacity, Image, Text, RefreshControl, StyleSheet } from 'react-native'
import Resource from '../network/Resource'
import { Icon, Right } from 'native-base'
import { Divider } from 'react-native-elements'
import moment from 'moment'

const myStyle = StyleSheet.create({
  box: {
    marginTop: 5, 
    marginBottom: 15,
    padding: 20,
    borderColor: "#aaa", 
    flexDirection: "row", 
    borderWidth: 0.2 , 
    borderLeftWidth: 3,
    borderLeftColor: "#00b2e3",
    backgroundColor:"#FFFFFF" ,
    borderRadius: 5,
    shadowColor: "#0077BC",
    shadowOffset: {
      width: -2,
      height: 1,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.50,

    elevation: 20,
  }
})

export default class main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      data: [],
      annual : 12
    }

    this.total = this.props.navigation.getParam('total', '')
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    this.setState({ loading: true })

    Resource.getLeave()
      .then((res) => {
        this.setState({ loading: false, data: res.data })      
      })
      .catch((err) => {
        alert(err)
      })
  }

  render() {

    return (
      <View style={{flex:1, backgroundColor: "#fafcff"}} >
        <View style={{marginBottom:30}}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("CreateScreen")}>
            <View>
              <Image source={require("../assets/images/add.jpeg")} style={{ marginLeft: 20, height: 65, width: 65, marginTop: 15 }} />
            </View>
          </TouchableOpacity>
          <Text style={{ textAlign:'right', marginTop: -55, fontSize: 13, color: "#b80413",paddingRight:10 }}>Annual Leave (Days) : {this.state.annual}</Text>
          <Text style={{ textAlign:'right', marginTop: 10, fontSize: 13, color: "#b80413", paddingRight:10 }}>    Sick Leave (Days) : 0 </Text>
        </View>
        <FlatList
          style={{paddingLeft:10, paddingRight:10}}
          refreshControl={
            <RefreshControl
              refreshing={this.state.loading}
              onRefresh={() => this.getData()}
            />
          }
          data={this.state.data}
          renderItem={({ item, index }) => (
            <TouchableOpacity onPress={() => {
              this.props.navigation.navigate("DetailScreen", {
                data: this.state.data[index]
              })
            }
            }>
            { item.employeeId == 1 ?
              <View style={myStyle.box}>
                <View>
                  <Text style={{ fontSize: 20, fontFamily: "Lato-Medium" }}>{item.purpose}</Text>
                  { item.leaveType == 0 ?
                  <Text style={{ fontSize: 12, fontFamily: "Lato" }}>Compliment</Text>
                  : item.leaveType == 1 ?
                  <Text style={{ fontSize: 12, fontFamily: "Lato" }}>Sick</Text>
                  : item.leaveType == 2 ?
                  <Text style={{ fontSize: 12, fontFamily: "Lato" }}>Unpaid</Text>
                  : item.leaveType == 3 ?
                  <Text style={{ fontSize: 12, fontFamily: "Lato" }}>Full Day</Text>
                  :
                  <Text style={{ fontSize: 12, fontFamily: "Lato" }}>Half Day</Text>
                  }
                  <Text style={{ fontSize: 12, marginTop: 5, fontStyle: 'italic', color: "#b80413" }}>Status: Waiting</Text>
                  <Divider style={{ backgroundColor: '#969696', width: 350, marginTop: 15, marginBottom: 10, marginRight: -40, marginLeft: -20 }} />
                  <View style={{flex:1, flexDirection: 'row'}}>
                    <Text style={{ fontSize: 10, marginTop: 5 }}>{moment(item.startDate).format('ddd, D MMMM YYYY')} - </Text>
                    <Text style={{ fontSize: 10, marginTop: 5 }}>{moment(item.endDate).format('ddd, D MMMM YYYY')}</Text>
                  </View>
                  <Text style={{ fontSize: 11, fontFamily: "Lato" }}>{item.totalLeaveTaken} days</Text>
                </View>
                <Right>
                  <Icon name="arrow-forward" 
                  style={{color:"#969696", marginBottom:50}}
                  onPress={() => this.props.navigation.navigate("MainTabSm")} />
                </Right>
              </View>
              :
              null
            }
            </TouchableOpacity>
          )}
        />
      </View>
    )
  }
}