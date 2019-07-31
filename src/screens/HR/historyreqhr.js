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
                <Text>Pulang Kampung</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" onPress={() => this.props.navigation.navigate("DetailHistoryScreen")} />
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text>Sakit Tifus</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text>Menjenguk Orang Tua</Text>
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
