import throttle from "lodash.throttle";

const formData = {} || "";

const STORAGE_KEY = 'feedback-form-state';

const refs = {    
  textarea: document.querySelector('.feedback-form textarea'),
  email: document.querySelector('.feedback-form input'),
  form: document.querySelector('.feedback-form')
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onTextareaInput, 500));

function onTextareaInput(e) {
  formData[e.target.name] = e.target.value;
  const message = JSON.stringify(formData);
  console.log(message);
  localStorage.setItem(STORAGE_KEY, message);
};

function populateTextarea() {
    const savedMsg = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (savedMsg) {
      for (const key in savedMsg) {
        if (savedMsg.hasOwnProperty(key)) {
          refs.textarea.value = savedMsg.message || '';
          refs.email.value = savedMsg.email || '';
        };
      };
  };
};

populateTextarea();

function onFormSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();
  console.log('Sent');
  localStorage.removeItem(STORAGE_KEY);  
};



