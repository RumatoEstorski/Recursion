let n =+prompt("Input n");
//sum =0;
//for(let i =0; i<=n;i++){
//document.write(i*i+" ");
//sum+=i;
//}
//document.write(sum);
//document.write("<br>");
function sumX2(n){
    return n<=1 ? n : n*sumX2(n-1);
}
let k =sumX2(n);
document.write(k);
