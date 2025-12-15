// ModalExamples.tsx
import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  FlatList,
  Modal,
} from 'react-native';
import TitleHeader from '../../../components/TitleHeader';

const ModalExample = () => {
  const [selectedImage, setSelectedImage] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const imagesData = [
    {
      id: '1',
      title: 'Nature',
      url: 'https://images.pexels.com/photos/1054655/pexels-photo-1054655.jpeg?cs=srgb&dl=pexels-hsapir-1054655.jpg&fm=jpg',
    },
    {
      id: '2',
      title: 'Mountain',
      url: 'https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg',
    },
    {
      id: '3',
      title: 'Beach',
      url: 'https://ik.imagekit.io/serenity/ByteofDev/Blog_Content_Images/tr:f-jpg/speed_up_images_original_R8oje17ew',
    },
  ];

  return (
    <View style={styles.container}>
      <TitleHeader title="Modal Example" />

      <FlatList
        data={imagesData}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              setSelectedImage(item?.url);
              setIsVisible(true);
            }}
          >
            <Image
              source={{ uri: item?.url || '' }}
              height={150}
              width={200}
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      />

      <Modal visible={isVisible} animationType="fade" transparent>
        <View
          style={{
            height: '50%',
            width: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            flex: 1,
            paddingHorizontal: 30,
          }}
        >
          <TouchableOpacity
            onPress={() => {
              setIsVisible(false);
            }}
          >
            <Text style={{ fontSize: 30, textAlign: 'right', color: '#fff' }}>
              X
            </Text>
          </TouchableOpacity>
          {selectedImage && (
            <Image
              source={{ uri: selectedImage }}
              height={400}
              width={350}
              resizeMode="contain"
            />
          )}
        </View>
      </Modal>
    </View>
  );
};

export default ModalExample;

const styles = StyleSheet.create({
  container: { padding: 20, gap: 20 },
  message: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
    color: '#333',
    textAlign: 'center',
  },
  text: { fontSize: 16, fontWeight: '600', textAlign: 'center' },

  opacityBtn: {
    padding: 15,
    backgroundColor: '#cce4ff',
    borderRadius: 8,
  },

  pressableBtn: {
    padding: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#bbb',
  },

  highlightBtn: {
    padding: 15,
    backgroundColor: '#ffe7c2',
    borderRadius: 8,
  },
});
