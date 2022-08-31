// Componentes base
import React, {Component} from 'react';

// Telas
import Home from './src/pages/Home';
import Mensagem1 from './src/pages/Mensagem1';
import Mensagem2 from './src/pages/Mensagem2';
import Mensagem3 from './src/pages/Mensagem3';
import Mensagem4 from './src/pages/Mensagem4';

// Navegação
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// Notificação
import {NotificationManager} from './src/services/Notification';

// Declaração de constantes
const notificador = NotificationManager;
const Stack = createStackNavigator();

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    notificador.configure();
    notificador.createChannel();
    notificador.buildNotificationSchedule();
  }

  onPressSendNotification = () => {
    notificador.showNotification(
      1,
      'Send Food',
      'Onde o sua comida é mais gostosa',
      {}, // data
      {}, // options
    );
  };

  onPressCancelAllLocalNotification = () => {
    notificador.cancelAllLocalNotification();
  };

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home">
            {({navigation}) => {
              notificador.setNavegador(navigation);
              return (
                <Home
                  MandarNotificacao={this.onPressSendNotification}
                  CancelarNotificacao={this.onPressCancelAllLocalNotification}
                />
              );
            }}
          </Stack.Screen>

          <Stack.Screen name="Mensagem1" component={Mensagem1} />
          <Stack.Screen name="Mensagem2" component={Mensagem2} />
          <Stack.Screen name="Mensagem3" component={Mensagem3} />
          <Stack.Screen name="Mensagem4" component={Mensagem4} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
