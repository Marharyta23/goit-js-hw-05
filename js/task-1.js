function isEnoughCapacity(products, containerSize) {
  let total = 0;
  const arrayOfProducts = Object.values(products);
  for (const key in arrayOfProducts) {
    total += arrayOfProducts[key];
  }
  return total <= containerSize;
}
