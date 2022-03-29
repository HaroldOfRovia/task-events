/*
   1. Создайте функцию createButton(). Необходимо, чтобы эта функция осуществила вставку в body тег button с текстом: "Удали меня".
      При клике по button удалить этот button.
*/
export function createButton() {
    let but = document.createElement('button');
    but.textContent = 'Удали меня';
    document.body.prepend(but);
    but.addEventListener('click', () => {
        but.remove();
    });
}

/*
   2. Создайте функцию createArrList(arr), в которую передается 1 параметр: arr - массив строк.
      Функция выводит этот массив в виде маркированного списка внутри тега body.
      При наведении курсора мыши на элемент списка у этого элемента создается атрибут title, в котором записан его текст.
*/
export function createArrList(arr) {
    let list = document.createElement('ul');
    for (let i = 0; i < arr.length; i++) {
        let item = document.createElement('li');
        item.textContent = arr[i];
        list.append(item);
        item.addEventListener('mouseover', () => {
            item.setAttribute('title', item.textContent);
        });
    }
    document.body.prepend(list);
}

/*
   3. Создайте функцию createLink(), которая сгенерирует следующую разметку и вставит ее в body:

      <a href="https://tensor.ru/">tensor</a>

      При первом клике по ссылке в конец ее текста через пробел дописывается ее href.
      При следующем клике происходит действие по умолчанию (переход по ссылке в текущей вкладке).
*/
export function createLink() {
    let link = document.createElement('a');
    link.setAttribute('href', 'https://tensor.ru/');
    link.textContent = 'tensor';
    document.body.prepend(link);

    link.addEventListener(
        'click',
        () => {
            link.textContent = 'tensor https://tensor.ru/';
        },
        { once: true },
    );
}

/*
   4. Создайте функцию createList(), которая сгенерирует следующую разметку и вставит ее в body:

      <ul>
         <li>Пункт</li>
      </ul>
      <button>Добавить пункт</button>

      При клике по элементу li ему в конец текста добавляется восклицательный знак.
      При клике по button в конец списка добавляется новый элемент li с текстом: "Пункт".
      Клик по новому li также добавляет восклицательный знак в конец текста.
*/
export function createList() {
    let list = document.createElement('ul');
    let point = document.createElement('li');
    point.textContent = 'Пункт';
    list.append(point);
    let button = document.createElement('button');
    button.textContent = 'Добавить пункт';
    document.body.append(list);
    document.body.append(button);

    list.addEventListener('click', (event) => {
        event.target.textContent = event.target.textContent + '!';
    });
    button.addEventListener('click', (event) => {
        let point = document.createElement('li');
        point.textContent = 'Пункт';
        list.append(point);
    });
}
