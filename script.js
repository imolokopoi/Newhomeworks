"use strict"
/*function durationBetweenDates(startDate, endDate, dimension = 'days') {
    const start = new Date(startDate);
    const end = new Date(endDate);

    if (isNaN(start.getTime()) || isNaN(end.getTime())) {
        return 'Invalid date format';
    }

    const timeDifference = end - start;

    const dimensionFunctions = {
        'days': () => Math.floor(timeDifference / (1000 * 60 * 60 * 24)),
        'seconds': () => Math.floor(timeDifference / 1000)
    };

    if (dimensionFunctions[dimension]) {
        const result = dimensionFunctions[dimension]();
        return `${result} ${dimension}`;
    } else {
        return 'Invalid dimension';
    }
}

const result1 = durationBetweenDates('02 Aug 1985', '03 Aug 1985', 'seconds');
console.log(result1); // Виведе '86400 seconds'

const result2 = durationBetweenDates('31 Jan 2022', '03 Feb 2021', 'days');
console.log(result2); // Виведе '362 days'


//2. Масив унікальних значень
//Напишіть функцію яка відфільтрує масив унікальних значень
//Рішення має працювати незалежно від конкретних значень в масиві імен
const userNames = ['Петро', 'Емма', 'Петро', 'Емма', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена', 'Емма'];

const userNames = ['Петро', 'Емма', 'Петро', 'Емма', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена', 'Емма'];

function filterUnique(array) {
    return [...new Set(array)].map(value => value);
}

//console.log(filterUnique(userNames)); // ['Петро', 'Емма', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена'];
*/
//Напишіть функцію 
//яка буде використовуватись для сортування масиву фільмів

const movies = [
	{
		movieName: 'The Thing',
		releaseYear: 1982,
		directedBy: 'Carpenter',
		runningTimeInMinutes: 109,
	},
	{
		movieName: 'Aliens',
		releaseYear: 1986,
		directedBy: 'Cameron',
		runningTimeInMinutes: 137,
	},
	{
		movieName: 'Men in Black',
		releaseYear: 1997,
		directedBy: 'Sonnenfeld',
		runningTimeInMinutes: 98,
	},
	{
		movieName: 'Predator',
		releaseYear: 1987,
		directedBy: 'McTiernan',
		runningTimeInMinutes: 107,
	},
];


function byProperty(property, direction) {
    return function (a, b) {
      let comparison = 0;
  
      if (a[property] > b[property]) {
        comparison = 1;
      } else if (a[property] < b[property]) {
        comparison = -1;
      }
  
      if (direction === '>') {
        return comparison;
      } else {
        return -comparison;
      }
    };
  }
  
  console.log(movies.sort(byProperty('releaseYear', '>')));
  console.log(movies.sort(byProperty('runningTimeInMinutes', '<')));
  console.log(movies.sort(byProperty('movieName', '>')));

Задача номер 2
  function someFunction(arg1, arg2) {
    // Довільна функція, яка робить щось з аргументами
    return arg1 + arg2;
  }
  
  function slower(func, seconds) {
    return function (...args) {
      console.log(`Chill out, you will get your result in ${seconds} seconds`);
      setTimeout(() => {
        const result = func(...args);
        console.log('Result:', result);
      }, seconds * 1000);
    };
  }
  
  let slowedSomeFunction = slower(someFunction, 5);
  
  slowedSomeFunction(2, 3);
  
