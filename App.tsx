import { StatusBar } from "expo-status-bar";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import { FlashList } from "@shopify/flash-list";

const heights = [40, 80, 160, 123];

export default function App() {
  const data = Array.from({ length: 1000 });
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View
        style={{
          flex: 1,
          width: "100%",
          paddingTop: 100,
          paddingBottom: 100,
          display: "flex",
          flexDirection: "row",
        }}
      >
        <FlatList
          style={{ flex: 1, backgroundColor: "skyblue" }}
          data={data}
          renderItem={({ index: i }) => (
            <Text
              key={i}
              style={{
                justifyContent: "flex-start",
                height: heights[i % 4],
                padding: 8,
                backgroundColor: "white",
              }}
            >
              {i}: lorem ipsum
            </Text>
          )}
        />
        <ScrollView style={{ flex: 1, backgroundColor: "skyblue" }}>
          {Array.from({ length: 1000 }).map((_, i) => (
            <Text
              key={i}
              style={{
                justifyContent: "flex-start",
                height: heights[i % 4],
                padding: 8,
                backgroundColor: "white",
              }}
            >
              {i}: lorem ipsum
            </Text>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
