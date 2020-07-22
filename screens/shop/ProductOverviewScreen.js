import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import ProductItem from '../../components/shop/ProductItem';
import * as cartActions from '../../store/actions/cart';
import HeaderButton from '../../components/UI/HeaderButton';

const ProductOverviewScreen = ({navigation, route}) => {
  const products = useSelector((state) => state.products.availableProducts);
  const dispatch = useDispatch();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButton name="ios-cart" onPress={() => console.log('test')} />
      ),
    });
  }, [navigation]);

  return (
    <View>
      <FlatList
        data={products}
        keyExtractor={(product) => product.id}
        renderItem={(itemData) => {
          const {imageUrl, title, price, id} = itemData.item;
          return (
            <ProductItem
              image={imageUrl}
              title={title}
              price={price}
              onViewDetail={() => {
                navigation.navigate('ProductDetail', {id, title});
              }}
              onAddToCart={() => {
                dispatch(cartActions.addToCart(itemData.item));
              }}
            />
          );
        }}
      />
    </View>
  );
};

export default ProductOverviewScreen;

const styles = StyleSheet.create({});
