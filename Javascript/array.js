let arr = [1,2,3,4,5];
let arr2 = ['a','b','c','d']

//push() and pop() methods
console.log("------------push(value) and pop()------------")
arr.push(10);
console.log(arr);
arr.pop();
console.log(arr);

//shift() and unshift()
console.log("------------unshift(value) and shift()------------")
arr.shift();
console.log(arr);
arr.unshift(10);
console.log(arr);

//concat()
console.log("---------------concat()----------------------")
console.log(arr.concat(arr2));

//slice()
console.log("-------------slice(start,end)----Copy of array-------------")
console.log(arr.slice(1,4))

//splice()
console.log("-------------splice()----------------")
console.log(arr.splice(0,1,6));

//forEach()
console.log("--------------forEach(callback)---------------")
arr.forEach(function(element){
    console.log(element);
})

//map()
console.log("map :- Returns new array with performed operation--------------")
let mapData = arr.map(function(element){
    return element * element
})

console.log(mapData);

//filter()
console.log("filter :- Returns new array of elements who satisfies condition --------------")
let filterData = arr.filter(function(element){
    return element%2 == 0;
})
console.log(filterData)