import allDiseases from "../allDiseases";
import allIngredients from "../allIngredients";
import Cauldron from "../src/cauldron";
import { twoIngredientEssence,fourIngredientEssence, failedIngredientEssence, failedIngredientEssence2 } from "../src/essenceIngredients";
import getTotalValue from "../src/getTotalValue";
import threeIngredientEssence from "../src/essenceThreeIngredients";

const ingredients = allIngredients;
const diseases = allDiseases;

const cauldron = new Cauldron(ingredients, diseases);


describe('Cauldron Potion Creation', () => {
  describe('When ingredients are used to create a potion', () => {
    describe('and all ingredients have the effect "Increase"', () => {
      describe('and all ingredients have the atributte "hit_points"', () => {

        describe('and all the effects are the same type (lesser, greater...)', () => {

          describe('and the number of ingredients is 2', () => {

            it('should have the modifier increased by 20%', () => {

              const potion = cauldron.createPotion(twoIngredientEssence);

              const totalValue = getTotalValue(twoIngredientEssence);

              expect(totalValue).toBe(30);

              expect(potion.modifier_value).toBe(36);
            });
          });

          describe('and the number of ingredients is 3', () => {

            it('should have the modifier increased by 40%', () => {

              const potion = cauldron.createPotion(threeIngredientEssence);

              const totalValue = getTotalValue(threeIngredientEssence);

              expect(totalValue).toBe(45);

              expect(potion.modifier_value).toBe(63);


            });
          });

          describe('and the number of ingredients is 4', () => {

            it('should have the modifier increased by 80%', () => {

              const potion = cauldron.createPotion(fourIngredientEssence);

              const totalValue = getTotalValue(fourIngredientEssence);

              expect(totalValue).toBe(60);

              expect(potion.modifier_value).toBe(108);

            });
          });

          describe('and the potion succedeed', () => {
            
            it('should have Essence in the name', () => {

              const potion = cauldron.createPotion(fourIngredientEssence);

              expect(potion.name).toContain('Essence');
            });
          });

          describe('and the number of ingredients is LESS THAN 2 or GREATER THAN 4', () => {
            
            it('should throw an error if less than two ingredients are provided', () => {
              const insufficientIngredients = []; // Cambia esto para probar con menos de 2 ingredientes
      
              // Usamos expect().toThrow() para verificar que se lanza un error
              expect(() => {
                cauldron.createPotion(insufficientIngredients);
              }).toThrowError("At least two ingredients are required");
            });
          });

        });
      });

      describe('and all ingredients have the different attributes', () => {
            
        it('should not create an Essence', () => {
          const potion = cauldron.createPotion(failedIngredientEssence);

          expect(potion.name).not.toContain('Essence');
        });
      });
    });

    describe('and some ingredient doesnt have the effect "Increase"', () => {
      it('should not create an Essence', () => {
        const potion = cauldron.createPotion(failedIngredientEssence2);

        expect(potion.name).not.toContain('Essence');
      });
    });
  });
});