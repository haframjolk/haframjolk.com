/**
 * Submits a form to Formspree
 *
 * @param {HTMLFormElement} form Form data to submit
 */
export default async function submitForm(form) {
  const formData = new FormData(form);

  return fetch(form.action, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
    },
    body: JSON.stringify(Object.fromEntries(formData)),
  });
}
