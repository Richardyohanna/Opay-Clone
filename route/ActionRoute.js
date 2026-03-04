import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import  AirtimeScreen  from "../screens/AirtimeScreen/AirtimeScreen";
import NavigationSection from "../screens/NavigationSection";

const Stack = createNativeStackNavigator();

export default function ActionRoute()  {

    return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name= "MainTabs" component =  {NavigationSection}/>
            <Stack.Screen name= "Airtime" component={AirtimeScreen} />
        </Stack.Navigator>
    )
}

