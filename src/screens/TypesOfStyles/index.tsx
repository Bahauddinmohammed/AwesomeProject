import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { stylesEx } from './stylesEx';
import { COLORS } from '../../utills/Colors';
import TitleHeader from '../../components/TitleHeader';

const TypesOfStyles = ({ navigation }: { navigation: any }) => {
  const [count, setCount] = useState<number>(0);

  const redirectToSettins = () => {
    navigation.navigate('Settings');
  };

  return (
    <View>
      <TitleHeader title="TypesOfStyles" />

      <>
        {/* In line style */}
        <Text style={{ color: 'blue', backgroundColor: 'yellow' }}>
          My Number is : {count}
        </Text>

        {/* In Internal style */}
        <Text style={styles.textStyle}>My Number is : {count}</Text>

        {/* In External style */}
        <Text style={stylesEx.textStyle}>My Number is : {count}</Text>

        {/*  Combining styles */}
        <Text style={[stylesEx.textStyle, { backgroundColor: 'orange' }]}>
          My Number is : {count}
        </Text>

        {/*  How to use External Color */}
        <Text
          style={[stylesEx.textStyle, { backgroundColor: COLORS.PrimaryBlue }]}
        >
          My Number is : {count}
        </Text>
      </>

      <TouchableOpacity
        style={{ marginVertical: 10 }}
        onPress={redirectToSettins}
      >
        <Text style={{ fontSize: 20 }}>Go to Settings Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TypesOfStyles;

const styles = StyleSheet.create({
  textStyle: {
    color: 'red',
    backgroundColor: 'black',
  },
});
