import React from 'react';
import {Text, View, Image, TextInput} from 'react-native';

const App = () => {
  return (
    <View style={{width: 300, height: 100, backgroundColor: 'yellow'}}>
      <Text>Agus</Text>
      <Text>Tiranda</Text>
      <Onux />
      <Text>belajar ReactNative</Text>
      <Image source={{uri: 'https://batamlinux.or.id/template/images/logo.png'}}
      style={{width: 150, height: 150}}/>
      <TextInput style={{borderWidth: 1}}/>
    </View>
  );
};

const Onux = () => {
  return <Text>onux</Text>;
};

export default App;