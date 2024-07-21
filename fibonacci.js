/*
  Problem https://www.hackerrank.com/challenges/functional-programming-warmups-in-recursion---fibonacci-numbers/problem
*/

const fibonacciNth = (n) => {
  if (n > 0 && n <= 40) {
    switch (n) {
      case 1:
        return 0;
      case 2:
        return 1;
      default:
        return fibonacciNth(n - 1) + fibonacciNth(n - 2);
    }
  } else {
    console.log(`n = ${n} not allowed`);
  }
};

function dynamicFibonacciNth() {
  let cache = {};

  return function fibonacciNth(n) {
    if (n in cache) {
      return cache[n];
    } else {
      switch (n) {
        case 1:
          return 0;
        case 2:
          return 1;
        default:
          cache[n] = fibonacciNth(n - 1) + fibonacciNth(n - 2);
          return cache[n];
      }
    }
  };
}

const callFibNth = dynamicFibonacciNth();
console.log(fibonacciNth(40));
console.log(callFibNth(40));
