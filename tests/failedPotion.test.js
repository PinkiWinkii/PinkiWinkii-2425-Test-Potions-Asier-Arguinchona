import allDiseases from "../allDiseases";
import allIngredients from "../allIngredients";
import Cauldron from "../src/cauldron";
import getTotalValue from "../src/getTotalValue";
import { failedIngredientStench, failedIngredientStench2, fourIngredientStench, threeIngredientStench, twoIngredientStench } from "../src/stenchIngredients";

const ingredients = allIngredients;
const diseases = allDiseases;

const cauldron = new Cauldron(ingredients, diseases);


describe('Cauldron Potion Creation', () => {
  describe('When ingredients are used to create a potion', () => {
    describe('and the potion failed to create', () => {
      it('should create a Tonic of Downfall', () => {
        const potion = cauldron.createPotion(failedIngredientStench2);

        expect(potion.name).toContain('Tonic');
      });
    });
  });
});