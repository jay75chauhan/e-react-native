import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import tw from "tailwind-react-native-classnames";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default function Categories({ setCategories }) {
  const [title, setTitle] = useState([]);
  useEffect(() => {
    const data = fetch("https://fakestoreapi.com/products/categories")
      .then((req) => req.json())
      .then((data) => setTitle(data));

    return () => data;
  }, []);
  return (
    <View
      style={tw`flex-row  p-1 py-2 bg-transparent bg-white rounded-b-2xl shadow-xl  justify-between`}
    >
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {title?.map((item, index) => (
          <TouchableOpacity
            onPress={() => {
              setCategories(item);
            }}
            key={index}
            style={tw`mx-1 bg-gray-200 rounded-2xl `}
          >
            <Text style={tw`px-2.5 py-2 text-xs text-black`}>{item}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
