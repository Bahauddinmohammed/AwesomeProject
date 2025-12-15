import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { BackArrow, Cloud } from '../../../utills/Svg';
import TitleHeader from '../../../components/TitleHeader';

const SvgExample = () => {
  return (
    <View>
      <TitleHeader title="Svg Example" />
      <Cloud width={90} height={90} />
      <BackArrow width={90} height={90} />
    </View>
  );
};

export default SvgExample;

const styles = StyleSheet.create({});
