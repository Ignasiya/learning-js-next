"use strict";

/*
###Задание 2
Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут 
оставлять отзывы, но чтобы исключить слишком короткие или слишком длинные 
сообщения, вы решаете установить ограничение, отзыв должен быть не менее 50 
символов в длину и не более 500. В случае неверной длины, необходимо выводить 
сообщение об ошибке, рядом с полем для ввода.

Создайте HTML-структуру. 
На странице должны отображаться товары, под каждым товаром должен быть список 
отзывов на данный товар. Под каждым списком отзывов должна быть форма, где можно
добавить отзыв для продукта.

При добавлении отзыва, он должен отображаться на странице под предыдущими 
отзывами, а не заменять их.
Массив initialData должен использоваться для начальной загрузки данных 
при запуске вашего приложения.

Каждый отзыв, как и продукт, должен иметь уникальный id, для упрощения, используем 
функцию `uid()`, она нам будет возвращать случайный id в виде небольшой строки.

ВНИМАНИЕ! Если вы не проходили на курсе работу с DOM, то можно это задание не 
делать, пока рано.
*/

function uid() {
  return Math.random().toString(36).slice(2);
}

const initialData = [
  {
    id: uid(),
    product: "Apple iPhone 13",
    reviews: [
      {
        id: uid(),
        text: "Отличный телефон! Батарея держится долго.",
      },
      {
        id: uid(),
        text: "Камера супер, фото выглядят просто потрясающе.",
      },
    ],
  },
  {
    id: uid(),
    product: "Samsung Galaxy Z Fold 3",
    reviews: [
      {
        id: uid(),
        text: "Интересный дизайн, но дорогой.",
      },
    ],
  },
  {
    id: uid(),
    product: "Sony PlayStation 5",
    reviews: [
      {
        id: uid(),
        text: "Люблю играть на PS5, графика на высоте.",
      },
    ],
  },
];

class Product {
  constructor(product, reviews = []) {
    this.id = uid();
    this.product = product;
    this.reviews = reviews;
  }

  addReview(review) {
    this.reviews.push(review);
  }
  getReviews() {
    return this.reviews;
  }
  getProduct() {
    return this.product;
  }
}

class Review {
  constructor(text) {
    this.id = uid();
    this.text = text;
  }
}

class ReviewComponent {
  constructor(data = []) {
    this.products = data.map(item => new Product(item.product, item.reviews.map(review => new Review(review.text))));
  }

  addReview(productId, text) {
    const product = this.products.find(p => p.id === productId);
    if (product) {
      if (text.length < 50 || text.length > 500) {
        alert('Объем рецензии должен составлять от 50 до 500 символов');
        return;
      }
      product.addReview(new Review(text));
    }
  }

  addProduct(product) {
    this.products.push(new Product(product));
  }

  render() {
    const appElement = document.getElementById('app');
    appElement.innerHTML = '';

    this.products.forEach(product => {
      const productElement = document.createElement('div');
      productElement.innerHTML = `<h2>${product.name}</h2>`;

      const reviewsElement = document.createElement('div');
      product.reviews.forEach(review => {
        const reviewElement = document.createElement('div');
        reviewElement.textContent = review.text;
        reviewsElement.append(reviewElement);
      });
      productElement.append(reviewsElement);

      const reviewFormElement = document.createElement('form');
      reviewFormElement.addEventListener('submit', (event) => {
        event.preventDefault();
        const reviewText = event.target.elements.review.value;
        this.addReview(product.id, reviewText);
        event.target.reset();
        this.render();
      });
      reviewFormElement.innerHTML = `
        <input type="text" name="review" placeholder="Оставить отзыв" />
        <button type="submit">Отправить</button>
      `;
      productElement.append(reviewFormElement);

      appElement.append(productElement);
    });
  }
}

const reviewSystem = new ReviewComponent(initialData);
reviewSystem.render();