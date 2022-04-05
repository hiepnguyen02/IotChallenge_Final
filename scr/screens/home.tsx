
import * as React from 'react';
import { useState } from 'react';
import { SafeAreaView, Button, Text, View, TextInput, StyleSheet,TouchableOpacity,Dimensions } from 'react-native';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Map from '../components/hereMap';
import TemperatureCard from '../components/TemperatureCard';
import HumidityCard from '../components/HumidityCard';

function Home() {
    const [darkTheme, setdarkTheme] = useState(true)
    const [currentAqi, setCurrentAqi] = useState('100')
    
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: darkTheme ? '#342023' : '#f2f2f2',
            alignItems: 'center',
        },
        aqi: {
            alignItems: 'center',
            flexDirection: 'row',
            marginTop: 10,
        },
        aqiText: {
            color: darkTheme ? '#e0e0e0' : 'black',
            fontSize: 30,
        },
        refreshButton: {
            marginTop: 10,
            alignSelf: 'flex-start',
        },
        cardView: {
            color: darkTheme ? 'black' : 'white',
            margin: 10,
            flexDirection: 'row',

            justifyContent: 'center',
        },
        map: {
            width: Dimensions.get('window').width,
            height: 350,
        },
        refresh: {
            paddingLeft:5,
        }


    });


    return (
        <View style={styles.container}>
            
            <TouchableOpacity style={styles.refreshButton}>
                <FontAwesome name="refresh" size={20} style={styles.refresh} color={darkTheme ? 'white' : 'black'} />
            </TouchableOpacity>


            <FontAwesome name="smile-o" size={30} color="orange" />
            <View style={styles.aqi}>
                <Text style={styles.aqiText}>{currentAqi}</Text>
            </View>

            <View style={styles.cardView}>
                <TemperatureCard backgroundColor={darkTheme ? '#ff873d' : '#cc6e30'} temperature={'28°C'} icon={1} ></TemperatureCard>
                <HumidityCard backgroundColor={darkTheme ? '#D29600' : 'FCC63F'} humidity={'88%'} icon={1}></HumidityCard>
            </View>
        </View>
    );
}
export default Home