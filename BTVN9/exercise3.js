// Cho 1 mảng dưới đây
var courses = ["C++", "Java", "Javascript"];

// 1. viết hàm addCourse thêm 1 phần tử vào mảng courses
function addCourse(arr, elem) {
  arr.push(elem);
}
addCourse(courses, "Go");
console.log(courses); //output: [ 'C++', 'Java', 'Javascript', 'Go' ]

// 2. viết hàm getFirstElement lấy phần tử đầu tiên
function getFirstElement(arr) {
  return arr.shift();
}
var firstElement = getFirstElement(courses);
console.log(firstElement); //output: C++;

// 3. viết hàm joinArr nối các phần tử thành một chuỗi
function joinArr(arr, c) {
  return arr.join(c);
}
var result1 = joinArr(courses, ",");
var result2 = joinArr(courses, " * ");
console.log(result1); //output: C++,Java,Javascript,Go
console.log(result2); //output: C++ * Java * Javascript * Go
