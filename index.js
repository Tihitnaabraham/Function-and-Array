function sort(names) {
    return names
      .map(names => names.split('').sort((a, b) => b.localeCompare(a)).join(''))
      .sort();
  }
  console.log(sort(["tihitna", "beki", "redu"]));


  function PositiveNegativeNumbers(nums) {
    return nums.map(num => num > 0 ? "positive" : num < 0 ? "negative" : "zero");
}
let num=[1,8,-8]
console.log(PositiveNegativeNumbers(num))

function sortSalary(employees) {
    return [...employees].sort((a, b) => a.salary - b.salary);
}
let salary=[6000,7000,35000]
console.log(sortSalary(salary))


function multiplyBy2(nums) {
    nums.forEach(num =>console.log(num * 2));
}
let number=[56,89,77,78]
multiplyBy2(number)

function OperationArray(number) {
    let result = nums.map((num, i) => i < 4 ? num * 8 : i >= nums.length - 2 ? num + 5 : num);
    console.log(result);
    return result;
}
let nums=[-3,2,6,1,-4,8]
OperationArray(nums);