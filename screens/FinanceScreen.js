
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const FinanceScreen = () => {

    return (
        <View style = {style.bg}>
            <Text>Finance Screen</Text>
        </View>
    )
}

export default FinanceScreen;

const style = StyleSheet.create({
    bg : {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#1B1B1B",
    },  
})