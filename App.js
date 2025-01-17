import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import CategoryScreen from "./screens/categoryScreen";
import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverViewScreen from "./screens/MealsOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavoritesScreen from "./screens/FavoritesScreen";
import { Ionicons } from "@expo/vector-icons";
import FavoriteContextProvider from "./store/context/favorite-context";
const stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#24180f" },
        headerTintColor: "white",
        sceneStyle: { backgroundColor: "#3f2f35" },
        drawerContentStyle: { backgroundColor: "#24180f" },
        drawerInactiveTintColor: "white",
        drawerActiveTintColor: "#3f2f35",
        drawerActiveBackgroundColor: "#e4baa1",
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoryScreen}
        options={{
          drawerIcon: ({ color, size }) => <Ionicons name="list" size={size} />,
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <FavoriteContextProvider>
      <NavigationContainer
      >
        <stack.Navigator 
             screenOptions={{
              headerStyle: { backgroundColor: "#24180f" },
              headerTintColor: "white",
              contentStyle: { backgroundColor: "#3f2f35" },
            }}>
          <stack.Screen
            name="Drawer"
            component={DrawerNavigator}
            options={{
              // title:'All Categories',
              headerShown: false,
            }}
          />
          <stack.Screen name="MealsOverview" component={MealsOverViewScreen} />
          <stack.Screen
            name="MealDetailScreen"
            component={MealDetailScreen}
            options={{
              title: "About the Meal",
            }}
          />
        </stack.Navigator>
      </NavigationContainer>
      </FavoriteContextProvider>
      

    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
