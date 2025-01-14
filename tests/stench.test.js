import allDiseases from "../allDiseases";
import allIngredients from "../allIngredients";
import antidoteCreationIngredients from "../src/antidoteCreationIngredients";
import antidoteFailedIngredients from "../src/antidoteFailedIngredients";
import Cauldron from "../src/cauldron";
import poisonCreationIngredients from "../src/poisonCreationIngredients";
import poisonFailedIngredients from "../src/poisonFailedIngredients";
import { twoIngredientEssence,fourIngredientEssence, failedIngredientEssence, failedIngredientEssence2 } from "../src/essenceIngredients";
import getTotalValue from "../src/getTotalValue";
import threeIngredientEssence from "../src/essenceThreeIngredients";
import { failedIngredientStench, failedIngredientStench2, fourIngredientStench, threeIngredientStench, twoIngredientStench } from "../src/stenchIngredients";

const ingredients = allIngredients;
const diseases = allDiseases;

const cauldron = new Cauldron(ingredients, diseases);


describe('Cauldron Potion Creation', () => {
  describe('When ingredients are used to create a potion', () => {
    describe('and all ingredients have the effect "Decrease"', () => {
      describe('and all ingredients have the atributte "hit_points"', () => {

        describe('and all the effects are the same type (lesser, greater...)', () => {

          describe('and the number of ingredients is 2', () => {

            it('should have the modifier increased by 20%', () => {

              const potion = cauldron.createPotion(twoIngredientStench);

              const totalValue = getTotalValue(twoIngredientStench);

              expect(totalValue).toBe(30);

              expect(potion.modifier_value).toBe(36);
            });
          });

          describe('and the number of ingredients is 3', () => {

            it('should have the modifier increased by 40%', () => {

              const potion = cauldron.createPotion(threeIngredientStench);

              console.log(potion);   

              const totalValue = getTotalValue(threeIngredientStench);

              expect(totalValue).toBe(45);

              expect(potion.modifier_value).toBe(63);


            });
          });

          describe('and the number of ingredients is 4', () => {

            it('should have the modifier increased by 80%', () => {

              const potion = cauldron.createPotion(fourIngredientStench);

              console.log(potion);   

              const totalValue = getTotalValue(fourIngredientStench);

              expect(totalValue).toBe(60);

              expect(potion.modifier_value).toBe(108);

            });
          });

          describe('and the potion succedeed', () => {
            
            it('should have Essence in the name', () => {

              const potion = cauldron.createPotion(fourIngredientStench);

              expect(potion.name).toContain('Stench');
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
          const potion = cauldron.createPotion(failedIngredientStench);

          expect(potion.name).not.toContain('Stench');
        });
      });
    });

    describe('and some ingredient doesnt have the effect "Increase"', () => {
      it('should not create an Essence', () => {
        const potion = cauldron.createPotion(failedIngredientStench2);

        expect(potion.name).not.toContain('Stench');
      });
    });
  });
});