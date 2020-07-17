import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Platform} from 'react-native';

import ProductOverviewScreen from '../screens/shop/ProductOverviewScreen';
import Colors from '../constants/Colors';

const StackNavigation = createStackNavigator();

export default ShopNavigator = () => {
  return (
    <NavigationContainer>
      <StackNavigation.Navigator>
        <StackNavigation.Screen
          name="Main screen"
          component={ProductOverviewScreen}
          options={{
            title: 'Shop App',
            headerStyle: {
              backgroundColor: Platform.OS === 'android' ? Colors.primary : '',
            },
            headerTintColor:
              Platform.OS === 'android' ? 'white' : Colors.primary,
          }}
        />
        {/* <StackNavigation.Screen
          name="RSSDetailScreen"
          component={RSSDetailScreen}
          options={({ route }) => ({ title: `${route.params.feed.title} (${route.params.feed.items.length})` })}
        /> */}
      </StackNavigation.Navigator>
    </NavigationContainer>
  );
};
