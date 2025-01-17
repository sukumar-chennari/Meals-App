import { StyleSheet, Text, View } from "react-native";

function Subtitle({ children }) {
  return (
    <View style={styles.subtiteContainer}>
      <Text style={styles.subTitle}>{children}</Text>
    </View>
  );
}

export default Subtitle;

const styles = StyleSheet.create({
  subTitle: {
    fontWeight: "bold",
    margin: 8,
    fontSize: 18,
    color: "#e2b497",
    textAlign: "center",
  },
  subtiteContainer: {
    borderBottomColor: "#e2b497",
    borderBottomWidth: 2,
    margin: 4,
    marginHorizontal: 12,
    marginVertical: 5,
    padding: 6,
  },
});
