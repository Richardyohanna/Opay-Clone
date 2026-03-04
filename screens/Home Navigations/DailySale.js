import React from "react";
import {View, Text, StyleSheet, Image} from "react-native";
import AvailableSection from "./AvailableSection";

const scale = 0.36;

const DailySale = () => {

    return (
        <View style = {style.d_bg}>
            <AvailableSection/>
            <View style = {style.daily_sale}>
                <View style = {style.house_logo}>
                    <Image source = {require("../../assets/House.png")} style = {{width: 64 * scale, height: 96 * scale}}/>
                </View> 
                <Text style = {{color: "rgba(255,255,255,0.6)", fontSize : 32 * scale, letterSpacing: 1.5, fontWeight : "500"}}>
                    Business Service - Today's Sales:
                </Text>
                <Text style = {{color: "#30A684", fontSize : 32 * scale, letterSpacing: 1, fontWeight : "700"}}>
                    ₦ 0.00
                </Text>
                <Image source = {require("../../assets/next arrow.png")} style = {{width: 40 * scale, height: 40 * scale, marginLeft: 10}}/>
            </View>
        </View>
    )
}

export default DailySale;

const style = StyleSheet.create({
    d_bg: {
        width : "100%",
        height : 380 * scale,
        backgroundColor : "#123F34",
        alignItems : "center",
        justifyContent : "center",
        borderRadius : 30 * scale,
        borderWidth: 0,
        position : "relative",
        marginTop : 20,
    },
    daily_sale : {
        flexDirection : "row",
        alignItems : "center",
        justifyContent : "center",
        position : "absolute",
        bottom : 15,
        left : 20,
        right : 20,
    },
    house_logo : {
        width : 65 * scale,
        height : 65 * scale,
        backgroundColor : "#1B2C28",
        borderRadius : 50,
        alignItems : "center",
        justifyContent : "center",
        marginRight : 10,
    }
})