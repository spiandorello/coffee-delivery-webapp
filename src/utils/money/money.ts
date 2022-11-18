export function format(
  value: number,
  currency = 'BRL',
  i18n = document.documentElement.lang,
) {
  let money = value;

  if (!value) {
    money = 0;
  }

  return new Intl.NumberFormat(i18n, {
    style: 'currency',
    currency,
  }).format(money)
    .replace(/^(\D+)/, '$1 ');
}