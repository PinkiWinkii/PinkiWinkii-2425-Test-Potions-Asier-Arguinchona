import Cauldron from "./src/cauldron.js";
import { getDiesesData, getIngredientsData } from "./service.js";

const executePotionCreation = async() => {
    try {
        console.log("EXECUTING POTION CREATION");
        
        const ingredientsJson = await getIngredientsData();
        // console.log('INGREDIENT JSON');
        // console.log(ingredientsJson);

        const ingredientsData = ingredientsJson.data;
        // console.log('INGREDIENT DATA');
        // console.log(ingredientsData[1]);

        const diseasesJson = await getDiesesData();
        const diseasesData = diseasesJson.data;
        // console.log('DISEASES DATA');
        // console.log(diseasesData[0]);
        
        const ingredients = ingredientsData;
        const curses = diseasesData;
        
        const ingredientsArray = [
            {
              "_id": "6702b46b76863c206a48cd00",
              "name": "Shadowbane Essence",
              "description": "An extract from dark fruits that lowers vitality and leaves a bitter aftertaste.",
              "value": 90,
              "effects": [
                "lesser_damage_hit_points"
              ],
              "image": "/images/ingredients/damage/damage_14.webp",
              "type": "ingredient"
            },
            {
              "_id": "6702b44f76863c206a48ccec",
              "name": "Enduring Root",
              "description": "A robust root that fortifies the constitution and endurance.",
              "value": 20,
              "effects": [
                "lesser_damage_constitution"
              ],
              "image": "/images/ingredients/restore/restore_23.webp",
              "type": "ingredient"
            },
          ];

        const cauldron = new Cauldron(ingredients, curses);
         
        //console.log("CAULDRON INGREDIENTS: " + cauldron.ingredients);
        
        const potion = cauldron.createPotion(ingredientsArray)

        console.log("Created potion");
        console.log(potion);
        


    } catch (error) {
        console.error("Error loading ingredients:", error);
    }
};



// Export the execute function without calling it
export default executePotionCreation;

executePotionCreation();