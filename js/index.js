/*
* @Author: Administrator
* @Date:   2017-09-19 22:34:02
* @Last Modified by:   Administrator
* @Last Modified time: 2017-10-19 12:58:31
*/
window.onload=function(){

let danhz=$('.danpkuan')[0];
let pinbot=$('.danpin-bottom',danhz)[0];
let xiaoleft=$('.xiao1')[0];
let xiaoright=$('.xiao2')[0];
let xar=$('a',xiaoright)[0];
let xar1=$('a',xiaoleft)[0];
let hzw=parseInt(getComputedStyle(danhz,null).width);
let phzw=parseInt(getComputedStyle(pinbot,null).left);
let flagp=true;
let i=0;
let dant=setInterval(function(){
   if(flagp){
      animate(pinbot,{left:-hzw});
      xar1.style.color='#000';
       xar.style.color='#ccc';
      flagp=false;
      i=1;
   }else{
       animate(pinbot,{left:0});
      xar.style.color='#000';
       xar1.style.color='#ccc';
       flagp=true;
       i=0;
   } 
},3000);

xar.onclick=function(){
  if(i==1){
    
    return
  }
  i++;
  animate(pinbot,{left:-hzw*i});
  xar1.style.color='#000';
  xar.style.color='#ccc';
}
xar1.onclick=function(){
  if(i==0){
    return
  }
  i--;
  xar.style.color='#000';
  xar1.style.color='#ccc';
  animate(pinbot,{left:hzw*i});
}
}


