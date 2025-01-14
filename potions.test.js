import Cauldron from './src/cauldron';
import allIngredients from './allIngredients';
import allDiseases from './allDiseases';
import antidoteCreationIngredients from './src/antidoteCreationIngredients';
import antidoteFailedIngredients from './src/antidoteFailedIngredients';
import poisonCreationIngredients from './src/poisonCreationIngredients';
import poisonFailedIngredients from './src/poisonFailedIngredients';
import elixirCreationIngredients from './src/elixirLesserCreationIngredients';
import roundDownToMultipleOfFive from './src/roundDownToMultipleOfFive';
import getTotalValue from './src/getTotalValue';
import getTotalDuration from './src/getTotalDuration';
import elixirLesserCreationIngredients from './src/elixirLesserCreationIngredients';
import elixirLeastCreationgIngredients from './src/elixirLeastCreationgIngredients';
import elixirNormalCreationIngredients from './src/elixirNormalCreationIngredients';
import elixirGreaterCreationIngredients from './src/elixirGreaterCreationIngredients';

const ingredients = allIngredients;
const diseases = allDiseases;

const cauldron = new Cauldron(ingredients, diseases);


describe('Cauldron Potion Creation', () => {
  describe('When ingredients are used to create a potion', () => {
    describe('and all ingredients have the effect "Restore"', () => {

      it('should contain "Antidote" in the name if the potion can cure a disease', () => {

        const potion = cauldron.createPotion(antidoteCreationIngredients);

        expect(potion.name).toContain('Antidote');
      });

      it('should have the modifiers positive', () => {

        const potion = cauldron.createPotion(antidoteCreationIngredients);

        // Check if all values in the modifiers object are positive
        const modifiers = potion.modifiers;
        const allModifiersPositive = Object.values(modifiers).every(value => value >= 0);

        expect(allModifiersPositive).toBe(true);
      });

      it('should not create an antidote if one ingredient does not have a "restore" effect', () => {

        const potion = cauldron.createPotion(antidoteFailedIngredients);

        // Check if the potion name does not contain "Antidote"
        expect(potion.name).not.toContain('Poison');
      });

    });

    describe('and all ingredients have the effect "Damage"', () => {

      it('should contain "Poison" in the name if the potion causes harm', () => {
        const potion = cauldron.createPotion(poisonCreationIngredients);

        expect(potion.name).toContain('Poison');
      });

      it('should have negative modifiers for damage effects', () => {
        const potion = cauldron.createPotion(poisonCreationIngredients);

        // Check if all values in the modifiers object are positive
        const modifiers = potion.modifiers;

        const allModifiersNegativeOrZero = Object.values(modifiers).every(value => value <= 0);

        expect(allModifiersNegativeOrZero).toBe(true);
      });

      it('should not create a "Poison" if one ingredient does not have a "damage" effect', () => {
        const potion = cauldron.createPotion(poisonFailedIngredients);

        // Check if the potion name does not contain "Antidote"
        expect(potion.name).not.toContain('Poison');
      });

    });
  });


  describe('and all ingredients have the effect "Boost"', () => {

    describe('When the number of ingredients is between 2 and 4', () => {

      describe('When all the effects are least', () => {

        it('should calculate the attribute value as the average, rounded down to the nearest multiple of 5', () => {
          const potion = cauldron.createPotion(elixirLeastCreationgIngredients);

          const totalValue = getTotalValue(elixirLeastCreationgIngredients);

          //All are lesser, there are 3 ingredients so they all should give a total value of 30 (10 * 3) 
          expect(totalValue).toBe(15);

          const average = totalValue / elixirLeastCreationgIngredients.length;
          const roundedValue = roundDownToMultipleOfFive(average);

          expect(roundedValue).toBe(5);

          // Get the modifier_value from the potion
          const modifierValue = potion.modifier_value;

          // Ensure modifier_value is rounded down to the nearest multiple of 5
          expect(modifierValue).toBe(5);

        });

        it('should calculate the duration value as the average, rounded down to the lowest whole number', () => {
          const potion = cauldron.createPotion(elixirLeastCreationgIngredients);

          const totalDuration = getTotalDuration(elixirLeastCreationgIngredients);

          //All are lesser, there are 3 ingredients so they all should give a total value of 30 (10 * 3) 
          expect(totalDuration).toBe(3);

          const averageDuration = Math.floor(totalDuration / elixirLeastCreationgIngredients.length);

          expect(averageDuration).toBe(1);

          // Get the duration from the potion
          const potionDuration = potion.duration;

          // Ensure duration is rounded down to the lowest
          expect(potionDuration).toBe(1);

        });

      });

      describe('When all the effects are lesser', () => {

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

      describe('When all the effects are normal', () => {

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

      describe('When all the effects are greater', () => {

        it('should calculate the attribute value as the average, rounded down to the nearest multiple of 5', () => {
          const potion = cauldron.createPotion(elixirGreaterCreationIngredients);

          console.log(potion);

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

    });

  });



});
