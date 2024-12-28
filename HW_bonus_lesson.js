/*
 * #1
 * Функція defUpperStr('My text') повертає текст, перетворений у верхній регістр, тобто: defUpperStr('My text') → 'MY TEXT'.
 *
 * Якщо функція викликається без параметра defUpperStr(), вона не повинна повертати undefined, у цьому випадку потрібно повернути рядок тексту за замовчуванням у верхньому регістрі, тобто defUpperStr() → 'DEFAULT TEXT'.
 *
 * При виконанні завдання не використовуйте оператор if, потрібен розв'язок із логічним оператором || або параметром за замовчуванням.
 */

const defUpperStr = (str = "DEFAULT TEXT") => str.toUpperCase();

console.log(defUpperStr("My text")); // MY TEXT
console.log(defUpperStr()); // DEFAULT TEXT

/*
 * #2
 *
 * Створіть функцію evenFn(n), яка приймає параметром число - кількість ітерацій циклу, тобто for 0..n.
 * Функція повинна повернути масив, що складається тільки з парних значень, які генеруються в циклі.
 *
 * Причому:
 * 0 не повинен потрапляти до результуючого масиву,
 * цикл має працювати до n включно,
 * дозволено тільки оператор for.
 *
 * Наприклад:
 * evenFn(10) → [2, 4, 6, 8, 10]
 * evenFn(15) → [2, 4, 6, 8, 10, 12, 14]
 * evenFn(20) → [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
 */

const evenFn = (n) => {
  let arr = [];
  for (let i = 0; i <= n; i++) {
    if (i % 2 === 0 && i !== 0) {
      arr.push(i);
    }
  }
  return arr;
};

console.log(evenFn(10)); // [2, 4, 6, 8, 10]
console.log(evenFn(15)); // [2, 4, 6, 8, 10, 12, 14]
console.log(evenFn(20)); // [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

/*
 * #3
 *
 * Створіть функцію weekFn(n), яка приймає номер дня тижня, а повертає його назву.
 * Якщо вводиться рядок, будь-яке дробове число або число поза діапазоном 1...7 - функція повинна повернути null.
 *
 * Наприклад:
 * 1   → 'Понеділок'
 * 2   → 'Вівторок'
 * ...
 * 7   → 'Неділя'
 * 9   → null
 * 1.5 → null
 * '2' → null
 * У реалізації функції обов'язково мають бути використані оператори switch / case / default.
 */

const weekFn = (n) => {
  switch (n) {
    case 1:
      return "Понеділок";
    case 2:
      return "Вівторок";
    case 3:
      return "Середа";
    case 4:
      return "Четвер";
    case 5:
      return "П'ятниця";
    case 6:
      return "Субота";
    case 7:
      return "Неділя";
    default:
      return null;
  }
};

console.log(weekFn(1)); // 'Понеділок'
console.log(weekFn(3)); // 'Середа'
console.log(weekFn(7)); // 'Неділя'
console.log(weekFn(9)); // null
console.log(weekFn(1.5)); // null
console.log(weekFn("2")); // null

/*
 * #4
 *
 * створіть функцію ageClassification(n), яка буде як параметр приймати будь-які числа і повертатиме рядок згідно з такими умовами, n:
 * менше 0   - null (зверніть увагу, що це саме null, а не рядок)
 * 0..24     - 'Дитинство'
 * 24+...44  - 'Молодість'
 * 44+..65   - 'Зрілість'
 * 65+..75   - 'Старість'
 * 75+..90   - 'Довголіття'
 * 90+..122  - 'Рекорд'
 * понад 122 - null (зверніть увагу, що це саме null, а не рядок)
 *
 */

const ageClassification = (n) =>
  n <= 0 || n > 122
    ? null
    : n <= 24
    ? "Дитинство"
    : n <= 44
    ? "Молодість"
    : n <= 65
    ? "Зрілість"
    : n <= 75
    ? "Старість"
    : n <= 90
    ? "Довголіття"
    : "Рекорд";

console.log("    -1 :", ageClassification(-1)); // -1 : null
console.log("     0 :", ageClassification(0)); // 0 : null
console.log("     1 :", ageClassification(1)); // 1 : Дитинство
console.log("    24 :", ageClassification(24)); // 24 : Дитинство
console.log(" 24.01 :", ageClassification(24.01)); // 24.01 : Молодість
console.log("    44 :", ageClassification(44)); // 44 : Молодість
console.log(" 44.01 :", ageClassification(44.01)); // 44.01 : Зрілість
console.log("    65 :", ageClassification(65)); // 65 : Зрілість
console.log("  65.1 :", ageClassification(65.1)); // 65.1 : Старість
console.log("    75 :", ageClassification(75)); // 75 : Старість
console.log(" 75.01 :", ageClassification(75.01)); // 75.01 : Довголіття
console.log("    90 :", ageClassification(90)); // 90 : Довголіття
console.log(" 90.01 :", ageClassification(90.01)); // 90.01 : Рекорд
console.log("   122 :", ageClassification(122)); // 122 : Рекорд
console.log("122.01 :", ageClassification(122.01)); // 122.01 : null
console.log("   150 :", ageClassification(150)); // 150 : null
