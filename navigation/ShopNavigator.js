import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Platform, Button} from 'react-native';

import ProductOverviewScreen from '../screens/shop/ProductOverviewScreen';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';
import CartScreen from '../screens/shop/CartScreen';
import Colors from '../constants/Colors';

const StackNavigation = createStackNavigator();

export default ShopNavigator = () => {
  return (
    <NavigationContainer>
      <StackNavigation.Navigator>
        <StackNavigation.Screen
          name="ProductOverview"
          component={ProductOverviewScreen}
          options={{
            headerTitle: 'Shop App',
            headerStyle: {
              backgroundColor: Platform.OS === 'android' ? Colors.primary : '',
            },
            headerTitleStyle: {
              fontFamily: 'OpenSans-Bold',
            },
            headerBackTitleStyle: {
              fontFamily: 'OpenSans-Regular',
            },
            headerTintColor:
              Platform.OS === 'android' ? 'white' : Colors.primary,
          }}
        />
        <StackNavigation.Screen
          name="ProductDetail"
          component={ProductDetailScreen}
        />
        <StackNavigation.Screen name="Cart" component={CartScreen} />
      </StackNavigation.Navigator>
    </NavigationContainer>
  );
};
