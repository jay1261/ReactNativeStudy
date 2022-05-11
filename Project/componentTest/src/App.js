import React from 'react';
import { Text, TextInput, View } from 'react-native';
import MyButton from './components/MyButtom';
import Counter from './components/Counter';
import EventInput from './components/EventInput';

const App = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text style={{ fontSize: 30, marginBottom: 10 }}>My Button Component</Text>
      
      {/* <MyButton title ="Button" onPress={()=>alert('props')}/>
      <MyButton title ="Button" onPress={()=>alert('Children')}>Children Props</MyButton>
      <MyButton onPress={()=>alert('default')}/>
      <Counter/> */}
        <TextInput/>
      </View>
  );
};

export default App;