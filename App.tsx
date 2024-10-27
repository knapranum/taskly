/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import { theme } from "./theme";

export default function App() {
  const handleDelete = () => {
    Alert.alert(
      "Are you sure you want to delete this?",
      "It will be gone for good!",
      [
        {
          text: "Yes",
          onPress: () => console.log("Ok, deleting."),
        },
        {
          text: "Cancel",
          style: "cancel",
        },
      ],
    );

  };
  return (
    <View style={styles.container}>
        
      <View
        style={styles.itemContainer}
      >
        <Text style={styles.itemText}>Coffee</Text>
        <TouchableOpacity
          style={styles.button} 
          onPress={() => handleDelete()} 
          activeOpacity={0.4}
          >
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>    
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorWhite,
    justifyContent: "center",
  },
  itemContainer: {
    paddingVertical: 16,
    paddingHorizontal: 8,
    borderBottomColor: theme.colorCerulean,
    borderBottomWidth: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  itemText: { 
    fontSize: 18, 
    fontWeight: "400", 
  },
  button: {
    backgroundColor: theme.colorBlack,
    padding: 8,
    borderRadius: 6,
  },
  buttonText: {
    color: theme.colorWhite,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 1,
  }
});
