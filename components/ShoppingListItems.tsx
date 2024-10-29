/* eslint-disable prettier/prettier */
import { TouchableOpacity, View, Text, StyleSheet, Alert } from "react-native";
import { theme } from "../theme";
import AntDesign  from "@expo/vector-icons/AntDesign";

type Props = {
    name: string;
    isCompleted?: boolean; // ? efter isCompleated betyder valgfri
};

export function ShoppingListItem({ name, isCompleted }: Props) {
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
        <View style={
          [
            styles.itemContainer, 
            isCompleted ? styles.completedContainer : undefined,
            ]}          
        >
        <Text 
          style={[
          styles.itemText,
          isCompleted ? styles.completedText : undefined,
          ]
          }>
            {name}
          </Text>
        <TouchableOpacity
          onPress={() => handleDelete()}>        
          <AntDesign name="closecircle" size={24} color={isCompleted ? theme.colorGrey : theme.colorRed} />
        </TouchableOpacity> 
      </View>    
    );
}
    
const styles = StyleSheet.create({
  itemContainer: {
    paddingVertical: 16,
    paddingHorizontal: 18,
    borderBottomColor: theme.colorCerulean,
    borderBottomWidth: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  completedContainer: {
    backgroundColor: theme.colorLightGrey,
    borderBottomColor: theme.colorLightGrey,
  },
  itemText: { 
    fontSize: 18, 
    fontWeight: "400", 
  },
  completedText: {
    textDecorationLine: "line-through",
    textDecorationColor: theme.colorBlack,
    color: theme.colorGrey
  },  
});


 

