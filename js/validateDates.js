function validateDate(day, month, year) {
  let result = -1;
  let daysOfTheMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if (year % 4 == 0) {
    daysOfTheMonth[1] = 29;
  }
  if (
    year >= 1700 &&
    year <= new Date().getFullYear() &&
    month >= 1 &&
    month <= 12 &&
    day > 0 &&
    day <= daysOfTheMonth[month - 1]
  ) {
    result = `${year}-${month}-${day}`;
  }
  return result;
}
