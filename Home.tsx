import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export const Home = () => {
  return (
    <>
      <View style={{ flex: 1, backgroundColor: "#fff", paddingHorizontal: 16 }}>

        <View style={styles.container}>
          <Text style={{ fontSize: 29 }}>Hi, John</Text>
          <Text style={{ fontSize: 29 }}>@</Text>
        </View>


        <View>
          <Text style={{ fontSize: 34, paddingVertical: 33 }}>Most popular</Text>
        </View>

        <View style={styles.card}>

        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },

  card: {
    backgroundColor: 'red',
    width: 300,
    height: 150,
    borderRadius: 9
  }
});