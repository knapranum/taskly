/* eslint-disable prettier/prettier */
import { StyleSheet, View, } from "react-native";
import { theme } from "../theme";
import { ShoppingListItem } from "../components/ShoppingListItems";

export default function App() {
   return (
    <View style={styles.container}>
      <ShoppingListItem name="Coffee"/>
      <ShoppingListItem name="Tea " isCompleted={true}/> 
      <ShoppingListItem name="Suggar"  isCompleted={true} /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorWhite,
    justifyContent: "center",
  },
  
});