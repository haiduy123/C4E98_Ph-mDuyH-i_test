//bai1:
// function findOppositeNumber(){
//     let n = Number(prompt("Nhập số số hạng là số chẵn"));
//     let input = Number(prompt("Nhập input"));
//     let result;
//         if (input < n/2){
//             result = input + n / 2;
//         }
//         else{
//             result = input - n / 2;
//         }
//     return result;
// }

// let n = findOppositeNumber();

// alert(`Số đó là ${n}`);
//bai2
// function merge2String (str1,str2){
//     let array1 =str1.split("");
//     let array2=str2.split("");
//     if(array1.length<array2.length){
//         let result="";
//         for(let i=0;i<array1.length;i++){
//             result +=array1[i];
//             result+=array2[i];
//         }
//         for(let i=array1.length;i<array2.length;i++){
//             result+=array2[i];
//         }
        
//         return result;
//     }
//     if(array2.length<array1.length){
//         let result="";
//         for(let i=0;i<array2.length;i++){
//             result +=array1[i];
//             result+=array2[i];
//         }
//         for(let i=array2.length;i<array1.length;i++){
//             result+=array1[i];
//         }
//         return result;
//     }
// }

//  console.log(merge2String("abc","1234"));
//  console.log(merge2String("abcd","123"));
//bai3
// let x = Math.floor(Math.random() * 10);
//     for(let i=0;i<3;i++){
//         let number=Number(prompt(`Nhập số mà bạn chọn`));
//         if(x!=number){
//             alert("Bạn sai rồi");
//         }else{
//             alert("Bạn đúng rồi");
//         }
//     }
// console.log(x);
// let btn=document.getElementById("btn");
// let input=document.getElementById("input");
// let x = Math.floor(Math.random() * 10);
// let m=0;
// btn.onclick=function(){
//     let number=input.value;
//                 if(x!=number){
//                     alert("Bạn sai rồi");
//                     input.value="";
//                     m++;
//                 }else if(m>3){
//                     alert(`Số đúng là${x}`);
//                 }else{
//                     alert("Bạn đúng rồi");
//                 }
//     }



