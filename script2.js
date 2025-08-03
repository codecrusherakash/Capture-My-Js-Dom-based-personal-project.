let ele1=document.querySelector('.cursor')
let ele2=document.querySelector('.main')
let btn=document.querySelector('button')
ele2.addEventListener('mousemove',function(val){
    ele1.style.left=val.x+'px'
    ele1.style.top=val.y+'px'
})
btn.addEventListener('click',function(){
    alert("Signing up")
});

