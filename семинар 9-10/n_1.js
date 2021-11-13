console.log(`Задание 1`);
let q="#";
for (let i=1; i<8;i++){
    console.log(`${q}`);
    q+="#";
}
console.log(`Задание 2`);
for (let i=1; i<101;i++){
    if (i%3==0 && i%5!=0 ){
        console.log(`Fizz`);
    }else if (i%5==0 && i%3!=0 ){
        console.log(`Buzz`);
    }else if (i%5==0 && i%3==0 ){
        console.log(`FizzBuzz`);
    }else{
        console.log(`${i}`);
    }
}
console.log(`Задание 3`);
let a1="# # # #";
let a2=" # # # #";
q="";
for (let i=1; i<8;i++){
    if (i%2==1){
        q=q+a1+"\n";
    }
    if (i%2==0){
        q=q+a2+"\n";
    }
}
console.log(`${q}`);
console.log(`Задание 4`);
function f1(num1,num2){
    if (num1>num2){
        console.log(`Минимальное: ${num2}`);
    }else{
        console.log(`Минимальное:  ${num1}`);
    }
}
f1(35,222);
console.log(`Задание 5`);
function countBs(stri){
    let ch=0;
    let  o=stri.length;
    for (let w=0; w<o;w++){
        if (stri.charAt(w)=="В"){
            ch+=1
        }
        
    }
    console.log(`Букв "В" = ${ch}`);
}
countBs("Всем привет, АсяВ");
function countChar(stri,bu){
    let ch=0;
    let  o=stri.length;
    for (w=0; w<o;w++){
        if (stri.charAt(w)==bu){
            ch+=1
        }
        
    }
    console.log(`Букв ${bu} = ${ch}`);
}
countChar("Всем привет, АсяВ","е");
console.log(`Задание 6`);
function range(start,stop,step=1){
    let a1=[];
    if (Number(step) > 0) {
        for (var i = start; i <= stop; i+=step) {
        a1.push(i);
        }
    }else{
        for (var i = start; i >= stop; i+=step) {
            a1.push(i);
            }
    }
    console.log(`${a1}`);
}
range(1,5);
range(10,5,-2);
function sum(arr){
    let su=0;
    for (w=0; w<arr.length;w++){
        su+=arr[w];
    }
    console.log(`Сумма = ${su}`);
}
sum([10,2,3,4,5])
console.log(`Задание 7`);
function reverseArr(a2) {
    let arr2 = [];
    for(var i = a2.length-1; i >= 0; i--) {
    arr2.push(a2[i]);
    }
    return arr2;
    }
console.log(reverseArr([1, 2, 3, 4]));
function reverseArrayInPlace(arr1) {
    for(let i = 0, j = arr1.length-1; i < j; i++, j--)
        [arr1[i], arr1[j]] = [arr1[j], arr1[i]];
        return arr1;
}
console.log(reverseArrayInPlace([1, 2, 3, 4]));