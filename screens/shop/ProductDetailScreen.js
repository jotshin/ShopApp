import React, {useEffect} from 'react';
import {StyleSheet, Text, View, Image, Button, ScrollView} from 'react-native';
import {useSelector} from 'react-redux';
import Colors from '../../constants/Colors';

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
    <ScrollView>
      <Image style={styles.image} source={{uri: selectedProduct.imageUrl}} />
      <View style={styles.actions}>
        <Button color={Colors.primary} title="Add to Cart" onPress={() => {}} />
      </View>
      <Text style={styles.price}>{selectedProduct.price.toFixed(2)}</Text>
      <Text style={styles.description}>{selectedProduct.description}</Text>
    </ScrollView>
  );
};

export default ProductDetailScreen;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
  },
  actions: {
    marginVertical: 10,
    alignItems: 'center',
  },
  price: {
    fontSize: 20,
    color: '#888',
    textAlign: 'center',
    marginVertical: 20,
    fontFamily: 'OpenSans-Bold',
  },
  description: {
    fontSize: 20,
    textAlign: 'center',
    marginHorizontal: 20,
    fontFamily: 'OpenSans-Regular',
  },
});
