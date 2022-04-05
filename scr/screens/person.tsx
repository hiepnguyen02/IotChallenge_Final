import React from "react";
import { Text, View, StyleSheet, SectionList, StatusBar } from 'react-native';
function Personal() {

    const DATA = [
        {
            title: "Thông tin cá nhân",
            data: ["Họ và tên: Nguyễn Văn Hiệp", "Tuổi: 20", "Cân nặng: 53 kg", "Chiều cao: 170 cm"]
        },
        {
            title: "Tiểu sử bệnh nền",
            data: ["Không có"]
        },
        {
            title: "Tiểu sử nhiễm Covid",
            data: ["Ngày nhiễm: 17/02/2022", "Triệu chứng: Ho, sốt, ớn lạnh"]
        },
        {
            title: "Lời khuyên từ chuyên gia",
            data: ["Tập thể dục đều đặn", "Đeo khẩu trang thường xuyên để tránh tái nhiễm"]
        }
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
export default Personal