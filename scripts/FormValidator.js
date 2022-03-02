 export class FormValidator {
   constructor(settings, form) {
    this._settings = settings;
    this._form = form;
    this._inputs = [...this._form.querySelectorAll(this._settings.inputSelector)];
    this._button = form.querySelector(this._settings.submitButtonSelector) ;
   }
   
  enableValidation() {
    this._setEventListeners(this._form)
  }

  _setEventListeners(form) {
    this._inputs.forEach(input => input.addEventListener('input', () => {
      this._handleField(form, input)
      this.setSubmitButtonState(form)
      })) 
  };
  
  _handleField(form, input) {
    if (input.validity.valid) {
      this._hideError(form, input)
    } else {
      this._showError(form, input)
    }
  }

  _showError(form, input){
    input.classList.add(this._settings.inputErrorClass);
    const errorElement = form.querySelector(`#${input.id}-error`);
    errorElement.textContent = input.validationMessage;
  };

  _hideError(form, input){
    input.classList.remove(this._settings.inputErrorClass);
    const errorElement = form.querySelector(`#${input.id}-error`);
    errorElement.textContent = "";
  };

  setSubmitButtonState(form) {
    this._button.disabled = !form.checkValidity()
    this._button.classList.toggle(this._settings.submitButtonErrorClass, !form.checkValidity())
  }
}

