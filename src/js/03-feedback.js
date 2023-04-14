import { throttle } from 'lodash-es';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('[name="email"]');
const messageInput = form.querySelector('[name="message"]');

const localStorageKey = 'feedback-form-state';
window.addEventListener('load', () => {
  const formState = JSON.parse(localStorage.getItem(localStorageKey));
  if (formState) {
    emailInput.value = formState.email;
    messageInput.value = formState.message;
  }
});
form.addEventListener(
  'input',
  throttle(() => {
    const formState = {
      email: emailInput.value,
      message: messageInput.value,
    };
    localStorage.setItem(localStorageKey, JSON.stringify(formState));
  }, 500)
);
form.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log('Form submitted with data:', {
    email: emailInput.value,
    message: messageInput.value,
  });
  form.reset();
  localStorage.removeItem(localStorageKey);
});