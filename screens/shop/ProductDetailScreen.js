import React, {useEffect} from 'react';
import {StyleSheet, Text, View, Image, Button, ScrollView} from 'react-native';
import {useSelector} from 'react-redux';

const ProductDetailScreen = ({navigation, route}) => {
  const {id, title} = route.params;
  const selectedProduct = useSelector((state) =>
    state.products.availableProducts.find((product) => product.id === id),
  );

  useEffect(() => {
    navigation.setOptions({title});
    //   return () => {
    //       cleanup
    //   }
  }, []);

  return (
    <View>
      <Text>{selectedProduct.description}</Text>
    </View>
  );
};

export default ProductDetailScreen;

const styles = StyleSheet.create({});
