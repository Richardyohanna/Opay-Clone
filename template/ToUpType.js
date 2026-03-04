
import React from "react";
import {View, Text, StyleSheet, Pressable} from "react-native";

const ToUpType = ({Amount, cashback}) => {
    return (
        <Pressable style = {style.p_bg}>
            <View style= {style.top}>
                <Text style = {{color: "#15C292", fontSize: 11}}> ₦ {cashback} cashback</Text>
            </View>
            <Text style = {{color: "rgba(255,255,255,0.7)", fontSize: 18, marginTop: 25}}>₦ {Amount} </Text>
        </Pressable>
    )
}

export default ToUpType;

const style = StyleSheet.create({
    p_bg : {
        position: "relative",
        backgroundColor: "#262626",
        borderRadius: 20,
        width: 105.6,
        height: 67,
        alignItems: "center",

    },
    top: {
        position: "absolute",
        width: 105.6,
        height: 14,
        backgroundColor: "#1B1B1B",
        alignItems: "center",
        justifyContent: "center",
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        

    }
})