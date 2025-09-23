'use strict';

// Modal elements
const modal = document.querySelector('.modal');

// Overlay modal
const overlay = document.querySelector('.overlay');

// Close modal button
const btnCloseModal = document.querySelector('.close-modal');

// Open modal buttons (NodeList)
const btnsOpenModal = document.querySelectorAll('.show-modal');

console.log('Open buttons:', btnsOpenModal.length);

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
