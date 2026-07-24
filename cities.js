// Единый список городов сервиса — все областные центры Казахстана
// плюс города республиканского значения. Подключается на всех страницах,
// чтобы список не приходилось править в нескольких местах.
const KZ_CITIES = [
  "Алматы",
  "Астана",
  "Шымкент",
  "Актау",
  "Актобе",
  "Атырау",
  "Жезказган",
  "Караганда",
  "Кокшетау",
  "Костанай",
  "Кызылорда",
  "Қонаев",
  "Павлодар",
  "Петропавловск",
  "Семей",
  "Талдыкорган",
  "Тараз",
  "Туркестан",
  "Уральск",
  "Усть-Каменогорск",
];

// Наполняет <select> списком городов.
// includeAll — добавить пункт «Все города» в начало (для фильтра каталога)
function fillCitySelect(selectId, includeAll = false) {
  const select = document.getElementById(selectId);
  if (!select) return;
  const options = [];
  if (includeAll) options.push('<option value="">Все города</option>');
  else options.push('<option value="">Выбери город</option>');
  KZ_CITIES.forEach(c => options.push(`<option value="${c}">${c}</option>`));
  select.innerHTML = options.join("");
}
