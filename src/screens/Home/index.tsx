import {
  FlatList,
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
import ModalExample from '../Intermediate/ModalExample';

const Home = ({ navigation }: { navigation: any }) => {
  const screensData = [
    {
      id: 1,
      screenName: 'Images Demo',
      navigationName: 'ImagesDemo',
    },
    {
      id: 2,
      screenName: 'Profile Screen',
      navigationName: 'Profile',
    },
    {
      id: 3,
      screenName: 'Profile Screen',
      navigationName: 'Profile',
    },
    {
      id: 4,
      screenName: 'Image Background Example',
      navigationName: 'ImageBackgroundExample',
    },
    {
      id: 5,
      screenName: 'Keyboard Avoiding Example',
      navigationName: 'KeyboardAvoidingExample',
    },
    {
      id: 6,
      screenName: 'Touchable Example',
      navigationName: 'TouchableExamples',
    },
    {
      id: 7,
      screenName: 'ModalExample',
      navigationName: 'ModalExample',
    },
  ];
  return (
    <View>
      {/* <TitleHeader title="Home" noBack={true} /> */}

      {/* <FlatList
        data={screensData}
        renderItem={(item: any) => {
          console.log('itemitemitem----->', item?.item?.navigationName);
          return (
            <TouchableOpacity
              style={{ marginVertical: 10 }}
              onPress={() => {
                navigation.navigate(item?.item?.navigationName);
              }}
            >
              <Text
                style={{ fontSize: 20 }}
              >{`${item?.item?.id}. ${item?.item?.screenName}`}</Text>
            </TouchableOpacity>
          );
        }}
      /> */}

      <ModalExample />
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
