"use strict";
const accordion = document.querySelectorAll('.accordion')
const arrow = document.querySelector('.question__arrow')
accordion.forEach(ele=>{
  ele.addEventListener('click',function(){

    ele.classList.toggle('open')
    
  })
})