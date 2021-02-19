'use strict'

const box = document.querySelectorAll('.box')

box.forEach(e => e.addEventListener('mouseover', opneClassName));

box.forEach(e => e.addEventListener('transitionend', letterBack));

function opneClassName() {
  this.classList.add('open');
}

function letterBack() {
  this.classList.add('open-box');
}
