import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import {
  Text,
  Item,
  Label,
  Input,
  Button,
} from 'native-base';
import firebase from './config'
import Form from 'react-native-form'

export default class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
     };
     this.itemsRef = firebase.database().ref().child(`people`)
  }

  pushToFirebase() {
    let formValues = this.refs.soulForm.getValues()
    this.itemsRef.push(formValues)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Sell your SOUL to the devil
        </Text>
        <Text style={styles.text}>
          All you have to do is sign here
        </Text><Text></Text><Text></Text>
        <Form ref="soulForm" style={styles.form} >
          <Item floatingLabel style={{marginTop:10}}>
            <Label style={{marginLeft: 15}}>First name</Label>
            <Input style={{marginLeft: 25}} name="firstName" type="TextInput" />
          </Item>
          <Item floatingLabel style={{marginTop:10}}>
            <Label style={{marginLeft: 15}}>Last name</Label>
            <Input style={{marginLeft: 25}} name="lastName" type="TextInput" />
          </Item>
          <Item floatingLabel style={{marginTop:10}}>
            <Label style={{marginLeft: 15}}>Signature</Label>
            <Input style={{marginLeft: 25}} name="signature" type="TextInput" />
          </Item>
            <Button Block primary onPress={() => this.pushToFirebase()} style={styles.button}><Text>Sell it</Text></Button>
        </Form>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
  },
  text: {
    textAlign: 'left',
    color: '#333333',
    marginBottom: 5,
  },
  form: {
    width: '80%'
  },
  button: {
    margin: 10
  }
});
