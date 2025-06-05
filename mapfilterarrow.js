function sum(a,b){
    console.log(a+b);
}


//Arrow function
const arrSum = (a,b) => {
    return a + b;
}

sum(10,25);
console.log(arrSum(15,15))


// Map and Filter function

// i/p : [1,2,3,4]
// o/p : [2,4,6,8]

// method 1 : by for loop

// method 2 : By MAP
let arr = [1,2,3,4]
const tranf = (i) => {
    return 3*i;
}

console.log(`Org Array : ${arr}`);
const ans = arr.map(tranf);
console.log(`Tranformed Array : ${ans}`);
console.log(typeof ans);    


//Filter the element whiich is greater then 5
const filerArray = ans.filter((i) => {
    if(i >= 5) return true;
    else false;
})

console.log(filerArray);