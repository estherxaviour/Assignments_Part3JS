


function calc(x,y){
this.no1=x;
this.no2=y;
this.sum=function(){
var tot=(this.no1+this.no2);
return tot;
}
this.sub=function(){
var dif= (this.no1-this.no2);
return dif;
}
this.mul=function(){
var prod= (this.no1*this.no2);
return prod;
}
this.div=function(){
var dv=(this.no1/this.no2);
return(dv);
}
}
var result=new calc(6,3);
console.log("The sum is" + result.sum() );
console.log("The difference is" + result.sub() );
console.log("The product is" + result.mul() );
console.log("The result is" + result.div() );

 

