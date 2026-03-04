import React from "react";
import {View, Text, StyleSheet, Image, Pressable} from "react-native";

const scale = 0.36;

const SugestionSection = () => {

    return (
        <View style = {style.s_bg}>
            <View style = {style.first_part}>
                <Text style = {style.text}>  Saving Challenge 2026 </Text>
                <View style = {style.first_part_inner}>
                    <View style = {style.arrow_bg}>
                        <Image source = {require("../../assets/Arrow Action.png")} style = {{width : 177 * scale, height : 118 * scale}}/>
                    </View>
                    <View >
                        <Text style = {style.text}>Special Target </Text>
                        <Text style = {{color : "rgba(255,255,255,0.5)", fontSize : 30 * scale,}}>Start small daily, finish big in 2026 </Text>
                    </View>
                </View>
            </View>
            <View style = {style.second_part}>
                <Image source = {require("../../assets/gift logo.png")} style = {{width : 147 * scale, height : 98 * scale}}/>
                <Pressable style = {style.button}>
                    <Text> Go </Text>
                </Pressable>
            </View>
            
        </View>
    )
}

export default SugestionSection;

const style = StyleSheet.create({
    s_bg : {
        width : "100%",
        height : 337 * scale,    
        backgroundColor : "#0E2924",
        flexDirection : "row",
        alignItems : "center",
        justifyContent : "space-around",
        borderRadius : 30 * scale,
        marginTop : 20,
        padding: 7,
        
    },
    first_part : {
        flexDirection : "column",
        alignItems : "flex-start",
        justifyContent : "center",
        gap : 10,
    },
    text : {
        color : "#ffffff",
        fontSize : 36 * scale,
        letterSpacing : 1,
        fontFamily : "Inter_600SemiBold",
    },
    first_part_inner : {
        flexDirection : "row",
        alignItems : "flex-start",
        justifyContent : "center",
        marginTop : 10,
    },
    arrow_bg : {
        width : 108* scale,
        height : 108 * scale,   
        backgroundColor : "#F8F8FA",
        alignItems : "center",
        justifyContent : "center",
        borderRadius : 20 * scale,
        marginRight : 20,
    },
    second_part : {
        flexDirection : "column",
        alignItems : "center",
        justifyContent : "center",
        gap : 20,
        
    },
    button : {
        width : 116 * scale,
        height : 76 * scale,
        backgroundColor : "#18CE9C",
        alignItems : "center",
        justifyContent : "center",
        borderRadius : 30 * scale,
    }  
})
