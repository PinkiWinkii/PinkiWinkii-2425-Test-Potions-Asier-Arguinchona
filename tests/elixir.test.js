import allDiseases from "../allDiseases";
import allIngredients from "../allIngredients";
import Cauldron from "../src/cauldron";
import elixirCalmDifferentIng from "../src/elixirCalmDifferentIng";
import elixirCalmGreaterIng from "../src/elixirCalmGreaterIng";
import elixirCalmLeastIng from "../src/elixirCalmLeastIng";
import elixirCalmLesser from "../src/elixirCalmLesserIng";
import elixirCalmNormalIng from "../src/elixirCalmNormalIng";
import elixirDifferentCreationIngredients from "../src/elixirDifferentCreationIngredients";
import elixirFailedIngredients from "../src/elixirFailedIngredients";
import elixirFailedIngredients2 from "../src/elixirFailedIngredients2";
import elixirGreaterCreationIngredients from "../src/elixirGreaterCreationIngredients";
import elixirLeastCreationIngredients from "../src/elixirLeastCreationIngredients";
import elixirLesserCreationIngredients from "../src/elixirLesserCreationIngredients";
import elixirNormalCreationIngredients from "../src/elixirNormalCreationIngredients";
import getTotalDuration from "../src/getTotalDuration";
import getTotalValue from "../src/getTotalValue";
import roundDownToMultipleOfFive from "../src/roundDownToMultipleOfFive";

const ingredients = allIngredients;
const diseases = allDiseases;

const cauldron = new Cauldron(ingredients, diseases);

describe('Cauldron Potion Creation', () => {
  describe('When ingredients are used to create a potion', () => {

    describe('and all ingredients have the effect "Boost"', () => {

      describe('When the number of ingredients is between 2 and 4', () => {

        describe('When all the effects are LEAST', () => {

          it('should calculate the attribute value as the average, rounded down to the nearest multiple of 5', () => {
            const potion = cauldron.createPotion(elixirLeastCreationIngredients);

            const totalValue = getTotalValue(elixirLeastCreationIngredients);

            //All are lesser, there are 3 ingredients so they all should give a total value of 30 (10 * 3) 
            expect(totalValue).toBe(15);

            const average = totalValue / elixirLeastCreationIngredients.length;
            const roundedValue = roundDownToMultipleOfFive(average);

            expect(roundedValue).toBe(5);

            // Get the modifier_value from the potion
            const modifierValue = potion.modifier_value;

            // Ensure modifier_value is rounded down to the nearest multiple of 5
            expect(modifierValue).toBe(5);

          });

          it('should calculate the duration value as the average, rounded down to the lowest whole number', () => {
            const potion = cauldron.createPotion(elixirLeastCreationIngredients);

            const totalDuration = getTotalDuration(elixirLeastCreationIngredients);

            //All are lesser, there are 3 ingredients so they all should give a total value of 30 (10 * 3) 
            expect(totalDuration).toBe(3);

            const averageDuration = Math.floor(totalDuration / elixirLeastCreationIngredients.length);

            expect(averageDuration).toBe(1);

            // Get the duration from the potion
            const potionDuration = potion.duration;

            // Ensure duration is rounded down to the lowest
            expect(potionDuration).toBe(1);

          });

        });

        describe('When all the effects are LESSER', () => {

          it('should calculate the attribute value as the average, rounded down to the nearest multiple of 5', () => {
            const potion = cauldron.createPotion(elixirLesserCreationIngredients);

            const totalValue = getTotalValue(elixirLesserCreationIngredients);

            //All are lesser, there are 3 ingredients so they all should give a total value of 30 (10 * 3) 
            expect(totalValue).toBe(30);

            const average = totalValue / elixirLesserCreationIngredients.length;
            const roundedValue = roundDownToMultipleOfFive(average);

            expect(roundedValue).toBe(10);

            // Get the modifier_value from the potion
            const modifierValue = potion.modifier_value;

            // Ensure modifier_value is rounded down to the nearest multiple of 5
            expect(modifierValue).toBe(10);

          });

          it('should calculate the duration value as the average, rounded down to the lowest whole number', () => {
            const potion = cauldron.createPotion(elixirLesserCreationIngredients);

            const totalDuration = getTotalDuration(elixirLesserCreationIngredients);

            //All are lesser, there are 3 ingredients so they all should give a total value of 30 (10 * 3) 
            expect(totalDuration).toBe(3);

            const averageDuration = Math.floor(totalDuration / elixirLesserCreationIngredients.length);

            expect(averageDuration).toBe(1);

            // Get the duration from the potion
            const potionDuration = potion.duration;

            // Ensure duration is rounded down to the lowest
            expect(potionDuration).toBe(1);

          });


        });

        describe('When all the effects are NORMAL', () => {

          it('should calculate the attribute value as the average, rounded down to the nearest multiple of 5', () => {
            const potion = cauldron.createPotion(elixirNormalCreationIngredients);

            const totalValue = getTotalValue(elixirNormalCreationIngredients);

            //All are lesser, there are 3 ingredients so they all should give a total value of 30 (10 * 3) 
            expect(totalValue).toBe(45);

            const average = totalValue / elixirNormalCreationIngredients.length;
            const roundedValue = roundDownToMultipleOfFive(average);

            expect(roundedValue).toBe(15);

            // Get the modifier_value from the potion
            const modifierValue = potion.modifier_value;

            // Ensure modifier_value is rounded down to the nearest multiple of 5
            expect(modifierValue).toBe(15);  // This checks if it's divisible by 5

          });

          it('should calculate the duration value as the average, rounded down to the lowest whole number', () => {
            const potion = cauldron.createPotion(elixirNormalCreationIngredients);

            const totalDuration = getTotalDuration(elixirNormalCreationIngredients);

            //All are lesser, there are 3 ingredients so they all should give a total value of 30 (10 * 3) 
            expect(totalDuration).toBe(6);

            const averageDuration = Math.floor(totalDuration / elixirNormalCreationIngredients.length);

            expect(averageDuration).toBe(2);

            // Get the duration from the potion
            const potionDuration = potion.duration;

            // Ensure duration is rounded down to the lowest
            expect(potionDuration).toBe(2);

          });


        });

        describe('When all the effects are GREATER', () => {

          it('should calculate the attribute value as the average, rounded down to the nearest multiple of 5', () => {
            const potion = cauldron.createPotion(elixirGreaterCreationIngredients);

            const totalValue = getTotalValue(elixirGreaterCreationIngredients);

            //All are lesser, there are 3 ingredients so they all should give a total value of 30 (10 * 3) 
            expect(totalValue).toBe(60);

            const average = totalValue / elixirGreaterCreationIngredients.length;
            const roundedValue = roundDownToMultipleOfFive(average);

            expect(roundedValue).toBe(20);

            // Get the modifier_value from the potion
            const modifierValue = potion.modifier_value;

            // Ensure modifier_value is rounded down to the nearest multiple of 5
            expect(modifierValue).toBe(20);  // Check if potion also has the same modifier

          });

          it('should calculate the duration value as the average, rounded down to the lowest whole number', () => {
            const potion = cauldron.createPotion(elixirGreaterCreationIngredients);

            const totalDuration = getTotalDuration(elixirGreaterCreationIngredients);

            //All are lesser, there are 3 ingredients so they all should give a total value of 30 (10 * 3) 
            expect(totalDuration).toBe(9);

            const averageDuration = Math.floor(totalDuration / elixirGreaterCreationIngredients.length);

            expect(averageDuration).toBe(3);

            // Get the duration from the potion
            const potionDuration = potion.duration;

            // Ensure duration is rounded down to the lowest
            expect(potionDuration).toBe(3); // Check if potion also has the same duration

          });


        });

        describe('When all the effects are DIFFERENT', () => {

          it('should calculate the attribute value as the average, rounded down to the nearest multiple of 5', () => {
            const potion = cauldron.createPotion(elixirDifferentCreationIngredients);

            const totalValue = getTotalValue(elixirDifferentCreationIngredients);

            //All are lesser, there are 3 ingredients so they all should give a total value of 30 (10 * 3) 
            expect(totalValue).toBe(55);

            const average = totalValue / elixirDifferentCreationIngredients.length;
            const roundedValue = roundDownToMultipleOfFive(average);

            expect(roundedValue).toBe(10);

            // Get the modifier_value from the potion
            const modifierValue = potion.modifier_value;

            // Ensure modifier_value is rounded down to the nearest multiple of 5
            expect(modifierValue).toBe(10);  // Check if potion also has the same modifier

          });

          it('should calculate the duration value as the average, rounded down to the lowest whole number', () => {
            const potion = cauldron.createPotion(elixirDifferentCreationIngredients);

            const totalDuration = getTotalDuration(elixirDifferentCreationIngredients);

            expect(totalDuration).toBe(7);

            const averageDuration = Math.floor(totalDuration / elixirDifferentCreationIngredients.length);

            expect(averageDuration).toBe(1);

            // Get the duration from the potion
            const potionDuration = potion.duration;

            // Ensure duration is rounded down to the lowest
            expect(potionDuration).toBe(1); // Check if potion also has the same duration

          });


        });

        describe('When Elixir is created succesfully', () => {

          it('should have Elixir in the name', () => {
            const potion = cauldron.createPotion(elixirDifferentCreationIngredients);

            // Check if the potion name does not contain "Antidote"
            expect(potion.name).toContain('Elixir');

          });

        });

      });

    });

    describe('And all ingredients dont have same effect', () => {
      it('should NOT have Elixir in the name', () => {

        const potion = cauldron.createPotion(elixirFailedIngredients);

        expect(potion.name).not.toContain('Elixir');
      });
    });

    describe('and all ingredients have the effect "Calm"', () => {

      describe('When the number of ingredients is between 2 and 4', () => {

        describe('When all the effects are LEAST', () => {

          it('should calculate the attribute value as the average, rounded down to the nearest multiple of 5', () => {
            const potion = cauldron.createPotion(elixirCalmLeastIng);

            const totalValue = getTotalValue(elixirCalmLeastIng);

            //All are lesser, there are 3 ingredients so they all should give a total value of 30 (10 * 3) 
            expect(totalValue).toBe(15);

            const average = totalValue / elixirCalmLeastIng.length;
            const roundedValue = roundDownToMultipleOfFive(average);

            expect(roundedValue).toBe(5);

            // Get the modifier_value from the potion
            const modifierValue = potion.modifier_value;

            // Ensure modifier_value is rounded down to the nearest multiple of 5
            expect(modifierValue).toBe(-5);

          });

          it('should calculate the duration value as the average, rounded down to the lowest whole number', () => {
            const potion = cauldron.createPotion(elixirCalmLeastIng);

            const totalDuration = getTotalDuration(elixirCalmLeastIng);

            //All are lesser, there are 3 ingredients so they all should give a total value of 30 (10 * 3) 
            expect(totalDuration).toBe(3);

            const averageDuration = Math.floor(totalDuration / elixirCalmLeastIng.length);

            expect(averageDuration).toBe(1);

            // Get the duration from the potion
            const potionDuration = potion.duration;

            // Ensure duration is rounded down to the lowest
            expect(potionDuration).toBe(1);

          });

        });

        describe('When all the effects are LESSER', () => {

          it('should calculate the attribute value as the average, rounded down to the nearest multiple of 5', () => {
            const potion = cauldron.createPotion(elixirCalmLesser);

            const totalValue = getTotalValue(elixirCalmLesser);

            //All are lesser, there are 3 ingredients so they all should give a total value of 30 (10 * 3) 
            expect(totalValue).toBe(30);

            const average = totalValue / elixirCalmLesser.length;
            const roundedValue = roundDownToMultipleOfFive(average);

            expect(roundedValue).toBe(10);

            // Get the modifier_value from the potion
            const modifierValue = potion.modifier_value;

            // Ensure modifier_value is rounded down to the nearest multiple of 5
            expect(modifierValue).toBe(-10);

          });

          it('should calculate the duration value as the average, rounded down to the lowest whole number', () => {
            const potion = cauldron.createPotion(elixirCalmLesser);

            const totalDuration = getTotalDuration(elixirCalmLesser);

            //All are lesser, there are 3 ingredients so they all should give a total value of 30 (10 * 3) 
            expect(totalDuration).toBe(3);

            const averageDuration = Math.floor(totalDuration / elixirCalmLesser.length);

            expect(averageDuration).toBe(1);

            // Get the duration from the potion
            const potionDuration = potion.duration;

            // Ensure duration is rounded down to the lowest
            expect(potionDuration).toBe(1);

          });


        });

        describe('When all the effects are NORMAL', () => {

          it('should calculate the attribute value as the average, rounded down to the nearest multiple of 5', () => {
            const potion = cauldron.createPotion(elixirCalmNormalIng);

            const totalValue = getTotalValue(elixirCalmNormalIng);

            //All are lesser, there are 3 ingredients so they all should give a total value of 30 (10 * 3) 
            expect(totalValue).toBe(45);

            const average = totalValue / elixirCalmNormalIng.length;
            const roundedValue = roundDownToMultipleOfFive(average);

            expect(roundedValue).toBe(15);

            // Get the modifier_value from the potion
            const modifierValue = potion.modifier_value;

            // Ensure modifier_value is rounded down to the nearest multiple of 5
            expect(modifierValue).toBe(-15);

          });

          it('should calculate the duration value as the average, rounded down to the lowest whole number', () => {
            const potion = cauldron.createPotion(elixirCalmNormalIng);

            const totalDuration = getTotalDuration(elixirCalmNormalIng);

            //All are lesser, there are 3 ingredients so they all should give a total value of 30 (10 * 3) 
            expect(totalDuration).toBe(6);

            const averageDuration = Math.floor(totalDuration / elixirCalmNormalIng.length);

            expect(averageDuration).toBe(2);

            // Get the duration from the potion
            const potionDuration = potion.duration;

            // Ensure duration is rounded down to the lowest
            expect(potionDuration).toBe(2);

          });


        });

        describe('When all the effects are GREATER', () => {

          it('should calculate the attribute value as the average, rounded down to the nearest multiple of 5', () => {
            const potion = cauldron.createPotion(elixirCalmGreaterIng);

            const totalValue = getTotalValue(elixirCalmGreaterIng);

            //All are lesser, there are 3 ingredients so they all should give a total value of 30 (10 * 3) 
            expect(totalValue).toBe(60);

            const average = totalValue / elixirCalmGreaterIng.length;
            const roundedValue = roundDownToMultipleOfFive(average);

            expect(roundedValue).toBe(20);

            // Get the modifier_value from the potion
            const modifierValue = potion.modifier_value;

            // Ensure modifier_value is rounded down to the nearest multiple of 5
            expect(modifierValue).toBe(-20);  // Check if potion also has the same modifier

          });

          it('should calculate the duration value as the average, rounded down to the lowest whole number', () => {
            const potion = cauldron.createPotion(elixirCalmGreaterIng);

            const totalDuration = getTotalDuration(elixirCalmGreaterIng);

            //All are lesser, there are 3 ingredients so they all should give a total value of 30 (10 * 3) 
            expect(totalDuration).toBe(9);

            const averageDuration = Math.floor(totalDuration / elixirCalmGreaterIng.length);

            expect(averageDuration).toBe(3);

            // Get the duration from the potion
            const potionDuration = potion.duration;

            // Ensure duration is rounded down to the lowest
            expect(potionDuration).toBe(3); // Check if potion also has the same duration

          });


        });

        describe('When all the effects are DIFFERENT', () => {

          it('should calculate the attribute value as the average, rounded down to the nearest multiple of 5', () => {
            const potion = cauldron.createPotion(elixirCalmDifferentIng);

            const totalValue = getTotalValue(elixirCalmDifferentIng);

            //All are lesser, there are 3 ingredients so they all should give a total value of 30 (10 * 3) 
            expect(totalValue).toBe(55);

            const average = totalValue / elixirCalmDifferentIng.length;
            const roundedValue = roundDownToMultipleOfFive(average);

            expect(roundedValue).toBe(10);

            // Get the modifier_value from the potion
            const modifierValue = potion.modifier_value;

            // Ensure modifier_value is rounded down to the nearest multiple of 5
            expect(modifierValue).toBe(10);  // Check if potion also has the same modifier

          });

          it('should calculate the duration value as the average, rounded down to the lowest whole number', () => {
            const potion = cauldron.createPotion(elixirCalmDifferentIng);

            const totalDuration = getTotalDuration(elixirCalmDifferentIng);

            expect(totalDuration).toBe(7);

            const averageDuration = Math.floor(totalDuration / elixirCalmDifferentIng.length);

            expect(averageDuration).toBe(1);

            // Get the duration from the potion
            const potionDuration = potion.duration;

            // Ensure duration is rounded down to the lowest
            expect(potionDuration).toBe(1); // Check if potion also has the same duration

          });


        });

        describe('When Elixir is created succesfully', () => {

          it('should have Elixir in the name', () => {
            const potion = cauldron.createPotion(elixirCalmDifferentIng);

            // Check if the potion name does not contain "Antidote"
            expect(potion.name).toContain('Elixir');

          });

        });

      });

    });

    describe('And any of the ingredients dont have Calm or Boost effects', () => {
      it('should NOT have Elixir in the name', () => {

        const potion = cauldron.createPotion(elixirFailedIngredients2);

        expect(potion.name).not.toContain('Elixir');
      });
    });

    describe('And all ingredients dont have same effect', () => {
      it('should NOT have Elixir in the name', () => {

        const potion = cauldron.createPotion(elixirFailedIngredients);

        expect(potion.name).not.toContain('Elixir');
      });
    });

    describe('When the number of ingredients is LESS THAN 2 or GREATER THAN 4', () => {
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