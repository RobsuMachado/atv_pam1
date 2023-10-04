import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import createCategory from "./src/screen/createCategory";

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen 
          name='createCategory'
          component={createCategory}
          options={{title:"CRIE UMA CATEGORIA"}}
        />

      </Stack.Navigator>
    </NavigationContainer>
  )
}