
import {Pressable, Text } from "react-native";

const Button = () =>{
  // const _onPressIn = () => console.log('Press In');
  // const _onPressOut = () => console.log('Press Out');
  // const _onPress = () => console.log('Press');
  // const _onLongPress = () => console.log('Long Press');

  return (
    <Pressable
    style={{
      backgroundColor: '#f1c40f',
      padding: 16,
      margin: 10,
      borderRadius: 8,
    }}
    onPressIn={() => console.log('Press In')}
    onPressOut={() => console.log('Press Out')}
    onPress={() => console.log('Press')}
    onLongPress={() => console.log('Long Press')}
    >
      <Text style = {{collor : 'white', fontsize:24}}>press</Text>
    </Pressable>
  );
}

export default Button;