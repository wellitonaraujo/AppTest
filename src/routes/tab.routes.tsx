import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../../Home";
import { Favorites } from "../Profile";
import { Cart } from "../../Cart";

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Favorites" component={Favorites} />
        <Tab.Screen name="Cart" component={Cart} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}