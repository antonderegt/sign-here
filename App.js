import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button
} from 'react-native';

export default class App extends Component{
  constructor(props) {
    super(props);
    this.state = { 
      firstName: 'Thomas',
      lastName: 'Ranger',
      signature: ''
     };
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
        <View style={styles.form}>
          <Text style={styles.formText}>
            First Name
          </Text>
          <TextInput
          style={styles.textInput}
          onChangeText={(firstName) => this.setState({firstName})}
          value={this.state.firstName}
        />
          <Text style={styles.formText}>
            Last Name
          </Text>
          <TextInput
            style={styles.textInput}
            onChangeText={(lastName) => this.setState({lastName})}
            value={this.state.lastName}
          />
          <Text style={styles.formText}>
            Signature
          </Text>
          <TextInput
            style={styles.signatureInput}
            onChangeText={(signature) => this.setState({signature})}
            value={this.state.signature}
            multiline = {true}
          />
          <Button
            onPress={()=>console.log('Pressed')}
            title="SELL IT"
            color="#841584"
          />
          </View>
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
    width: '65%',
    backgroundColor: '#F5FCFF',
  },
  formText: {
    fontWeight: 'bold'
  },
  textInput: {
    textAlign: 'left',
    color: '#333333',
    backgroundColor: '#FFF',
    marginBottom: 5,
  },
  signatureInput: {
    textAlign: 'left',
    color: '#333333',
    backgroundColor: '#FFF',
    marginBottom: 5,
    height: 60
  },
});
