import React from 'react';
import {StyleSheet, Text, View, Image, Button} from 'react-native';

const ProductItem = (props) => {
  return (
    <View style={styles.product}>
      <Image style={styles.image} source={{uri: props.image}} />
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.price}>${props.price.toFixed(2)}</Text>
      <View style={styles.actions}>
        <Button title="View details" onPress={props.onViewDetail}></Button>
        <Button title="To cart" onPress={props.onAddToCart}></Button>
      </View>
    </View>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  product: {
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: 'white',
    height: 300,
    margin: 20,
  },
  image: {
    width: '100%',
    height: '60%',
  },
  title: {
    fontSize: 18,
    marginVertical: 4,
  },
  price: {
    fontSize: 14,
    color: '#888',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
