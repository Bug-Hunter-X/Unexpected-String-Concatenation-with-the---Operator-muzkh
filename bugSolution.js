function foo(a,b){
if(typeof a === 'number' && typeof b === 'number'){
return a+b; 
}else{
console.error("Invalid input: Operands must be numbers");
return NaN; // or throw an error
}
}
console.log(foo(2,3)); //5
console.log(foo(2,"3")); //Invalid input... NaN
console.log(foo("2",3)); //Invalid input... NaN
console.log(foo("2","3"));//Invalid input... NaN