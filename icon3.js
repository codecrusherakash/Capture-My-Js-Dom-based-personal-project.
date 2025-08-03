let e1=document.querySelector('.pro1 img')
let e2=document.querySelector('.pro1 i')
let e3=document.querySelector('.pro2 img')
let e4=document.querySelector('.pro2 i')
let e5=document.querySelector('.pro3 img')
let e6=document.querySelector('.pro4 i')
let e7=document.querySelector('.pro4 img')
let e8=document.querySelector('.pro3 i')
e1.addEventListener('dblclick',function(){
    e2.style.transform=' translate(-50%,-50%)scale(1)'
    setTimeout(function(){
        e2.style.opacity='1'
    },500)
    setTimeout(function(){
        e2.style.transform='translate(-50%,-50%) scale(0)'
    },1500)
})
e3.addEventListener('dblclick',function(){
    e4.style.transform=' translate(-50%,-50%)scale(1)'
    setTimeout(function(){
        e4.style.opacity='1'
    },500)
    setTimeout(function(){
        e4.style.transform='translate(-50%,-50%) scale(0)'
    },1500)
})
e5.addEventListener('dblclick',function(){
    e6.style.transform=' translate(-50%,-50%)scale(1)'
    setTimeout(function(){
        e6.style.opacity='1'
    },500)
    setTimeout(function(){
        e6.style.transform='translate(-50%,-50%) scale(0)'
    },1500)
})
e7.addEventListener('dblclick',function(){
    e8.style.transform=' translate(-50%,-50%)scale(1)'
    setTimeout(function(){
        e8.style.opacity='1'
    },500)
    setTimeout(function(){
        e8.style.transform='translate(-50%,-50%) scale(0)'
    },1500)
})