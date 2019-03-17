const regex = (pattern, message = "Błąd danych") => value => {
  const re = new RegExp(pattern);
  return re.test(value) ? null : message;
};

export default regex;
