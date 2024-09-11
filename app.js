'use strict'

const switcher=document.querySelector('.btn');

switcher.addEventListener('click',function(){
    document.body.classList.toggle('dark-theme')
    var classNome=document.body.className;
    if(classNome=="light-theme"){
        this.textContent='Dark'
    }
    else{
        this.textContent="Light"
    }
    console.log('current class name:'+ classNome)
})