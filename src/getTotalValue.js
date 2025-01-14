function getTotalValue(ingredients)
{
  // Initialize in 0
  let totalValue = 0;

  //Function to obtain the effect of an ingredient and the corresponding value
  const getEffectValue = (effect) => {
    if (effect.includes("least")) return 5;    // Effect "least"
    if (effect.includes("lesser")) return 10;  // Effect "lesser"
    if (effect.includes("greater")) return 20;  // Effect "greater"
    return 15;  // NOrmal effect
  };

  // Loop ingredients
  for (const ingredient of ingredients) {
    for (const effect of ingredient.effects) {
      //Add value depending on found effect
      totalValue += getEffectValue(effect);
    }
  }

  return totalValue;
}

export default getTotalValue;