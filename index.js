'use strict'

const box = document.querySelectorAll('.box')

box.forEach(e => e.addEventListener('click', openClassName));

box.forEach(e => e.addEventListener('transitionend', letterBack));

function openClassName() {
  this.classList.toggle('open');
}

function letterBack(e) {
  if(e.propertyName.includes('flex')) {
    this.classList.toggle('open-box');
  }
}