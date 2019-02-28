export default function(min, max) {
  if (!min && !max) return "Bezpłatnie";
  if (min && !max) return `${min} PLN`;
  if (!min && max) return `${max} PLN`;
  if (min !== max) return `${min} - ${max} PLN`;
  if (min === max) return `${min} PLN`;

  return "Brak informacji o wynagrodzeniu";
}
