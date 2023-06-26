import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AddPet, Adopt, Login, PetPage, SignUp, Welcome } from "./src/pages";

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Adopt" component={Adopt} />
        <Stack.Screen name="AddPet" component={AddPet} />
        <Stack.Screen name="PetPage" component={PetPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
