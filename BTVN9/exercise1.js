// if else for
//viết hàm isPrime kiểm tra số nguyên tố

let n;
function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i < Math.sqrt(n); i++) {
    if (n % i == 0) return false;
  }
  return true;
}

console.log(isPrime(7)); //output: true;
console.log(isPrime(10)); //output: false;
