import React from "react";
import  { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const scale = 0.36;

const images = {
    Airtime : require("../../assets/Airtime Logo.png"),
    Data : require("../../assets/Data Logo.png"),
    Betting : require("../../assets/Betting Logo.png"),
    TV : require("../../assets/TV logo.png"),
    SafeBox : require("../../assets/SafeBox Logo.png"),
    Loan : require("../../assets/Loan.png"),
    Check_In: require("../../assets/Check-In Logo.png"),
    More : require("../../assets/more logo.png"),
}

const ActionSection = () => {

    const navigation = useNavigation();

    const ActionItem = ({type, image_path, i_w, i_h, is_true, img_styl}) => {    

        const handlePress = () => {
            if (type === "Airtime") {
                navigation.navigate("Airtime");
            }
        }
        return (
            <View style = {style.action_item}>
                {is_true && (
                    <LinearGradient
                        colors={['#FF7F85', '#FA5273']}
                        start = {{x:0, y:0}}
                        end = {{x:1, y: 0}}
                        
                        style = {style.notification}
                    >
                        <Text style={{color: "#FFFFFF", fontSize: 16 * scale}}>Up to 6%</Text>
                    </LinearGradient>
                )}
                <Pressable 
                    style = {style.button} 
                    onPress={handlePress}>
                    <Image source = {image_path} style = {[{width: i_w * scale, height: i_h * scale}, img_styl]}/>
                </Pressable>
                <Text style = {style.text}>
                    {type}
                </Text>
            </View>
        )
    }
    
    return (
        <View style = {style.a_bg}>
            <ActionItem type = "Airtime" image_path= {images.Airtime} i_w={146} i_h={97} is_true = {true} />      
            <ActionItem type = "Data" image_path= {images.Data} i_w={146} i_h={97} is_true={true}/>
            <ActionItem type = "Betting" image_path= {images.Betting} i_w={60} i_h={60}/>
            <ActionItem type = "TV" image_path= {images.TV} i_w={161} i_h={107}/>
            <ActionItem type = "SafeBox" image_path= {images.SafeBox} i_w={90} i_h={87} img_styl = {{marginLeft: 5, marginBottom: 3}}/>
            <ActionItem type = "Loan" image_path= {images.Loan} i_w={123} i_h={184}/>
            <ActionItem type = "Check In" image_path= {images.Check_In} i_w={98} i_h={65}/>
            <ActionItem type = "More" image_path= {images.More} i_w={89} i_h={133}/>
        </View>
    )
}

export default ActionSection;

const style = StyleSheet.create({
    a_bg : {
        width : "100%",
        height : 491 * scale,
        backgroundColor : "#2C2C2C",
        alignItems : "center",
        flexDirection : "row",
        flexWrap : "wrap",
        justifyContent : "space-around",
        borderRadius : 30 * scale,
        marginTop : 20,
    },
    action_item : {
        position : "relative",
        width : "25%",
        flexDirection : "column",
        alignItems : "center",
        justifyContent : "center",
        padding: 14,
    },
    button: {
        width: 100 * scale,
        height: 105 * scale,
        borderRadius: 50,
        backgroundColor: "#1B1B1B",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 5,
    },
    text: {
        color : "#F9DFE5",
        fontSize : 34 * scale,
        fontWeight : "500",
    },
notification: {
  position: "absolute",
  width: 87 * scale,
  height: 29 * scale,
  borderTopLeftRadius: 20 * scale,
  borderTopRightRadius: 20 * scale,
  borderBottomRightRadius: 20 * scale,
  top: 10,
  right: 10,
  alignItems: "center",
  justifyContent: "center",
  zIndex: 999,
}
})




