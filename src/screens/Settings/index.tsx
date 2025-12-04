import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import TitleHeader from '../../components/TitleHeader';

const Settings = ({ navigation }: { navigation: any }) => {
  const redirectToHome = () => {
    navigation.navigate('Home');
  };
  return (
    <View>
      <TitleHeader title="Settings" />

      <TouchableOpacity style={{ margin: 40 }} onPress={redirectToHome}>
        <Text style={{ fontSize: 30 }}>Go to Home Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({});
