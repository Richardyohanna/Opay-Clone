
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const RewardScreen = () => {

    return (
        <View style = {style.bg}>
            <Text>Reward Screen</Text>
        </View>
    )
}

export default RewardScreen;

const style = StyleSheet.create({
    bg : {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#1B1B1B",
    },  
})