const POST_URL = 'https://formspree.io/f/meqplqoe';

/**
 * Submits a form to Formspree
 *
 * @param {FormData} formData Form data to submit
 */
export default async function submitForm(formData) {
  return fetch(POST_URL, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
    },
    body: JSON.stringify(Object.fromEntries(formData)),
  });
}
