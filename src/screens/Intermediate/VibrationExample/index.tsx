import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Vibration,
  View,
} from 'react-native';
import React from 'react';
import TitleHeader from '../../../components/TitleHeader';

const VibrationExample = () => {
  const singleVibration = () => {
    Vibration.vibrate(100);
  };
  const longVibration = () => {
    Vibration.vibrate(1000);
  };
  const patternVibration = () => {
    Vibration.vibrate([0, 200, 100, 200]);
  };
  const stopVibration = () => {
    Vibration.cancel();
  };

  return (
    <View>
      <TitleHeader title="VibrationExample" />

      <TouchableOpacity style={styles.buttonStyle} onPress={singleVibration}>
        <Text style={styles.btnText}>Single Vibration</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonStyle} onPress={longVibration}>
        <Text style={styles.btnText}>Long Vibration</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonStyle} onPress={patternVibration}>
        <Text style={styles.btnText}>Pattern Vibration</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.buttonStyle, styles.stopBtn]}
        onPress={stopVibration}
      >
        <Text style={styles.btnText}>Stop Vibration</Text>
      </TouchableOpacity>
    </View>
  );
};

export default VibrationExample;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    gap: 15,
  },

  title: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 10,
  },

  message: {
    fontSize: 16,
    color: '#555',
    marginBottom: 15,
    textAlign: 'center',
  },

  buttonStyle: {
    backgroundColor: '#3A86FF',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 20,
  },

  stopBtn: {
    backgroundColor: '#FF006E',
  },

  btnText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
