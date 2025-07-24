/* ДЗ 7. Робота з обʼєктами
Задача 1

Створіть об'єкт з щонайменше трьома властивостями (намагайтесь виявити фантазію). Напишіть метод getInfo(), який виводитиме всі властивості об'єкта у вигляді пар "ключ: значення". Зверніть увагу: метод повинен працювати навіть після додавання нових властивостей до об'єкта. 

Наприклад так:

obj.getInfo(); // Правильна інформація про об'єкт
obj.newProperty = 'Нова властивість!'; // Додали властивість до об'єкта
obj.getInfo(); // Виводить всі властивості, включаючи щойно додану.
Умови виконання ДЗ

Не використовувати функції або інші матеріали які ми не вивчали
Не використовувати методи keys, values, entries
Намагайтесь робити ДЗ самостійно та не дивитися будь-які підказки */

/* let seaBag = {
  towel: 'Пляжний рушник',
  sunscreen: 'Крем SPF 50',
  book: 'Кінг',

  getInfo: function() {
    for (let key in this) {
      console.log(key + ': ' + this[key]);
    }
  }
};

//seaBag.getInfo();

seaBag.snacks = 'Фрукти та вода';

seaBag.getInfo();
 */

/* Задача 2. Сума вартості послуг

 Припустимо, у нас є об'єкт. Властивості об'єкта - назва послуги та її вартість, вигляду:

var services = {

"стрижка": "60 грн",

"гоління": "80 грн",

"Миття голови": "100 грн"

};

"Послуги" можуть додаватися по ходу роботи:

services['Розбити скло'] = "200 грн";

Умови виконання ДЗ

створити метод price(), який обчислює та повертає загальну вартість "наданих послуг".
створити метод minPrice() - який повертає мінімальний price
створити метод maxPrice() - який повертає максимальний price */

/* var services = {
  "стрижка": "60 грн",
  "гоління": "80 грн",
  "Миття голови": "100 грн",

  price: function() {
    let totalCoast = 0;
    for (let key in this) {
      if (typeof this[key] === "string" && this[key].includes("грн")) {
        totalCoast += parseInt(this[key]);
      }
    }
    return totalCoast + "грн";
  },

 minPrice: function() {
    let min = 0;
    for (let key in this) {
      if (typeof this[key] === "string" && this[key].includes("грн")) {
        let value = parseInt(this[key]);
         if (min === 0 || value < min) {
         min = value;
        }
      }
    }
    return min + "грн";
  },

  maxPrice: function() {
    let max = 0;
    for (let key in this) {
      if (typeof this[key] === "string" && this[key].includes("грн")) {
        let value = parseInt(this[key]);
        if (max === 0 || value > max) {
         max = value;
        }
      }
    }
    return max  + "грн";
  }
};

services['Розбити скло'] = "200 грн"; // можна розкоментувати, щоб властивість додалась в об'єкт, тоді загальна сума і макс ціна буде інша

console.log("Загальна сума: " + services.price());
console.log("Мінімальна ціна: " + services.minPrice());
console.log("Максимальна ціна: " + services.maxPrice()); */

