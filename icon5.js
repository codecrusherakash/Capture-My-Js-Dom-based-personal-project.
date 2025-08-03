let ele1=document.querySelector('.c2')
let ele2=document.querySelector('.c3')
let ele3=document.querySelector('.c4')
let ele4=document.querySelector('.c5')
let ele5=document.querySelector('.c2 img')
let ele6=document.querySelector('.c3 img')
let ele7=document.querySelector('.c4 img')
let ele8=document.querySelector('.c5 img')
ele1.addEventListener('mousemove',function(val){
    ele5.style.left = val.x+"px"
    ele5.style.top = val.y+"px"
})
ele1.addEventListener('mouseenter',function(val){
    ele5.style.opacity = '8'
})
ele1.addEventListener('mouseleave',function(val){
    ele5.style.opacity = '0'
})
ele2.addEventListener('mousemove',function(val){
    ele6.style.left = val.x+"px"
    ele6.style.top = val.y+"px"
})
ele2.addEventListener('mouseenter',function(val){
    ele6.style.opacity = '8'
})
ele2.addEventListener('mouseleave',function(val){
    ele6.style.opacity = '0'
})
ele3.addEventListener('mousemove',function(val){
    ele7.style.left = val.x+"px"
    ele7.style.top = val.y+"px"
})
ele3.addEventListener('mouseenter',function(val){
    ele7.style.opacity = '8'
})
ele3.addEventListener('mouseleave',function(val){
    ele7.style.opacity = '0'
})
ele4.addEventListener('mousemove',function(val){
    ele8.style.left = val.x+"px"
    ele8.style.top = val.y+"px"
})
ele4.addEventListener('mouseenter',function(val){
    ele8.style.opacity = '8'
})
ele4.addEventListener('mouseleave',function(val){
    ele8.style.opacity = '0'
})





