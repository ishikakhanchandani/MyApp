import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./components/screens/LoginScreen";
import HomeScreen from "./components/screens/HomeScreen";
import AddItemScreen from "./components/screens/AddItemScreen";

const Stack = createNativeStackNavigator();

function App(){
return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="AddItem" component={AddItemScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
