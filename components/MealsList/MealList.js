import { View, FlatList, StyleSheet } from "react-native";
import MealItem from "../MealItem";

export default function MealList({items}) {
  function renderMealItem(itemData) {
    // I will not be using this method although it works well but there are other ways of doing it
    // function pressHandler() {
    //   navigation.navigate("mealDetails", {id: itemData.item.id});
    // }

    const item = itemData.item;

    const mealItemProps = {
      title: item.title,
      ImageUrl: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration,
      id: item.id,
    };
    return <MealItem {...mealItemProps} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
