import KonamiCode from 'konami-code';
import Spinner from 'spin';
import Swal from 'sweetalert2';
import submitForm from './lib/forms';
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

  const contactForm = document.querySelector('.dialog--contact__form');

  // Submit form using Ajax
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Create a spinner
    const spinner = new Spinner({
      color: '#000',
      lines: 12,
    });
    spinner.spin(contactForm);
    // Add extra overlay to page when submitting
    contactForm.classList.add('dialog--contact__form--loading');

    // Submit form
    let response;
    try {
      response = await submitForm(contactForm);
    } catch (err) {
      Swal.fire({
        title: 'Error',
        text: e,
        icon: 'error',
      });
      return;
    } finally {
      // Remove spinner
      spinner.stop();
      contactForm.classList.remove('dialog--contact__form--loading');
    }

    // Show response
    if (response.ok) {
      Swal.fire({
        title: 'Success!',
        text: 'Your message was sent successfully!',
        icon: 'success',
      });
      contactModal.close();
    } else {
      Swal.fire({
        title: 'Submission failed',
        text: 'Please make sure your email and message are valid and try again.',
        icon: 'error',
      });
    }
  });
});
