import React from "react";
import { Text, View, StyleSheet, SectionList, StatusBar} from 'react-native';
function Devices() {
    const DATA = [
        {
            title: "Thiết bị đang kết nối",
            data: ["BGM220_air_quality"]
        },
        {
            title: "Thiết bị lân cận",
            data: ["BGM1", "BGM2", "BGM3"]
        },
        {
            title: "Tình trạng người xung quanh",
            data: ["BGM1 là F0", "BGM2 là F1"]
        },
    ];

    const Item = ({ title }) => (
        <View style={styles.item}>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            paddingTop: StatusBar.currentHeight,
            marginHorizontal: 16
        },
        item: {
            backgroundColor: "#f9c2ff",
            padding: 20,
            marginVertical: 8
        },
        header: {
            fontSize: 32,
            backgroundColor: "#fff"
        },
        title: {
            fontSize: 24
        }
    });

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <SectionList
                sections={DATA}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => <Item title={item} />}
                renderSectionHeader={({ section: { title } }) => (
                    <Text style={styles.header}>{title}</Text>
                )}
            />
        </View>
    );
}
export default Devices