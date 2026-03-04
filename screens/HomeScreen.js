import React from "react";
import { ScrollView, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "./Home Navigations/Header";                         
import DailySale from "./Home Navigations/DailySale";
import Transaction from "./Home Navigations/Transaction";
import ActionSection from "./Home Navigations/ActionSection";
import SugestionSection from "./Home Navigations/SugestionSection";

const HomeScreen = () => {

    return (
        <SafeAreaView style = {style.bg_style}>
            <ScrollView>
                <Header/>
                <DailySale/>
                <Transaction />
                <ActionSection />
                <SugestionSection />
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen;

const style = StyleSheet.create({

    bg_style : {

        position : "relative",
        backgroundColor : "#1B1B1B",
        width : "100%",
        height : "100%",
        alignContent: "center",
        justifyContent : "center",
        padding: 10,
       
    }
})