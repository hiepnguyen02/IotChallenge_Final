import * as React from 'react';
import { SafeAreaView, Button, Text, View, TextInput, StyleSheet } from 'react-native';
import Input from '../components/Input';

function Login ({ navigation }) {
    const styles=StyleSheet.create({
        container: {
             marginBottom: "auto",
             marginTop: "auto",
        },
        button: {
            width: 120,
            marginRight: "auto",
            marginLeft: "auto",
            padding:10,
        },
    })
    return (
        <SafeAreaView style={styles.container}>
            <Input/>
            <View style={styles.button}>
                <Button title='đăng nhập' onPress={() => navigation.navigate('Home')}/>
            </View>
            <View style={styles.button}>
                <Button title='đăng kí' onPress={() => navigation.navigate('Đăng kí')} color={'#FB041E'} />
            </View>
        </SafeAreaView>
    );
}
export default Login