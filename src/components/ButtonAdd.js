import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function ButtonAdd() {
  const add = () => {
    alert('Thêm plan');
  };
  return (
    <TouchableOpacity style={styles.container} onPress={add}>
      <MaterialIcons
        name="add"
        size={25}
        color="#fff"
        style={{padding: Sizes.h20}}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 10,
    right: 20,
    backgroundColor: '#3E1B72',
    borderRadius: 30,
  },
});
