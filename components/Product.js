import React from "react";
import { Text, Image, View, StyleSheet, TouchableOpacity } from "react-native";
import tw from "tailwind-react-native-classnames";
export function Product({ title, price, image, onPress, rating }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image
        style={styles.thumb}
        source={{
          uri: image,
        }}
        resizeMode="stretch"
      />
      <View style={tw`px-3 py-4`}>
        <Text style={tw`font-bold text-lg`}>{title}</Text>
        <View style={tw`flex-row items-center justify-between mt-2`}>
          <Text style={tw`text-xl`}>💲 {price}</Text>
          <Text style={tw`text-xl`}>⭐ {rating.rate}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 16,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowColor: "black",
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 1,
    marginVertical: 20,
  },
  thumb: {
    height: 200,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    width: "100%",
  },
});
