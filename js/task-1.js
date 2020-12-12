// В HTML есть список категорий ul#categories.

// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4

const listRel = document.querySelectorAll('#categories .item');
console.log(`В списке ${listRel.length} категории.`);
listRel.forEach((elem, i) => {
  const h2Rels = document.querySelectorAll('li.item h2');
  const liRels = document.querySelectorAll('li.item ul');
  console.log(`${h2Rels[i].textContent}`);
  console.log(`${liRels[i].children.length}`);
});
