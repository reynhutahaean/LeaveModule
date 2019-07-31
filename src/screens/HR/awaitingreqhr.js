import React, { Component } from 'react'
import { View, FlatList, TouchableOpacity, Image, Text, RefreshControl} from 'react-native'
import Resource from '../../network/Resource'
import { Icon, Right } from 'native-base'

export default class mainsm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      data: [],
    }
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    this.setState({ loading: true })

    Resource.getLeave()
      .then((res) => {
        this.setState({ loading: false, data: res.data })      })
      .catch((err) => {
        alert(err)
      })
  }

  render() {
    return (
      <View style={{flex:1, backgroundColor:"#fafcff"}}>
        <FlatList
          refreshControl={
            <RefreshControl
              refreshing={this.state.loading}
              onRefresh={() => this.getData()}
            />
          }
          data={this.state.data}
          renderItem={({ item, index }) => (
            <TouchableOpacity onPress={() => {
              this.props.navigation.navigate("ApprovalScreenHR", {
                data: this.state.data[index]
              })
            }
            }>
              <View style={{padding: 10, flexDirection: "row", borderTopWidth: 0.3, borderTopColor: "#808080" }}>
                <View >
                  <Text style={{ fontSize: 17, fontFamily: "Lato-Medium" }}>{item.employeeName}</Text>
                  <Text style={{ fontSize: 12, fontFamily: "Lato" }}>{item.purpose}</Text>
                </View>
                <Right>
                  <Icon style={{color : "#808080", fontSize:20}} name="arrow-forward" 
                  onPress={() => this.props.navigation.navigate("ApprovalScreenHR")} />
                </Right>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    )
  }
}
