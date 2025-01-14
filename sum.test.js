import Cauldron from './src/cauldron';
import sum from './sum';


test('adds 1 + 2 to equal 3', () => {
  const ingredients = [];
  const diseases = [];

  const cauldron = new Cauldron(ingredients, diseases);

  cauldron.createPotion()

  expect(sum(1, 2)).toBe(3);
});