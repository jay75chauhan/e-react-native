import React, { useEffect, useState, useContext } from "react";
import {
  Text,
  Image,
  View,
  ScrollView,
  SafeAreaView,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import { getProduct } from "../services/ProductsService.js";
import { CartContext } from "../CartContext";

export function ProductDetails({ route }) {
  const { productId } = route.params;
  const [product, setProduct] = useState({});

  const { addItemToCart } = useContext(CartContext);

  useEffect(() => {
    const data = fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((req) => req.json())
      .then((data) => setProduct(data));

    return () => data;
  }, []);

  const onAddToCart = () => {
    addItemToCart(product);
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <Image
          style={styles.image}
          resizeMode="stretch"
          source={{ uri: product.image }}
        />

        <View style={tw`m-3`}>
          <Text style={tw`text-xl text-black font-bold`}>{product?.title}</Text>
          <View style={tw`flex-row my-2 justify-between items-center`}>
            <Text style={tw`text-lg px-2 py-1 bg-gray-50 rounded-xl shadow `}>
              {product.category}
            </Text>
            <Text style={tw`text-xl`}>⭐ {product?.rating?.rate}</Text>
          </View>
          <Text style={tw`text-2xl text-black font-bold`}>
            💲{product?.price}
          </Text>
          <Text style={tw`text-gray-700 p-2 `}>{product?.description}</Text>
        </View>
        <TouchableOpacity
          onPress={() => onAddToCart()}
          style={tw`bg-yellow-500 p-2 rounded-lg mx-3 mt-auto`}
        >
          <Text style={tw`text-xl text-center text-white font-bold`}>
            Add To Cart
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
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
  image: {
    height: 250,
    width: "100%",
  },
});
