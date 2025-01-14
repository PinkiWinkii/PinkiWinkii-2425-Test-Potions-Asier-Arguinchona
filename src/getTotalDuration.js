function getTotalDuration(ingredients) {
  // Initialize in 0
  let totalDuration = 0;

  //Function to obtain the effect of an ingredient and the corresponding value
  const getEffectDuration = (effect) => {
    if (effect.includes("least")) return 1;    // Effect "least"
    if (effect.includes("lesser")) return 1;
    if (effect.includes("greater")) return 3;  // Effect "greater"
    return 2;  // NOrmal effect
  };

  // Loop ingredients
  for (const ingredient of ingredients) {
    for (const effect of ingredient.effects) {
      //Add value depending on found effect
      totalDuration += getEffectDuration(effect);
    }
  }

  return totalDuration;
}

export default getTotalDuration;