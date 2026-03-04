import React from "react";

import {View , Text, StyleSheet, Image, Pressable} from "react-native";

const scale = 0.36;

const Header = () => { 

    const Logo = () => {
        return (
            <View style = {style.logo}>
                <Image source={require("../../assets/opay logo.png")} style={style.opay_logo}/>
                <Image source={require("../../assets/bronze batch.png")} style={style.bronze_batch}/>
            </View>
        )
    }

    const Help = ()  => {
        return (
            <View>
                <Pressable style = {{position : "relative"}}>
                    <Image 
                        source={require("../../assets/Headset.png")} 
                        style={style.logo_size }
                    />
                    <View style = {style.help_logo}>
                        <Image 
                            source = {require("../../assets/help rectangle.png")} 
                            style= { style.help_rect}
                        />
                        <Text style = {style.help_text}>Help</Text>
                    </View>
                </Pressable>
            </View>
        )
    }

    const Scan = () => {
        return (
            <View> 
                <Pressable>
                    <Image 
                        source = {require("../../assets/Face ID.png")} 
                        style={style.logo_size }
                    />
                </Pressable>
            </View>
        )
    }

    const Notification = () => {
        return (
                <View>
                    <Pressable style = {{position : "relative"}}>
                        <Image 
                            source = {require("../../assets/notification bell.png")} 
                            style={[style.logo_size, {position : "relative"}]}
                        />
                        <View style = {{position : "absolute", top : -6, right : 0, width : 39 * scale, height : 39 * scale, borderRadius : 50, backgroundColor : "#F62D65", alignItems : "center", justifyContent : "center"}}>
                            <Text style = {{color : "#F9DFE5", fontSize : 22 * scale, fontWeight : "700"}}>2</Text>
                        </View>
                    </Pressable>
                </View>
        )
    }

    return (
        <View style = {style.h_bg}>
            <View style = {style.logo_title}>
                <Logo />
                <Text style={style.text}>HI, RICHARD</Text>
            </View>
            
            <View style = {style.help_notifcation_button}>
                <Help />
                <Scan />
                <Notification />
            </View>
        </View>
    )
}

export default Header;

const style = StyleSheet.create({
    h_bg : {
        width: "100%",
        height: 127 * scale,
        alignItems: "center",
        justifyContent : "space-between",
        flexDirection : "row",
        fontFamily : "Inter_600SemiBold",
        gap :30,
    },
    logo_title : {
        flexDirection : "row",
        alignItems: "center",
        justifyContent : "center",
        gap : 10,
    },
    logo : {
            width : 111 * scale,
            height: 111 * scale,
            borderRadius : 50,
            alignItems : "center",
            justifyContent : "center",
            backgroundColor : "#F4FFF8",
            
            position : "relative",    
        },
    opay_logo : {
        width : 106 * scale,
        height : 106 * scale,
    },
    bronze_batch : {
        width : 58 * scale,
        height : 87 * scale,  
        position : "absolute",
        bottom : - 6,
        right : - 8,
    },
    text : {
        color : "#FFFFFF",
        textAlign : "center",
        fontSize : 48 * scale,
    },
  
    logo_size : {
        width : 70 * scale,
        height : 70 * scale,
    },
    help_notifcation_button : {
        flexDirection : "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        gap : 20,
    },
    help_logo : {

        position : "absolute", 
        top : -3,
        right : -5,
        justifyContent : "center",
        alignItems : "center",
    },
    help_rect : {
         position : "absolute",
         width : 57 * scale, 
         height : 32 * scale,
    },
    help_text : {
        color: "#D53C7A",
        fontSize : 18 * scale,
        fontWeight : "700",
        width : 47 * scale,
        height : 22 * scale,
        textAlign : "center",
        textAlignVertical : "center",
        
    }

})