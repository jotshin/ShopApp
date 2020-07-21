import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import ProductItem from '../../components/shop/ProductItem';
import * as cartActions from '../../store/actions/cart';

const ProductOverviewScreen = ({navigation, route}) => {
  const products = useSelector((state) => state.products.availableProducts);
  const dispatch = useDispatch();

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
