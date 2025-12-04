import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { stylesEx } from './stylesEx';
import { COLORS } from '../../utills/Colors';
import TitleHeader from '../../components/TitleHeader';

const Home = ({ navigation }: { navigation: any }) => {
  const screensData = [
    {
      id: 1,
      screenName: 'Alert Example',
      navigationName: 'AlertExample',
    },
    {
      id: 1,
      screenName: 'Alert Example',
      navigationName: 'AlertExample',
    },
  ];
  return (
    <View>
      <TitleHeader title="Home" noBack={true} />

      <ScrollView>
        <TouchableOpacity
          style={{ marginVertical: 10 }}
          onPress={() => {
            navigation.navigate('Settings');
          }}
        >
          <Text style={{ fontSize: 20 }}>1.Basics</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ marginVertical: 10 }}
          onPress={() => {
            navigation.navigate('AlertExample');
          }}
        >
          <Text style={{ fontSize: 20 }}>2.Alert Example</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  textStyle: {
    color: 'red',
    backgroundColor: 'black',
  },
});
