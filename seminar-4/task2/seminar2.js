/*Задание 2
Даны html и css:
Необходимо создать страницу, в которой будут работать все три кнопки. 
- При нажатии на кнопку "Добавить элемент" на страницу добавляется новый квадратный элемент(<div>) с размерами 100x100 пикселей. Этот элемент должен иметь класс .box и содержать текст, указывающий порядковый номер элемента (1, 2, 3 и так далее).
- При нажатии на кнопку "Удалить элемент" удаляется последний добавленный элемент, если таковой имеется.
- При нажатии на кнопку "Клонировать элемент" создается копия последнего добавленного элемента и добавляется на     страницу. Если последнего добавленного элемента нет на странице, необходимо вывести сообщение в alert, с надписью о невозможности клонирования, так как клонировать нечего.
*/

const addButtonEl = document.querySelector('#addButton');
const removeButtonEl = document.querySelector('#removeButton');
const cloneButtonEl = document.querySelector('#cloneButton');

const containerEl = document.querySelector('#container');

addButtonEl.addEventListener('click', () => {
  containerEl.insertAdjacentHTML(
    'beforeend',
    `<div class="box">${containerEl.children.length + 1}</div>`
  );
});

removeButtonEl.addEventListener('click', () => {
  containerEl.lastElementChild?.remove();
});

cloneButtonEl.addEventListener('click', () => {
  const cloneEl = containerEl.lastElementChild?.cloneNode(true);
  if (cloneEl) {
    containerEl.appendChild(cloneEl);
  } else {
    alert('Клонировать нечего');
  }
});