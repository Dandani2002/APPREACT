import React, {useEffect} from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Products from "./pages/Products";
import Products2 from "./pages/Products2";
import Products3 from "./pages/Products3";
import Products4 from "./pages/Products4";
import About from "./pages/About";
import Principal from "./pages/Main";
import Wiki from "./pages/Wiki";
import Login from "./pages/Login";
import Home from "./pages/Home";
import DatabaseInit from "./../database/DatabaseInstance";

const Stack = createNativeStackNavigator();

function Router() {
    
 return (
     <NavigationContainer>
         <Stack.Navigator initialRouteName="Principal">
            <Stack.Screen name="Cadastro" component={Login} />
            <Stack.Screen name="Products" component={Products} />
            <Stack.Screen name="Products2" component={Products2} />
            <Stack.Screen name="Products3" component={Products3} />
            <Stack.Screen name="Products4" component={Products4} />
            <Stack.Screen name="About" component={About} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Principal" component={Principal} />
            <Stack.Screen name="Wiki" component={Wiki} />
         </Stack.Navigator>
     </NavigationContainer>
  );
}

export default Router;