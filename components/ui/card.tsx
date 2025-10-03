import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

type CardProps = {
  imageUri: string;
  title: string;
  subtitle: string;
};

export default function Card({ imageUri, title, subtitle }: CardProps) {
  return (
    <View style={styles.cardContainer}>
      <Image source={{ uri: imageUri }} style={styles.image} resizeMode="cover" />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </View>
  );
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    elevation: 3, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  image: {
    width: width / 3, // 1/3 da largura da tela
    height: 100,
  },
  textContainer: {
    width: (width / 3) * 2, // 2/3 da largura
    padding: 12,
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#555',
  },
});
