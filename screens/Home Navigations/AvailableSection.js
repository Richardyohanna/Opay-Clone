import React from "react";
import {View, Text, StyleSheet, Image, Pressable} from "react-native";

const scale = 0.36;

const AvailableSection = () => {

    return (
        <View style = {style.a_bg}>
            <View style = {style.first_section} >
                
                <View style = {style.available_balance_div}>
                    <Image source = {require("../../assets/Crest with checkmark logo.png")} style = {{width: 40 * scale, height: 40 * scale}}/> 
                    <Text style = {style.available_balance}>
                        Available Balance
                    </Text>
                    <Image source = {require("../../assets/Invisible.png")} style = {{width: 40 * scale, height: 40 * scale}}/>  
                </View>                
                
                <View style = {style.available_amount}>
                    <Image source = {require ("../../assets/Star.png")} style = {style.star_image}/>
                    <Image source = {require ("../../assets/More Than.png")}  style = {{width: 40 * scale, height: 40 * scale}}/>
                </View>
            </View>
            <View  style = {style.second_section}>
                
                <View style = {style.transaction_history_div}>
                    <Text style = {style.transaction_history}> 
                        Transaction History
                    </Text>
                    <Image source = {require("../../assets/More Than.png")} style = {{width: 40 * scale, height: 40 * scale}}/>
                </View>                
                
                <Pressable  style = {style.add_money}>
                    <Image source = {require("../../assets/Plus Math.png")} style = {{width: 40 * scale, height: 40 * scale}} />
                    <Text style = {style.add_money_text}>Add Money</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default AvailableSection;

const style = StyleSheet.create({
    a_bg : {
        width : "100%",
        height : 236 * scale,
        backgroundColor : "#1DCF9F",
        alignItems : "center",
        flexDirection : "row",
        justifyContent : "space-between",
        borderRadius : 30 * scale,
        padding: 15,
        marginTop : 20,
        position : "absolute",
        borderWidth: 0,
        top : -20,
    },
    first_section : {
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent : "space-evenly",
        paddingBottom: 10,
        gap : 20,
    },
    available_balance_div : {
        flexDirection : "row",
        alignItems : "center",
        justifyContent : "center",
        gap : 5,
    },
    available_balance : {

        fontSize : 34 * scale,
        fontWeight : "700",
        color : "#15604E",
        marginBottom: 3,
    },
    available_amount : {
      
        flexDirection : "row",
        alignItems : "center",
        justifyContent : "space-between",
        gap : 5,
        
    },
    star_image : {
        width : 152 * scale,
        height : 40 * scale,

    },
    
    second_section : {
        flexDirection: "column",
        alignItems: "center",
        justifyContent : "center",
        gap : 15,
    },
    transaction_history_div : {
        flexDirection : "row",
        alignItems : "center",
        justifyContent : "space-between",
        gap : 4,

    },
     transaction_history : {

        fontSize : 34 * scale,
        fontWeight : "700",
        color : "#15604E",
        textAlign: "center",
        marginBottom: 4,
                
    },
    add_money: {
        width: 264 * scale,
        height: 73 * scale,
        flexDirection : "row",
        backgroundColor: "#2C2B2C",
        borderRadius: 40 * scale,
        alignItems: "center",
        justifyContent: "space-evenly",
        textAlign: "center",
        padding: 5,
    },
    add_money_text : {
        color : "#3C987E",
        fontSize : 34 * scale,
        fontWeight : "700",
        textAlign : "center",
    },
})