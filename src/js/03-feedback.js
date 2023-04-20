import { throttle } from 'lodash-es';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('[name="email"]');
const messageInput = form.querySelector('[name="message"]');

const localStorageKey = 'feedback-form-state';

// Load form state from localStorage on page load
window.addEventListener('load', () => {
  const formState = JSON.parse(localStorage.getItem(localStorageKey));
  if (formState) {
    emailInput.value = formState.email;
    messageInput.value = formState.message;
  }
});

// Save form state to localStorage on every input change
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

// Clear form and localStorage on form submit
form.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log('Form submitted with data:', {
    email: emailInput.value,
    message: messageInput.value,
  });
  form.reset();
  localStorage.removeItem(localStorageKey);
});
