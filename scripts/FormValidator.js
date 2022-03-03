export class FormValidator {
  constructor(settings, form) {
    this._settings = settings;
    this._form = form;
    this._inputs = [...this._form.querySelectorAll(this._settings.inputSelector)];
    this._button = form.querySelector(this._settings.submitButtonSelector);
  }
   
  enableValidation() {
    this._setEventListeners(this._form)
  }

  _setEventListeners() {
    this._inputs.forEach(input => input.addEventListener('input', () => {
      this._handleField(this._form, input)
      this.setSubmitButtonState(this._form)
      })) 
  };
  
  _handleField(form, input) {
    if (input.validity.valid) {
      this._hideError(form, input)
    } else {
      this._showError(form, input)
    }
  }

  _showError(form, input) {
    input.classList.add(this._settings.inputErrorClass);
    form.querySelector(`#${input.id}-error`).textContent = input.validationMessage;
  };

  _hideError(form, input) {
    input.classList.remove(this._settings.inputErrorClass);
    form.querySelector(`#${input.id}-error`).textContent = "";
  };

  setSubmitButtonState() {
    this._button.disabled = !this._form.checkValidity()
    this._button.classList.toggle(this._settings.submitButtonErrorClass, !this._form.checkValidity())
  }
}

