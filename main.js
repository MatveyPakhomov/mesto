(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function t(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var n=function(){function n(e,r,o,i,u,a){var s=this,c=a.handleCardClick,l=a.handleDeleteClick,f=a.handleLikeClick;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),t(this,"_delete",(function(){s._handleDeleteClick(s._cardId,s._card)})),t(this,"_like",(function(){s._handleLikeClick(s._cardId,s._card,s._userId)})),this._name=e.name,this._link=e.link,this._likeCounter=u,this._template=r,this._cardId=e._id,this._userId=o,this._ownerId=i,this._handleCardClick=c,this._handleDeleteClick=l,this._handleLikeClick=f}var r,o;return r=n,(o=[{key:"_getTemplate",value:function(){return this._template.content.querySelector(".element").cloneNode(!0)}},{key:"_setLikeCounter",value:function(){this._cardLikeCounter.textContent=this._likeCounter}},{key:"_setEventListeners",value:function(){var e=this;this._cardDeleteBtn.addEventListener("click",this._delete),this._cardLikeSection.addEventListener("click",this._like),this._cardViewBtn.addEventListener("click",(function(){e._handleCardClick(e._name,e._link)}))}},{key:"getCard",value:function(){return this._card=this._getTemplate(),this._cardLikeSection=this._card.querySelector(".element__like-section"),this._cardLikeCounter=this._card.querySelector(".element__like-counter"),this._cardDeleteBtn=this._card.querySelector(".element__garbage-button"),this._cardViewBtn=this._card.querySelector(".element__image"),this._cardTitle=this._card.querySelector(".element__title"),this._cardTitle.textContent=this._name,this._cardViewBtn.src=this._link,this._cardViewBtn.alt=this._name,this._setLikeCounter(),this._setEventListeners(),this._card}}])&&e(r.prototype,o),n}();function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._formSelector=t.formSelector,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._formElement=n,this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._buttonElement=this._formElement.querySelector(this._submitButtonSelector)}var t,n;return t=e,(n=[{key:"_checkInputValidity",value:function(e){var t=!e.validity.valid,n=e.validationMessage;t?this._showInputError(e,n):this._hideInputError(e)}},{key:"_showInputError",value:function(e,t){var n=this._formElement.querySelector("#".concat(e.id,"-error"));e.classList.add(this._inputErrorClass),n.textContent=t,n.classList.add(this._errorClass)}},{key:"_hideInputError",value:function(e){var t=this._formElement.querySelector("#".concat(e.id,"-error"));e.classList.remove(this._inputErrorClass),t.classList.remove(this._errorClass),t.textContent=""}},{key:"_toggleButtonState",value:function(){this._inputList.some((function(e){return!e.validity.valid}))?(this._buttonElement.classList.add(this._inactiveButtonClass),this._buttonElement.setAttribute("disabled","disabled")):(this._buttonElement.classList.remove(this._inactiveButtonClass),this._buttonElement.removeAttribute("disabled"))}},{key:"_setEventListeners",value:function(){var e=this;this._toggleButtonState(),this._formElement.addEventListener("submit",(function(t){t.preventDefault(),e.disableSubmitButton()})),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState()}))}))}},{key:"resetValidation",value:function(){var e=this;this._inputList.forEach((function(t){e._hideInputError(t),e._toggleButtonState()}))}},{key:"disableSubmitButton",value:function(){this._buttonElement.classList.add(this._inactiveButtonClass),this._buttonElement.setAttribute("disabled","disabled")}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&r(t.prototype,n),e}();function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._containerSelector=n}var t,n;return t=e,(n=[{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}},{key:"appendItem",value:function(e){this._containerSelector.append(e)}},{key:"prependItem",value:function(e){this._containerSelector.prepend(e)}}])&&i(t.prototype,n),e}();function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=function(){function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),s(this,"_handleEscClose",(function(e){"Escape"===e.key&&n.close()})),s(this,"_handleOverlayClose",(function(e){e.target.classList.contains("popup")&&n.close()})),this._popup=document.querySelector(t),this._popupCloseButton=this._popup.querySelector(".popup__close-button"),this._closeMethod=this.close.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),this._setEventListeners()}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),this._removeEventListeners()}},{key:"_setEventListeners",value:function(){this._popupCloseButton.addEventListener("click",this._closeMethod),document.addEventListener("keyup",this._handleEscClose),this._popup.addEventListener("mousedown",this._handleOverlayClose)}},{key:"_removeEventListeners",value:function(){this._popupCloseButton.removeEventListener("click",this._closeMethod),document.removeEventListener("keyup",this._handleEscClose),this._popup.removeEventListener("mousedown",this._handleOverlayClose)}}])&&a(t.prototype,n),e}();function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t,n){return(p="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=y(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _(e,t){if(t&&("object"===l(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return d(e)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var v=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=y(r);if(o){var n=y(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return _(this,e)});function u(e,t){var n,r,o,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),a=function(){n.renderLoading(!0),n._handleFormSubmit(n._getInputValues())},(o="_submit")in(r=d(n=i.call(this,e)))?Object.defineProperty(r,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):r[o]=a,n._handleFormSubmit=t,n}return t=u,(n=[{key:"_getInputValues",value:function(){var e=this;return this._inputList=this._popup.querySelectorAll(".popup__input"),this._inputValues={},this._inputList.forEach((function(t){e._inputValues[t.name]=t.value})),this._inputValues}},{key:"renderLoading",value:function(e){this._submitButton=this._popup.querySelector(".popup__submit-button"),e?(this._submitTextBefore=this._submitButton.textContent,this._submitButton.textContent="Сохранение..."):this._submitButton.textContent=this._submitTextBefore}},{key:"_setEventListeners",value:function(){p(y(u.prototype),"_setEventListeners",this).call(this),this._popup.addEventListener("submit",this._submit)}},{key:"_removeEventListeners",value:function(){p(y(u.prototype),"_removeEventListeners",this).call(this),this._popup.removeEventListener("submit",this._submit)}}])&&f(t.prototype,n),u}(c);function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var b=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._usernameElement=t,this._userJobElement=n,this._userAvatarElement=r}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return this._profileData={name:this._usernameElement.textContent,job:this._userJobElement.textContent},this._profileData}},{key:"setUserInfo",value:function(e){e.name&&(this._usernameElement.textContent=e.name),e.link&&(this._userJobElement.textContent=e.link)}},{key:"setUserAvatar",value:function(e){e.avatar&&(this._userAvatarElement.src=e.avatar)}}])&&m(t.prototype,n),e}();function k(e){return(k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(e,t,n){return(g="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=S(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function C(e,t){return(C=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function w(e,t){if(t&&("object"===k(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function S(e){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var L=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&C(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=S(r);if(o){var n=S(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return w(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._name=t._popup.querySelector(".popup__caption"),t._link=t._popup.querySelector(".popup__image"),t}return t=u,(n=[{key:"open",value:function(e,t){g(S(u.prototype),"open",this).call(this),this._name.textContent=e,this._link.src=t,this._link.alt=e}}])&&E(t.prototype,n),u}(c),O={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__submit-button",inactiveButtonClass:"popup__submit-button_inactive",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_active"};function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var P=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.url=t.baseUrl,this.headers=t.headers}var t,n;return t=e,(n=[{key:"getProfileInfo",value:function(){return fetch(this.url+"/users/me",{headers:this.headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status," ").concat(e.statusText))}))}},{key:"getInitialCards",value:function(){return fetch(this.url+"/cards",{headers:this.headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status," ").concat(e.statusText))}))}},{key:"editProfile",value:function(e){return fetch(this.url+"/users/me",{method:"PATCH",headers:this.headers,body:JSON.stringify(e)}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status," ").concat(e.statusText))}))}},{key:"addNewCard",value:function(e){return fetch(this.url+"/cards",{method:"POST",headers:this.headers,body:JSON.stringify(e)}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status," ").concat(e.statusText))}))}},{key:"updateAvatar",value:function(e){return fetch(this.url+"/users/me/avatar",{method:"PATCH",headers:this.headers,body:JSON.stringify(e)}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status," ").concat(e.statusText))}))}},{key:"deleteCard",value:function(e){return fetch(this.url+"/cards/".concat(e),{method:"DELETE",headers:this.headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status," ").concat(e.statusText))}))}},{key:"likeCard",value:function(e){return fetch(this.url+"/cards/likes/".concat(e),{method:"PUT",headers:this.headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status," ").concat(e.statusText))}))}},{key:"unlikeCard",value:function(e){return fetch(this.url+"/cards/likes/".concat(e),{method:"DELETE",headers:this.headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status," ").concat(e.statusText))}))}}])&&j(t.prototype,n),e}();function B(e){return(B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function T(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function q(e,t,n){return(q="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=V(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function x(e,t){return(x=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function I(e,t){if(t&&("object"===B(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return R(e)}function R(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function V(e){return(V=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var D=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&x(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=V(r);if(o){var n=V(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return I(this,e)});function u(e,t){var n,r,o,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),a=function(e){e.preventDefault(),n._handleFormSubmit()},(o="_submit")in(r=R(n=i.call(this,e)))?Object.defineProperty(r,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):r[o]=a,n._handleFormSubmit=t,n}return t=u,(n=[{key:"_setEventListeners",value:function(){q(V(u.prototype),"_setEventListeners",this).call(this),this._popup.addEventListener("submit",this._submit)}},{key:"_removeEventListeners",value:function(){q(V(u.prototype),"_removeEventListeners",this).call(this),this._popup.removeEventListener("submit",this._submit)}}])&&T(t.prototype,n),u}(c),A=document.querySelector(".elements__list"),U=document.querySelector(".template-elements"),J=document.querySelector(".profile"),N=J.querySelector(".profile__edit-button"),F=J.querySelector(".profile__title"),M=J.querySelector(".profile__subtitle"),H=J.querySelector(".profile__add-button"),z=J.querySelector(".profile__avatar-edit-button"),G=J.querySelector(".profile__avatar"),K=document.querySelector(".popup_type_edit"),Q=K.querySelector(".popup__input_value_name"),W=K.querySelector(".popup__input_value_job"),X=document.querySelector(".popup__form_type_edit"),Y=document.querySelector(".popup__form_type_create"),Z=document.querySelector(".popup__form_type_update-avatar");function $(e,t,r){return new n(e,U,fe,t,r,{handleCardClick:ne,handleDeleteClick:re,handleLikeClick:oe}).getCard()}var ee=new u({renderer:function(e){var t=e.owner._id,n=e.likes,r=$(e,t,e.likes.length),o=r.querySelector(".element__garbage-button"),i=r.querySelector(".element__like-button");n.find((function(e){return e._id===fe}))&&i.classList.add("element__like-button_active"),ee.appendItem(r),fe!==t&&(o.hidden=!0)}},A),te=new v(".popup_type_create",(function(e){pe.addNewCard({name:e.name,link:e.link}).then((function(t){n.textContent=t.likes.length,e._id=t._id})).catch((function(e){return console.log(e)}));var t=$(e),n=t.querySelector(".element__like-counter");te.renderLoading(!1),ee.prependItem(t),te.close(),Y.reset()})),ne=function(e,t){new L(".popup_type_view").open(e,t)};function re(e,t){console.log(e,fe);var n=new D(".popup_type_delete",(function(){pe.deleteCard(e).catch((function(e){return console.log(e)})),n.close(),t.remove()}));n.open()}function oe(e,t,n){var r=this,o=t.querySelector(".element__like-button");o.classList.contains("element__like-button_active")?(pe.unlikeCard(e).then((function(e){r._cardLikeCounter.textContent=e.likes.length})).catch((function(e){return console.log(e)})),o.classList.remove("element__like-button_active")):(pe.likeCard(e).then((function(e){r._cardLikeCounter.textContent=e.likes.length})).catch((function(e){return console.log(e)})),o.classList.add("element__like-button_active"))}var ie=new v(".popup_type_update-avatar",(function(e){ue.setUserAvatar(e),pe.updateAvatar({avatar:e.avatar}).catch((function(e){return console.log(e)})),ie.renderLoading(!1),ie.close(),Z.reset()})),ue=new b(F,M,G),ae=new v(".popup_type_edit",(function(e){ue.setUserInfo(e),pe.editProfile({name:e.name,about:e.link}).catch((function(e){return console.log(e)})),ae.renderLoading(!1),ae.close()}));N.addEventListener("click",(function(){ae.open();var e=ue.getUserInfo();Q.value=e.name,W.value=e.job,se.resetValidation()})),H.addEventListener("click",(function(){te.open(),ce.resetValidation()})),z.addEventListener("click",(function(){ie.open(),le.resetValidation()}));var se=new o(O,X),ce=new o(O,Y),le=new o(O,Z);se.enableValidation(),ce.enableValidation(),le.enableValidation();var fe,pe=new P({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-27",headers:{authorization:"df65ab57-8f59-4984-a17c-2f08d584d2db","Content-Type":"application/json"}});pe.getProfileInfo().then((function(e){F.textContent=e.name,M.textContent=e.about,G.src=e.avatar,fe=e._id})).then((function(){pe.getInitialCards().then((function(e){ee.renderItems(e)})).catch((function(e){return console.log(e)}))}))})();