
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ProfileScreen = () => {

    return (
        <View style = {style.bg}>
            <Text>Profile Screen</Text>
        </View>
    )
}

export default ProfileScreen;

const style = StyleSheet.create({
    bg : {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#1B1B1B",
    },  
})