const formsValidateConfig = {
    formSelector: '.popup__container',
    inputSelector: '.popup__text',
    inputErrorClass: 'popup__text_state_invalid',
    errorClass: 'error_state_visible',
    submitButtonSelector: '.popup__save',
    submitButtonErrorClass: 'popup__save_invalid',
};

function enableValidate(date) {
  const forms = [...document.querySelectorAll(date.formSelector)];
  forms.forEach(form => addFormListeners(form, date));
}

function addFormListeners(form, config) {
    form.addEventListener('submit', handleSubmit);
    form.addEventListener('input', () => setSumbitButtonState(form, config));
    const inputs = [...form.querySelectorAll(config.inputSelector)];
    inputs.forEach(input => input.addEventListener('input', () => handleField(form, input, config)));
    setSumbitButtonState(form, config);
};

function handleSubmit(evt) {
  evt.preventDefault();
};

function handleField(form, input, config) {
  if (input.validity.valid) {
    hideError(form, input, config)
  } else {
    showError(form, input, config)
  }
};

function showError(form, input, config){
  input.classList.add(config.inputErrorClass);
  const errorElement = form.querySelector(`#${input.id}-error`);
  errorElement.classList.add(config.errorClass);
  errorElement.textContent = input.validationMessage;
};

function hideError(form, input, config){
  input.classList.remove(config.inputErrorClass);
  const errorElement = form.querySelector(`#${input.id}-error`);
  errorElement.classList.remove(config.errorClass);
  errorElement.textContent = "";
};

function setSumbitButtonState(form, config) {
  const saveButton = form.querySelector(config.submitButtonSelector);
  saveButton.disabled = !form.checkValidity();
  saveButton.classList.toggle(config.submitButtonErrorClass, !form.checkValidity());
};

enableValidate(formsValidateConfig);
