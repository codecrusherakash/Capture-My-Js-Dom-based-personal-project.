let ele=document.querySelector('.icon1')
let ele2=document.querySelector('.p1')
let ele3=document.querySelector('.set i')
let ele4=document.querySelector('.btn1')
let ele5=document.querySelector('.btn2')
let ele6=document.querySelector('.btn3')
let ele7=document.querySelector('.btn4')
let ele8=document.querySelector('.btn5')
let ele9=document.querySelector('.p2')
let ele10=document.querySelector('.cursor1')
let ele11=document.querySelector('.cursor2')
let ele12=document.querySelector('.p1')
ele.addEventListener('click',function(){
    ele2.style.display='none'
});
ele3.addEventListener('click',function(){
    ele2.style.display='block'
    var a=gsap.timeline()
    a.from('.p1',{
        x:-1500,
        duration:0.5,
        delay:0
    })
});
var state=0
ele4.addEventListener('click',function(){
    if(state==0){
        ele4.innerHTML="Following"
        ele4.style.backgroundColor='green'
        alert('Hey, You can click again to unfollow')
        state=1
    }
    else{
        ele4.innerHTML="Follow"
        ele4.style.backgroundColor='#0095F6'
        state=0
    }
});
ele5.addEventListener('click',function(){
    if(state==0){
        ele5.innerHTML="Following"
        ele5.style.backgroundColor='green'
        alert('Hey, You can click again to unfollow')
        state=1
    }
    else{
        ele5.innerHTML="Follow"
        ele5.style.backgroundColor='#0095F6'
        state=0
    }
});
ele6.addEventListener('click',function(){
    if(state==0){
        ele6.innerHTML="Following"
        ele6.style.backgroundColor='green'
        alert('Hey, You can click again to unfollow')
        state=1
    }
    else{
        ele6.innerHTML="Follow"
        ele6.style.backgroundColor='#0095F6'
        state=0
    }
});
ele7.addEventListener('click',function(){
    if(state==0){
        ele7.innerHTML="Following"
        ele7.style.backgroundColor='green'
        alert('Hey, You can click again to unfollow')
        state=1
    }
    else{
        ele7.innerHTML="Follow"
        ele7.style.backgroundColor='#0095F6'
        state=0
    }
});
ele8.addEventListener('click',function(){
    if(state==0){
        ele8.innerHTML="Following"
        ele8.style.backgroundColor='green'
        alert('Hey, You can click again to unfollow')
        state=1
    }
    else{
        ele8.innerHTML="Follow"
        ele8.style.backgroundColor='#0095F6'
        state=0
    }
});
ele12.addEventListener("mousemove",function(val){
    ele10.style.left=val.x+"px"
    ele10.style.top=val.y+"px"
})
ele9.addEventListener("mousemove",function(val){
    ele11.style.left=val.x+"px"
    ele11.style.top=val.y+"px"
})