import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';

export default class Mensagem1 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Essa é a tela de Mensagem aleatória</Text>
      </View>
    );
  }
}

/* Estilização do projeto */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 200,
    marginTop: 10,
  },
});
