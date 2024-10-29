/* eslint-disable prettier/prettier */
import { TouchableOpacity, View, Text, StyleSheet, Alert } from "react-native";
import { theme } from "../theme";

type Props = {
    name: string;
};

export function ShoppingListItem({ name }: Props) {
    const handleDelete = () => {
        Alert.alert(
          `Are you sure you want to delete ${name}?`,
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
        <View style={styles.itemContainer}>
        <Text style={styles.itemText}>{name}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleDelete()}
          activeOpacity={0.4}
        >
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity> 
      </View>    
    );
}
    
const styles = StyleSheet.create({
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


 

