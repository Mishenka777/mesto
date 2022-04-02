(()=>{"use strict";function e(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var n=function(){function n(t,r){var o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),this._settings=t,this._form=r,this._inputs=function(t){if(Array.isArray(t))return e(t)}(o=this._form.querySelectorAll(this._settings.inputSelector))||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(o)||function(t,n){if(t){if("string"==typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?e(t,n):void 0}}(o)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),this._button=r.querySelector(this._settings.submitButtonSelector)}var r,o;return r=n,(o=[{key:"enableValidation",value:function(){this._setEventListeners(this._form)}},{key:"_setEventListeners",value:function(){var e=this;this._inputs.forEach((function(t){return t.addEventListener("input",(function(){e._handleField(t),e.setSubmitButtonState()}))}))}},{key:"_handleField",value:function(e){e.validity.valid?this._hideError(e):this._showError(e)}},{key:"_showError",value:function(e){e.classList.add(this._settings.inputErrorClass),this._form.querySelector("#".concat(e.id,"-error")).textContent=e.validationMessage}},{key:"_hideError",value:function(e){e.classList.remove(this._settings.inputErrorClass),this._form.querySelector("#".concat(e.id,"-error")).textContent=""}},{key:"setSubmitButtonState",value:function(){this._button.disabled=!this._form.checkValidity(),this._button.classList.toggle(this._settings.submitButtonErrorClass,!this._form.checkValidity())}}])&&t(r.prototype,o),Object.defineProperty(r,"prototype",{writable:!1}),n}();function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=function(){function e(t,n,r,o,i,a){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=t.name,this._link=t.link,this._cardTemplateSelector=r,this._userId=i,this._id=t._id,this._ownerId=t.owner._id,this._likes=t.likes,this._handleCardClick=n,this._handleLikeClick=o,this._handleCardDelete=a}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return this._templateElement=document.querySelector(this._cardTemplateSelector).content,this._templateElement.querySelector(".element").cloneNode(!0)}},{key:"isLike",value:function(){var e=this;return this._likes.find((function(t){return t._id===e._userId}))}},{key:"setLikes",value:function(e){this._likes=e,this._likeCountsElement.textContent=this._likes.length,this.isLike()?this._likeButton.classList.add("element__button_active"):this._likeButton.classList.remove("element__button_active")}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._likeButton=this._element.querySelector(".element__button"),this._deleteButton=this._element.querySelector(".element__delete"),this._likeCountsElement=this._element.querySelector(".element__button-count"),this._setEventListeners(),this._cardImage.src=this._link,this._cardImage.alt=this._name,this._element.querySelector(".element__title").textContent=this._name,this.setLikes(this._likes),this._ownerId!==this._userId&&(this._deleteButton.style.display="none"),this._element}},{key:"deleteCard",value:function(){this._element.remove(),this._element=null}},{key:"_setEventListeners",value:function(){var e=this;this._likeButton.addEventListener("click",(function(){return e._handleLikeClick(e._id)})),this._deleteButton.addEventListener("click",(function(){e._handleCardDelete(e._id)})),this._cardImage=this._element.querySelector(".element__photo"),this._cardImage.addEventListener("click",(function(){e._handleCardClick(e._name,e._link)}))}}])&&r(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._container=document.querySelector(n),this._renderer=r}var t,n;return t=e,(n=[{key:"renderItems",value:function(e){var t=this;e.reverse().forEach((function(e){t._renderer(e)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&i(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),u=document.querySelector(".profile__edit-button"),c=document.querySelector(".profile__add-button"),s=document.querySelector(".popup__container_type_profile"),l=document.querySelector(".popup__container_type_element"),f=document.querySelector(".popup__container_type_avatar"),p=document.querySelector(".popup__text_type_job"),h=document.querySelector(".popup__text_type_name"),y=(document.querySelector(".popup__text_type_avatar"),document.querySelector(".profile__title")),d=document.querySelector(".profile__text"),_=document.querySelector(".profile__photo"),v=document.querySelector(".profile__change-avatar"),b={formSelector:".popup__container",inputSelector:".popup__text",inputErrorClass:"popup__text_state_invalid",submitButtonSelector:".popup__save",submitButtonErrorClass:"popup__save_invalid"};function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var g=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this),this._popupExit=this._popup.querySelector(".popup__exit")}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("mousedown",(function(t){t.target.classList.contains("popup_opened")&&e.close()})),this._popupExit.addEventListener("click",(function(){e.close()}))}}])&&m(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function k(e){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},k(e)}function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function S(){return S="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=E(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},S.apply(this,arguments)}function E(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=L(e)););return e}function O(e,t){return O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},O(e,t)}function j(e,t){if(t&&("object"===k(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function L(e){return L=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},L(e)}var C=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&O(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=L(r);if(o){var n=L(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return j(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._image=t._popup.querySelector(".popup__image"),t._name=t._popup.querySelector(".popup__image-title"),t}return t=a,(n=[{key:"open",value:function(e,t){this._image.src=t,this._image.alt=e,this._name.textContent=e,S(L(a.prototype),"open",this).call(this)}}])&&w(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(g);function P(e){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},P(e)}function R(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function q(){return q="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=I(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},q.apply(this,arguments)}function I(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=A(e)););return e}function T(e,t){return T=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},T(e,t)}function x(e,t){if(t&&("object"===P(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function A(e){return A=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},A(e)}var B=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&T(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=A(r);if(o){var n=A(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return x(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._submitHandler=t,n._popupForm=n._popup.querySelector(".popup__container"),n._inputList=n._popup.querySelectorAll(".popup__text"),n._saveButton=n._popup.querySelector(".popup__save"),n}return t=a,(n=[{key:"_getInputValues",value:function(){var e=this;return this._inputValue={},this._inputList.forEach((function(t){e._inputValue[t.name]=t.value})),this._inputValue}},{key:"renderLoading",value:function(e){this._saveButton.textContent=e?"Сохранение...":"Сохранить"}},{key:"setEventListeners",value:function(){var e=this;q(A(a.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",(function(t){t.preventDefault(),e._submitHandler(e._getInputValues())}))}},{key:"close",value:function(){q(A(a.prototype),"close",this).call(this),this._popupForm.reset()}}])&&R(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(g);function U(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var D=function(){function e(t){var n=t.profileName,r=t.profileJob,o=t.profileAvatar;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._profileName=n,this._profileJob=r,this._profileAvatar=o}var t,n;return t=e,n=[{key:"getUserInfo",value:function(){return{human:this._profileName.textContent,job:this._profileJob.textContent,avatar:this._profileAvatar.src}}},{key:"setUserInfo",value:function(e,t){this._profileName.textContent=e,this._profileJob.textContent=t}},{key:"setAvatar",value:function(e){this._profileAvatar.src=e}}],n&&U(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function V(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var N=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=t.baseUrl,this._headers=t.headers}var t,n;return t=e,n=[{key:"_getResponseServer",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}},{key:"getInitialCards",value:function(){var e=this;return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then((function(t){return e._getResponseServer(t)}))}},{key:"addCard",value:function(e,t){var n=this;return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e,link:t})}).then((function(e){return n._getResponseServer(e)}))}},{key:"getProfileData",value:function(){var e=this;return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then((function(t){return e._getResponseServer(t)}))}},{key:"setProfileData",value:function(e,t){var n=this;return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e,about:t})}).then((function(e){return n._getResponseServer(e)}))}},{key:"setAvatar",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify(e)}).then((function(e){return t._getResponseServer(e)}))}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return t._getResponseServer(e)}))}},{key:"addLike",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers}).then((function(e){return t._getResponseServer(e)}))}},{key:"deleteLike",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers}).then((function(e){return t._getResponseServer(e)}))}}],n&&V(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function J(e){return J="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},J(e)}function H(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function F(){return F="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=M(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},F.apply(this,arguments)}function M(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=K(e)););return e}function $(e,t){return $=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},$(e,t)}function z(e,t){if(t&&("object"===J(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return G(e)}function G(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function K(e){return K=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},K(e)}var Q,W=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&$(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=K(r);if(o){var n=K(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return z(this,e)});function a(e){var t,n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),o=function(e){e.preventDefault(),t._submitHandler()},(r="_handleSubmit")in(n=G(t=i.call(this,e)))?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o,t._popupSubmit=t._popup.querySelector(".popup__save"),t}return t=a,(n=[{key:"changeSubmit",value:function(e){this._submitHandler=e}},{key:"setEventListeners",value:function(){F(K(a.prototype),"setEventListeners",this).call(this),this._popupSubmit.addEventListener("click",this._handleSubmit)}}])&&H(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(g);function X(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var Y=new n(b,s),Z=new n(b,l),ee=new n(b,f),te=new C(".popup_image"),ne=new W(".popup_confirm"),re=new D({profileName:y,profileJob:d,profileAvatar:_}),oe=new N({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-38",headers:{authorization:"d617258f-158a-41bb-8c66-f8b8f4af6cc1","Content-Type":"application/json"}});Promise.all([oe.getProfileData(),oe.getInitialCards()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,u=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){u=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return X(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?X(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];re.setUserInfo(o.name,o.about),re.setAvatar(o.avatar),Q=o._id,ie.renderItems(i)})).catch((function(e){return console.log("Ошибка: ".concat(e))}));var ie=new a({renderer:function(e){ie.addItem(se(e))}},".elements"),ae=new B(".popup_avatar",(function(e){ae.renderLoading(!0),oe.setAvatar(e).then((function(e){re.setAvatar(e.avatar),ae.close()})).catch((function(e){return console.log("Ошибка: ".concat(e))})).finally((function(){return ae.renderLoading(!1)}))})),ue=new B(".popup_element",(function(e){ue.renderLoading(!0),oe.addCard(e.name,e.link).then((function(e){ie.addItem(se(e)),ue.close()})).catch((function(e){return console.log("Ошибка: ".concat(e))})).finally((function(){return ue.renderLoading(!1)}))})),ce=new B(".popup_profile",(function(e){ce.renderLoading(!0);var t=e.human,n=e.job;oe.setProfileData(t,n).then((function(){re.setUserInfo(t,n),ce.close()})).catch((function(e){return console.log("Ошибка: ".concat(e))})).finally((function(){return ce.renderLoading(!1)}))}));function se(e){var t=new o(e,le,"#element",(function(e){t.isLike()?oe.deleteLike(e).then((function(e){t.setLikes(e.likes)})).catch((function(e){return console.log("Ошибка: ".concat(e))})):oe.addLike(e).then((function(e){t.setLikes(e.likes)})).catch((function(e){return console.log("Ошибка: ".concat(e))}))}),Q,(function(){ne.open(),ne.changeSubmit((function(){oe.deleteCard(e._id).then((function(){t.deleteCard(),ne.close()})).catch((function(e){return console.log("Ошибка: ".concat(e))}))}))}));return t.generateCard()}function le(e,t){te.open(e,t)}c.addEventListener("click",(function(){Z.setSubmitButtonState(),ue.open()})),u.addEventListener("click",(function(){var e=re.getUserInfo(),t=e.human,n=e.job;h.value=t,p.value=n,ce.open()})),v.addEventListener("click",(function(){ee.setSubmitButtonState(),ae.open()})),ne.setEventListeners(),te.setEventListeners(),ue.setEventListeners(),ae.setEventListeners(),ce.setEventListeners(),ee.enableValidation(),Y.enableValidation(),Z.enableValidation()})();