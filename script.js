/*
let i="#"
let f=1

do {
  console.log(i);
  i = i+"#";
  f++;
  
}while (i.length<8);
*/

let i = 1

do {
  if (i%3==0 && i%5==0){
    console.log("Fizz Buzz")}
  else if (i%5==0){
    console.log("Buzz")}
  else if  (i%3==0){
    console.log("Fizz")}
  else {console.log(i)}
  
  i++ }while (i<=100)