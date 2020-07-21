import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Platform} from 'react-native';

import ProductOverviewScreen from '../screens/shop/ProductOverviewScreen';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';
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
            title: 'Shop App',
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
          // options={({route}) => ({title: `${route.params.item.title}`})}
        />
      </StackNavigation.Navigator>
    </NavigationContainer>
  );
};
