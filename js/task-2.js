function calcAverageCalories(days) {
  let total = 0;
  for (const day of days) {
    total += day.calories;
  }
  return total / days.length;
}
