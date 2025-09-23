'use strict';

// Modal elements
const modal = document.querySelector('.modal');

// Overlay modal
const overlay = document.querySelector('.overlay');

// Close modal 
const btnCloseModal = document.querySelector('.close-modal');

// Open modal  
const btnsOpenModal = document.querySelectorAll('.show-modal');

let lastFocusedButton = null

console.log('Open buttons:', btnsOpenModal.length);

const openModal = function () {
// remove hidden keyword classname in modal
  modal.classList.remove('hidden');

// remove the hidden keyword classname in overlay 
  overlay.classList.remove('hidden');

  moadalEl.focus();
  lastFocusedButton = document.activeElement;
};


btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');

    if (lastFocusedButton) {
        lastFocusedButton.focus();
    }
};

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
    });

modalEl.setAttribute('role', 'dialog');
modalEl.setAttribute('aria-modal', 'true');

btnCloseModalEl.setAttribute('aria-label', 'Close modal');    
