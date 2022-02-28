import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
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
    <View style={tw`flex-row w-full p-2  justify-between`}>
      {title?.map((item, index) => (
        <TouchableOpacity
          onPress={() => {
            setCategories(item);
          }}
          key={index}
          style={tw`mx-1 bg-white rounded-2xl shadow-xl`}
        >
          <Text style={tw`px-2.5 py-2 text-xs text-black`}>{item}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
