import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import BottomTabs from "../components/BottomTabs.js";

import Categories from "../components/Categories.js";
import { Product } from "../components/Product.js";

export function ProductsList({ navigation }) {
  function renderProduct({ item: product }) {
    return (
      <Product
        {...product}
        onPress={() => {
          navigation.navigate("ProductDetails", {
            productId: product.id,
          });
        }}
      />
    );
  }

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState("electronics");

  useEffect(() => {
    const data = fetch(
      `https://fakestoreapi.com/products/category/${categories}`
    )
      .then((req) => req.json())
      .then((data) => setProducts(data));

    setLoading(false);
  }, [categories]);
  console.log(categories);
  return (
    <View style={{ flex: 1 }}>
      {loading ? (
        <View style={[styles.container]}>
          <ActivityIndicator size="large" color="orange" />
        </View>
      ) : (
        <View>
          <Categories setCategories={setCategories} />

          <FlatList
            style={styles.productsList}
            contentContainerStyle={styles.productsListContainer}
            keyExtractor={(item) => item.id.toString()}
            data={products}
            renderItem={renderProduct}
          />
        </View>
      )}
      <BottomTabs />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  productsList: {
    backgroundColor: "#eeeeee",
  },
  productsListContainer: {
    backgroundColor: "#eeeeee",
    marginHorizontal: 8,
  },
});
