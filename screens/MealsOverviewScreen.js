
import { CATEGORIES, MEALS } from "../data/dummy-data";

import { useLayoutEffect } from "react";
import MealList from "../components/MealList/MealList";

function MealsOverViewScreen({ route, navigation }) {
  const id = route.params.categoryId;
  const displayedMeals = MEALS.filter((meanItem) => {
    return meanItem.categoryIds.indexOf(id);
  });

  useLayoutEffect(() => {
    const title=CATEGORIES.find((category)=>category.id===id).title
    navigation.setOptions({
      title: title,
    });
  });


return <MealList items={displayedMeals}/>

}

export default MealsOverViewScreen;
