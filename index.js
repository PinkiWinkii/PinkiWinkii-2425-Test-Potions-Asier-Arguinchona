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
        
        const ingredientsArray = [{
            "_id": "6702b4f876863c206a48cd1c",
            "name": "Frostmoss",
            "description": "A cold moss that increases agility and dexterity.",
            "value": 35,
            "effects": [
              "lesser_boost_dexterity"
            ],
            "image": "/images/ingredients/boost/boost_9.webp",
            "type": "ingredient"
          },
          {
            "_id": "6702b4f876863c206a48cd1c",
            "name": "Frostmoss",
            "description": "A cold moss that increases agility and dexterity.",
            "value": 35,
            "effects": [
              "lesser_boost_dexterity"
            ],
            "image": "/images/ingredients/boost/boost_9.webp",
            "type": "ingredient"
          },
          {
            "_id": "6702b4f876863c206a48cd1c",
            "name": "Frostmoss",
            "description": "A cold moss that increases agility and dexterity.",
            "value": 35,
            "effects": [
              "lesser_boost_dexterity"
            ],
            "image": "/images/ingredients/boost/boost_9.webp",
            "type": "ingredient"
          }]
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