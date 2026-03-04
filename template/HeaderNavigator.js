import { useNavigation } from "@react-navigation/native";
import React from "react";
import {View , Image, Text, StyleSheet, Pressable} from "react-native";

const HeaderNavigator = ({header_name}) => {

    const navigation = useNavigation();
    const handlePress = () => {

        navigation.navigate("MainTabs");
    }
    return (
     <View style = {style.header}>
             <Pressable onPress ={handlePress}>
                <Image source = {require("../assets/Airtime Service assets/back arrow.png")} style = {{width: 35.52, height: 35.52}}/>
             </Pressable>
             
             <Text style = {style.text}>{header_name}</Text>
             <Text style = {style.history}>History</Text>
     </View>   
    )
}

export default HeaderNavigator;

const style = StyleSheet.create({
 header : {
        width: "100%",
        height: 85,
        position: "absolute",
        top: 0,
        left: 0,
        backgroundColor: "#2C2C2B",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        paddingTop: 30,
        fontFamily: "inter",
        zIndex: 999
    },
    text : {
        color: "#fff",
        fontSize: 18,
        letterSpacing: 1
    },
    history : {
        color: "#24C797",
        fontSize: 15,
        letterSpacing: 1

    }

})