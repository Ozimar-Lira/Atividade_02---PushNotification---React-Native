import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity, Text, Image} from 'react-native';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa9SgmdBSXJ43lywtpx8r0jrrb0Ab_GIzpOw&usqp=CAU',
          }}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={this.props.MandarNotificacao}>
          <Text>Enviar notificação</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={this.props.CancelarNotificacao}>
          <Text>Cancelar notificações</Text>
        </TouchableOpacity>
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
  tinyLogo: {
    width: 150,
    height: 150,
  },
});
