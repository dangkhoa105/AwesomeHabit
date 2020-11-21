import React from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';
import {Sizes} from '@dungdang/react-native-basic/index';

const {width, height} = Dimensions.get('window');

export default function Header() {
  return (
    <View style={styles.container}>
      <Text>Header</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '30%',
    backgroundColor: '#8F64E3',
    borderBottomLeftRadius: Sizes.s60,
    borderBottomRightRadius: Sizes.s60,
  },
});
