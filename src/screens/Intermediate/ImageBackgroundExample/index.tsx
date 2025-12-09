import React, { useState } from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const ImageBackgroundExample = () => {
  const [imageUrl, setImageUrl] = useState(
    'https://static.vecteezy.com/system/resources/thumbnails/040/890/255/small/ai-generated-empty-wooden-table-on-the-natural-background-for-product-display-free-photo.jpg',
  );
  return (
    <ImageBackground
      source={{
        uri: imageUrl,
      }}
      style={styles.bg}
      resizeMode="cover"
    >
      <View style={styles.overlay} />

      <View style={styles.content}>
        <Text style={styles.title}>Welcome to the App</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setImageUrl(
              'https://t3.ftcdn.net/jpg/06/16/34/92/360_F_616349295_hw3oZYyNeRrz2s1h2n6x5fBLwHUA4Gpw.jpg',
            );
          }}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default ImageBackgroundExample;

const styles = StyleSheet.create({
  bg: { flex: 1, justifyContent: 'center' },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  content: { alignItems: 'center', gap: 20 },
  title: { color: 'white', fontSize: 28, fontWeight: '700' },
  button: { backgroundColor: '#ffbe0b', padding: 15, borderRadius: 12 },
  buttonText: { fontSize: 18, fontWeight: '700' },
});
