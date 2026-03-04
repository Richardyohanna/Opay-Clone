import React from "react";
import {View, Text, StyleSheet, Image, Pressable} from "react-native";

const scale = 0.36;

const images = {
    Opay : require("../../assets/to opay logo.png"),
    Bank : require("../../assets/to bank logo.png"),
    Withdraw : require("../../assets/withdraw logo.png"),
}

const Transaction = () => {

    const TransactionItem = ({type, image_path}) => {
        return (
            <View style  = {style .transaction_item}>
                <Pressable style = {style.button}>
                    <Image source = {images[image_path]} style = {{width: 90 * scale, height: 90 * scale}}/>
                </Pressable>
                <Text style = {style.text}>
                    {type}
                </Text>
            </View>
        )
    }

    return (
        <View style = {style.t_bg}>
            <TransactionItem type = "To Opay" image_path= "Opay" />
            <TransactionItem type = "To Bank" image_path= "Bank" />
            <TransactionItem type = "Withdraw" image_path= "Withdraw" />
        </View>
    )
}       

export default Transaction;

const style = StyleSheet.create({

    t_bg : {
        width : "100%",
        height : 222 * scale,
        backgroundColor : "#2C2C2C",
        alignItems : "center",
        flexDirection : "row",
        justifyContent : "space-around", 
        borderRadius : 30 * scale,
        marginTop : 20,    
    },
    transaction_item : {     
        flexDirection : "column",
        alignItems : "center",
        justifyContent : "center",
    },
    button: {
        width: 100 * scale,
        height: 105 * scale,
        borderRadius: 20 * scale,
        backgroundColor: "#1B1B1B",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 5,   
    },
    text: {
        color : "rgba(255,255,255,0.6)",
        fontSize : 34 * scale,
        fontWeight : "500",
    }

})