"use strict"
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

      function ascendingComparison(a, b) {
        return a - b;
      }
      
      function descendingComparison(a, b) {
        return b - a;
      }
      
      function byProperty(property, direction) {
        if (direction === '>') {
          return function (a, b) {
            return ascendingComparison(a[property], b[property]);
          };
        } else {
          return function (a, b) {
            return descendingComparison(a[property], b[property]);
          };
        }
      }
      
      console.log(movies.sort(byProperty('releaseYear', '>')));
      console.log(movies.sort(byProperty('runningTimeInMinutes', '<')));
      console.log(movies.sort(byProperty('movieName', '>')));
  
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
  
