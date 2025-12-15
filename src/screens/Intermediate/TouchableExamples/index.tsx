// TouchableExamples.tsx
import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Pressable,
  TouchableHighlight,
  StyleSheet,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import TitleHeader from '../../../components/TitleHeader';

const TouchableExamples = () => {
  const [message, setMessage] = useState(
    'https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg',
  );

  return (
    <SafeAreaView style={styles.container}>
      <TitleHeader title="Touchables Example" />

      {/* Display message */}
      {/* <Text style={styles.message}>{message}</Text> */}
      <View style={{ alignItems: 'center' }}>
        <Image
          source={{ uri: message }}
          height={150}
          width={200}
          resizeMode="contain"
        />
      </View>

      {/* TouchableOpacity */}
      <TouchableOpacity
        style={styles.opacityBtn}
        activeOpacity={0.6}
        onPress={() =>
          setMessage(
            'https://img.freepik.com/free-photo/green-trees-near-body-water-daytime_395237-20.jpg?semt=ais_hybrid&w=740&q=80',
          )
        }
        onLongPress={() =>
          setMessage(
            'https://m.media-amazon.com/images/I/71oDTJru50L._AC_UF1000,1000_QL80_.jpg',
          )
        }
      >
        <Text style={styles.text}>TouchableOpacity</Text>
      </TouchableOpacity>

      {/* Pressable */}
      <Pressable
        style={({ pressed }) => [
          styles.pressableBtn,
          { backgroundColor: pressed ? '#d0d0d0' : '#e9e9e9' },
        ]}
        onPress={() =>
          setMessage(
            'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_640.jpg',
          )
        }
      >
        <Text style={styles.text}>Pressable</Text>
      </Pressable>

      {/* TouchableHighlight */}
      <TouchableHighlight
        style={styles.highlightBtn}
        underlayColor="#dcbf9e"
        onPress={() =>
          setMessage(
            'https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-118143566.jpg',
          )
        }
      >
        <Text style={styles.text}>TouchableHighlight</Text>
      </TouchableHighlight>
    </SafeAreaView>
  );
};

export default TouchableExamples;

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
