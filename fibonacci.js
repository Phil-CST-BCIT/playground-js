const cache = [];
function fibonacci(n) {
  if (n < 2) {
    return n;
  }
  if (cache[n] !== undefined) return cache[n];
  else return (cache[n] = fibonacci(n - 1) + fibonacci(n - 2));
}

console.log(fibonacci(9));
