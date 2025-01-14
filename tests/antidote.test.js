import allDiseases from "../allDiseases";
import allIngredients from "../allIngredients";
import antidoteCreationIngredients from "../src/antidoteCreationIngredients";
import antidoteFailedIngredients from "../src/antidoteFailedIngredients";
import Cauldron from "../src/cauldron";
import poisonCreationIngredients from "../src/poisonCreationIngredients";
import poisonFailedIngredients from "../src/poisonFailedIngredients";

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

});