import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const CartItem = ({item}) => {
  return (
    <View style={styles.cartItem}>
      <View style={styles.itemData}>
        <Text style={styles.quantity}>{item.quantity} </Text>
        <Text style={styles.mainText}>{item.title} </Text>
      </View>
      <View style={styles.itemData}>
        <Text style={styles.mainText}>${item.price}</Text>
        <TouchableOpacity style={styles.deleteButton} onPress={item.onRemove}>
          <Icon name="ios-trash" size={23} color="red" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  cartItem: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    padding: 10,
    marginHorizontal: 20,
  },
  itemData: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  quantity: {
    fontFamily: 'OpenSans-Regular',
    color: '#888',
    fontSize: 16,
  },
  mainText: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 16,
  },
  deleteButton: {
    marginLeft: 20,
  },
});
