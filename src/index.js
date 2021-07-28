import Konami from 'konami';
import spawnKickAss from './lib/kickass';
import Modal from './lib/modal';

document.addEventListener('DOMContentLoaded', () => {
  // Spawn Kick Ass if Konami code is entered
  Konami(spawnKickAss);

  // Activate contact form modal
  const contactModal = new Modal(document.querySelector('.dialog--contact'));
  const contactButton = document.querySelector('#contact-button');
  contactButton.addEventListener('click', contactModal.open.bind(contactModal));

  // Close contact form on submission
  const contactForm = document.querySelector('.dialog--contact__form');
  contactForm.addEventListener('submit', contactModal.close.bind(contactModal));
});
