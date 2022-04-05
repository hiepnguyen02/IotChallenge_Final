import * as React from 'react';
import { SafeAreaView, Button, Text, View, TextInput, StyleSheet } from 'react-native';
import Input from '../components/Input';
function SignUp() {
    const styles = StyleSheet.create({
        container: {
            marginBottom: "auto",
            marginTop: "auto",
        },
        button: {
            width: 120,
            marginRight: "auto",
            marginLeft: "auto",
            padding:20,
        },
    })
    return (
        <SafeAreaView style={styles.container}>
            <Input />
            <View style={styles.button}>
                <Button title='đăng kí' color={'#FB041E'}/>
            </View>
        </SafeAreaView>
    );
}
export default SignUp;