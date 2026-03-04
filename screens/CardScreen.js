
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const CardScreen = () => {

    return (
        <View style = {style.bg}>
            <Text>Card Screen</Text>
        </View>
    )
}

export default CardScreen;

const style = StyleSheet.create({
    bg : {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#1B1B1B",
    },  
})