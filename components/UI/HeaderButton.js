import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Colors from '../../constants/Colors';

const HeaderButton = (props) => {
  return (
    <Icon.Button
      {...props}
      iconSize={23}
      color={Colors.primary}
      backgroundColor="#FFF">
      {props.title}
    </Icon.Button>
  );
};

export default HeaderButton;

const styles = StyleSheet.create({});
