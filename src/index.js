import KonamiCode from 'konami-code';
import spawnKickAss from './lib/kickass';
import Modal from './lib/modal';

document.addEventListener('DOMContentLoaded', () => {
  // Spawn Kick Ass if Konami code is entered
  const konami = new KonamiCode();
  konami.listen(spawnKickAss);

  // Activate contact form modal
  const contactModal = new Modal(document.querySelector('.dialog--contact'));
  const contactButton = document.querySelector('#contact-button');
  contactButton.addEventListener('click', contactModal.open.bind(contactModal));
});
