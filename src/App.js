import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {CategoryPage, MenuPage, RecipePage, SavedFoodsPage} from './pages';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function RestaurantStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Category" component={CategoryPage} />
      <Stack.Screen name="Menu" component={MenuPage} />
      <Stack.Screen name="Recipe" component={RecipePage} />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Restaurant"
          component={RestaurantStack}
          options={{
            tabBarLabel: 'Today Meals',
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons
                name="food-drumstick"
                color={color}
                size={26}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
