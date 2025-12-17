import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import TitleHeader from '../../../components/TitleHeader';
import Snackbar from 'react-native-snackbar';

const SnackbarPopup = () => {
  const showSnack = (type: string, message: string) => {
    let backgroundColor = '#333';

    if (type === 'success') backgroundColor = '#4CAF50';
    if (type === 'error') backgroundColor = '#F44336';
    if (type === 'warning') backgroundColor = '#FF9800';
    if (type === 'info') backgroundColor = '#2196F3';

    Snackbar.show({
      text: message,
      duration: Snackbar.LENGTH_SHORT,
      backgroundColor,
    });
  };
  return (
    <View>
      <TitleHeader title="SnackbarPopup" />
      <View style={styles.container}>
        <Text style={styles.title}>Snackbar Variants</Text>

        <TouchableOpacity
          style={[styles.button, styles.success]}
          onPress={() => showSnack('success', 'Success message')}
        >
          <Text style={styles.text}>Success</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.error]}
          onPress={() => showSnack('error', 'Error message')}
        >
          <Text style={styles.text}>Error</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.warning]}
          onPress={() => showSnack('warning', 'Warning message')}
        >
          <Text style={styles.text}>Warning</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.info]}
          onPress={() => showSnack('info', 'Info message')}
        >
          <Text style={styles.text}>Info</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SnackbarPopup;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    padding: 14,
    borderRadius: 6,
    marginBottom: 12,
  },
  text: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  success: { backgroundColor: '#2E7D32' },
  error: { backgroundColor: '#D32F2F' },
  warning: { backgroundColor: '#F9A825' },
  info: { backgroundColor: '#1976D2' },
});
