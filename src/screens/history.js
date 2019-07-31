import React, { Component } from 'react'
import { View } from 'react-native'
import { Container, Header, Content, List, ListItem, Text, Left, Right, Icon } from 'native-base';

export default class history extends Component {
  render() {
    return (
      <Container>
        <Content>
          <List>
            <ListItem selected>
              <Left>
                <Text style={{fontFamily : "Lato-Medium"}}>Pulang Kampung</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" onPress={() => this.props.navigation.navigate("DetailHistoryScreen")} />
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text style={{fontFamily : "Lato-Medium"}}>Sakit Tifus</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text style={{fontFamily : "Lato-Medium"}}>Menjenguk Orang Tua</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    )
  }
}
