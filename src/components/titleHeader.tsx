import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BackArrow } from '../utills/Svg';

export const TitleHeader = ({
  title,
  noBack,
}: {
  title: string;
  noBack?: boolean;
}) => {
  const navigation = useNavigation();

  const onBackPress = () => {
    navigation.goBack();
  };
  return (
    <>
      <SafeAreaView
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: hp('2%'),
        }}
      >
        <>
          {!noBack && (
            <TouchableOpacity onPress={onBackPress}>
              <BackArrow width={60} height={80} />
            </TouchableOpacity>
          )}
        </>

        <Text style={[styles.title, { color: '#000' }]}>{title}</Text>
      </SafeAreaView>
    </>
  );
};

export default TitleHeader;

const styles = StyleSheet.create({
  title: {
    fontSize: wp('6%'),
    fontWeight: '700',
    textAlign: 'center',
  },
});

{
  /* Why We Use Common Components */
}

// 1️⃣ We use common components to avoid writing the same code again and again.
// 2️⃣ They help keep the app design the same on every screen.
// 3️⃣ They make the code easy to manage and update.
// 4️⃣ They keep the screen files clean and simple.
// 5️⃣ They save time and speed up development.
