import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function TodoItem({item, pressHandler}) {
  return (
    <TouchableOpacity onPress={() => pressHandler(item.id)}>
      <View style={styles.items}>
        <FontAwesome5 name={'trash-alt'} size={20} color={'black'} />
        <Text style={styles.textStyle}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  items: {
    padding: 16,
    marginTop: 16,
    borderColor: 'black',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 10,
    width: 330,
    backgroundColor: 'pink',
    flexDirection:'row',
  },
  textStyle: {
    marginLeft: 10,
  },
});
