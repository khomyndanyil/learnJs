/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

'use strict';

// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '')

// const personalMovieDB = {
//     count : numberOfFilms,
//     movies : {},
//     actors : {},
//     genres  : [],
//     privat : false
// }

// for(let i = 0; i<2; i++) {
//     const last = prompt('Один из последних просмотренных фильмов?','') 
//     const rate = +prompt('На сколько оцените его?','') 
//     personalMovieDB.movies[last] = rate
// }
// personalMovieDB.actors.some = 'some'

// console.log(personalMovieDB)

// // let answ = ''

// // (50 === 50) ? console.log("good") : console.log("bad");

// // let result = '';

// const length = 7;

// for(let i = 0; i < length; i++ ) {

//     for(let j = 0; j < i; j++)  {
//         result+= '*'
//     }

//     result += '\n'
// }

// console.log(result);



// loop1:
// for (let i = 0; i < 3; i++) {      //Первый цикл, обозначенный меткой "loop1"
//    loop2:
//    for (let j = 0; j < 3; j++) {   //Второй цикл, обозначенный меткой "loop2"
//       if (i === 1 && j === 1) {
//          continue loop1;
//       }
//       console.log('i = ' + i + ', j = ' + j);
//    }
// }

// for(let i = 2; i <= 10; i++) {
//     if(i % 2 != 0) {
//         continue
//     }
//     console.log(i)
// }

// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

// // let i = 2
// // while(i <= 16) {
// //     if (i % 2 === 0) {
// //         continue;
// //     } else {
// //         console.log(i);
// //     }
// //     i++;
// // }

// let i = 2;
// while(i <= 16) {
//     if (i % 2 === 0) {
//         i++;
//         continue;
//     } else {
//         console.log(i);
//     }
//     i++;
// }

// function fifthTask() {
//     const arrayOfNumbers = [];

//     // Пишем решение вот тут
//     for(let i = 5; i<=10; i++ ) {
//         arrayOfNumbers[i-4] = i
//     }
    
//     // Не трогаем
//     return arrayOfNumbers;
// }

// console.log(fifthTask)

// const arr = [3, 5, 8, 16, 20, 23, 50];
// const result = [];

//     // Пишем решение вот тут
//     for(let i = 0; i<arr.length; i++) {
//         result[i] = arr[i]
//     }
//     console.log(result)

//     const data = [5, 10, 'Shopping', 20, 'Homework'];

//     // Пишем решение вот тут
//     for(let i = 0; i< data.length; i++) {
//         if(typeof(data[i]) === 'number') {
//             data[i] =  data[i] * 2
//         }else {
//              data[i] =  data[i] + '- done'
//         }
//     }
    // console.log(data)

    // const data = [5, 10, 'Shopping', 20, 'Homework'];
    // const result = [];

    // // Пишем решение вот тут
    
    // for(let i = 1; i < data.length; i++ ) {
    //     result[i - 1] = data[data.length - i] 
    // }
    // console.log(result)

//     const lines = 5;
//     let result = '';
// // Проверяется именно переменная result, формируйте строку в ней

//     for(let i = 0; i <= lines; i++) {
//         for(let j = 0; j <= i; j++) {
//             result += '*'
//         } 
//         result += '\n'
//     }
//     console.log(result)

const lines = 5;
let result = '';

for (let i = 0; i <= lines; i++) {
    for (let j = 0; j < lines - i; j++) {
        result += " ";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
        result += "*";
    }
    result += "\n";
}

console.log(result)


