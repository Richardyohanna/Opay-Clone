import React from "react";
import { Image, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./HomeScreen";
import RewardScreen from "./RewardScreen";
import FinanceScreen from "./FinanceScreen";
import CardScreen from "./CardScreen";
import ProfileScreen from "./ProfileScreen";

const Tab = createBottomTabNavigator();

const scale = 0.36;

const icons = {
  home: require("../assets/Home Logo.png"),
  reward: require("../assets/Reward logo.png"),
  finance: require("../assets/Finance Logo.png"),
  card: require("../assets/Cards Logo.png"),
  profile: require("../assets/Me Logo.png"),
};

const DummyScreen = ({ route }) => {
  return <Text>{route.name} Screen</Text>;
};

export default function NavigationSection() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#2C2C2C",          
          borderTopWidth: 0,
          elavation: 0,
          shadowColor: "transparent",

        },
        tabBarItemStyle: {
            margin: 0,
            padding: 0,
        },
        tabBarLabelStyle: {
          fontSize: 30 * scale,
          fontFamily: "Inter_400Regular",
        },
        tabBarActiveTintColor: "#00C27B",  
        tabBarInactiveTintColor: "rgba(255,255,255,0.5)",

    tabBarIcon: ({ focused }) => {
    let iconSource;
    let width = 24;
    let height = 24;

    if (route.name === "Home") {
        iconSource = icons.home;
        width = 81 * scale;
        height = 110 * scale;
    }

    if (route.name === "Rewards") {
        iconSource = icons.reward;
        width = 192 * scale;
        height = 121 * scale;
    }

    if (route.name === "Finance") {
        iconSource = icons.finance;
        width = 179 * scale;
        height = 110 * scale;
    }

    if (route.name === "Cards") {
        iconSource = icons.card;
        width = 190 * scale;
        height = 121 * scale;
    }

    if (route.name === "Me") {
        iconSource = icons.profile;
        width = 190 * scale;
        height = 121 * scale;
    }

    return (
        <Image
        source={iconSource}
        style={{
            width,
            height,
            tintColor: focused
            ? "#00C27B"
            : "rgba(255,255,255,0.5)",
        }}
        resizeMode="contain"
        />
    );
    },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Rewards" component={RewardScreen} />
      <Tab.Screen name="Finance" component={FinanceScreen} />
      <Tab.Screen name="Cards" component={CardScreen} />
      <Tab.Screen name="Me" component={ProfileScreen} />
    </Tab.Navigator>
  );
}