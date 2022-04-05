import React from 'react';
import * as reactNative from 'react-native';
import * as reactNativeGestureHandler from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
function Input() {
  const [userName, onChangeUserName] = React.useState('Tên đăng nhập')
  ;
  const [pass, onChangePass] = React.useState("Nhập mật khẩu");
  const styles = reactNative.StyleSheet.create({
      input: {
      height: 40,
      margin: 12,
      borderWidth: 2,
      padding: 10,
      borderColor: "#726567"
      },
  })
  return (
    <SafeAreaView>
      <reactNativeGestureHandler.TextInput 
        style={styles.input}
        onChangeText={onChangeUserName}
        value={userName}   
      />
      <reactNativeGestureHandler.TextInput
        style={styles.input}
        onChangeText={onChangePass}
        value={pass}
      />
        </SafeAreaView>
    )
}
export default Input