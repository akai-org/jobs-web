const minLength = length => value =>
  value.length > length ? undefined : `Minimalna liczba znaków to ${length}`;

export default minLength;
