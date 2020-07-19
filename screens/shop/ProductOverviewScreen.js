import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import {useSelector} from 'react-redux';

import ProductItem from '../../components/shop/ProductItem';

const ProductOverviewScreen = ({navigation, route}) => {
  const products = useSelector((state) => state.products.availableProducts);

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
              onAddToCart={() => {}}
            />
          );
        }}
      />
    </View>
  );
};

export default ProductOverviewScreen;

const styles = StyleSheet.create({});
