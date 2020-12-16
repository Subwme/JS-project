/*Задание 1! С помощью цикла for написать алгоритм для вывода чисел от 0 до 10 включительно, чтобы результат выглядел так:
0 – это ноль
1 – нечетное число
2 – четное число
3 – нечетное число
…
10 – четное число
*/
// 'use strict'
// for (let i = 0; i <= 10; i++) {

//   if (i == 0) {
//     console.log(i + ' - Это ноль')
//   }  

//   if (i % 2 == 1) {
//     console.log(i + ' - Нечетное число')
//   }

//   if (i % 2 == 0 && i != 0) {
//     console.log(i + ' - Четное число')
//   }

// }


//Задание 2! Выведите в консоль значения, указанные рядом с комментариями:
// 'use strict'
// const post = {
//   author: "John", //вывести этот текст
//   postId: 23,
//   comments: [
//     {
//       userId: 10,
//       userName: "Alex",
//       text: "lorem ipsum",
//       rating: {
//         likes: 10,
//         dislikes: 2 //вывести это число
//       }
//     },
//     {
//       userId: 5, //вывести это число
//       userName: "Jane",
//       text: "lorem ipsum 2", //вывести этот текст
//       rating: {
//         likes: 3,
//         dislikes: 1
//       }
//     },
//   ]
// }

// // "John"
// console.log(post.author);
// // 2
// console.log(post.comments[0].rating.dislikes);
// // 5
// console.log(post.comments[1].userId);
// // "lorem ipsum 2"
// console.log(post.comments[1].text);

// Задание 3! Перед вами находится массив с продуктами, сегодня распродажа и вам нужно на каждый товар применить скидку
// 15%, можете использовать метод forEach

// 'use strict'
// const products = [
//   {
//     id: 3,
//     price: 200,
//   },
//   {
//     id: 4,
//     price: 900,
//   },
//   {
//     id: 1,
//     price: 1000,
//   },
// ];

// products.forEach(function(value) {
//   value.price = (value.price / 100) * 85
//   });
//   console.log(products)


//Задание 4! Перед вами находится массив с продуктами в интернет-магазине. Вам нужно:
// -  Получить все товары, у которых есть фотографии, можете использовать метод filter
// - Отсортируйте товары по цене (от низкой цены к высокой), можете использовать метод sort

// 'use strict'
// const products = [
//   {
//     id: 3,
//     price: 127,
//     photos: [
//       "1.jpg",
//       "2.jpg",
//     ]
//   },
//   {
//     id: 5,
//     price: 499,
//     photos: []
//   },
//   {
//     id: 10,
//     price: 26,
//     photos: [
//       "3.jpg"
//     ]
//   },
//   {
//     id: 8,
//     price: 78,
//   },
// ]

// const pictures = products.filter(function(images) {
//   return 'photos' in images && images.photos.length > 0
// } );
// console.log(pictures);


// const sortPrice = products.sort(function(value, value2){
//   return value.price - value2.price;
// });
// console.log(sortPrice);

//Задание 5!
// 'use strict'
// for (let i = 0; i <= 9; console.log(i++)) {
//   //some code 
//  }

// Задание 6! Сделать лесенку из звезд, вывести в консоль.
'use strict'
for (var i=0, stars = '', numberStars = 0; i < 20; i++) {
  stars += '*';
  numberStars += 1;
  console.log(stars + ' - ' + numberStars)
  }