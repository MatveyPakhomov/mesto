(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function t(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var n=function(){function n(e,r,o,i){var u=this,s=i.handleCardClick,a=i.handleDeleteClick,c=i.handleDeleteCard,l=i.handleLikeClick;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),t(this,"_openDeletePopup",(function(){u._handleDeleteClick(),u._popupDelete.addEventListener("submit",u._deleteCard)})),t(this,"_deleteCard",(function(){u._handleDeleteCard(u._card,u._cardId),u._popupDelete.removeEventListener("submit",u._deleteCard)})),t(this,"_like",(function(){u._handleLikeClick(u._cardId,u._cardLikeCounter,u._cardLikeBtn,u)})),this._name=e.name,this._link=e.link,this._likeCounter=e.likes,this._template=r,this._cardId=e._id,this._userId=o,this._ownerId=e.owner._id,this._handleCardClick=s,this._handleDeleteClick=a,this._handleDeleteCard=c,this._handleLikeClick=l,this._likesId=e.likes,this._popupDelete=document.querySelector(".popup_type_delete")}var r,o;return r=n,(o=[{key:"isLiked",value:function(){if(this._cardLikeBtn.classList.contains("element__like-button_active"))return!0}},{key:"_setDeleteButton",value:function(){this._userId!==this._ownerId&&(this._cardDeleteBtn.hidden=!0)}},{key:"_getTemplate",value:function(){return this._template.content.querySelector(".element").cloneNode(!0)}},{key:"_setLikeCounter",value:function(){var e=this;this._likesId.find((function(t){return t._id===e._userId}))&&this._cardLikeBtn.classList.add("element__like-button_active"),this._cardLikeCounter.textContent=this._likeCounter.length}},{key:"_setEventListeners",value:function(){var e=this;this._cardDeleteBtn.addEventListener("click",this._openDeletePopup),this._cardLikeSection.addEventListener("click",this._like),this._cardViewBtn.addEventListener("click",(function(){e._handleCardClick(e._name,e._link)}))}},{key:"getCard",value:function(){return this._card=this._getTemplate(),this._cardLikeSection=this._card.querySelector(".element__like-section"),this._cardLikeCounter=this._card.querySelector(".element__like-counter"),this._cardLikeBtn=this._card.querySelector(".element__like-button"),this._cardDeleteBtn=this._card.querySelector(".element__garbage-button"),this._cardViewBtn=this._card.querySelector(".element__image"),this._cardTitle=this._card.querySelector(".element__title"),this._cardTitle.textContent=this._name,this._cardViewBtn.src=this._link,this._cardViewBtn.alt=this._name,this._setLikeCounter(),this._setDeleteButton(),this._setEventListeners(),this._card}}])&&e(r.prototype,o),n}();function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._formSelector=t.formSelector,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._formElement=n,this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._buttonElement=this._formElement.querySelector(this._submitButtonSelector)}var t,n;return t=e,(n=[{key:"_checkInputValidity",value:function(e){var t=!e.validity.valid,n=e.validationMessage;t?this._showInputError(e,n):this._hideInputError(e)}},{key:"_showInputError",value:function(e,t){var n=this._formElement.querySelector("#".concat(e.id,"-error"));e.classList.add(this._inputErrorClass),n.textContent=t,n.classList.add(this._errorClass)}},{key:"_hideInputError",value:function(e){var t=this._formElement.querySelector("#".concat(e.id,"-error"));e.classList.remove(this._inputErrorClass),t.classList.remove(this._errorClass),t.textContent=""}},{key:"_toggleButtonState",value:function(){this._inputList.some((function(e){return!e.validity.valid}))?this.disableSubmitButton():(this._buttonElement.classList.remove(this._inactiveButtonClass),this._buttonElement.removeAttribute("disabled"))}},{key:"_setEventListeners",value:function(){var e=this;this._toggleButtonState(),this._formElement.addEventListener("submit",(function(e){e.preventDefault()})),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState()}))}))}},{key:"resetValidation",value:function(){var e=this;this._inputList.forEach((function(t){e._hideInputError(t),e._toggleButtonState()}))}},{key:"disableSubmitButton",value:function(){this._buttonElement.classList.add(this._inactiveButtonClass),this._buttonElement.setAttribute("disabled","disabled")}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&r(t.prototype,n),e}();function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._containerSelector=n}var t,n;return t=e,(n=[{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}},{key:"appendItem",value:function(e){this._containerSelector.append(e)}},{key:"prependItem",value:function(e){this._containerSelector.prepend(e)}}])&&i(t.prototype,n),e}();function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=function(){function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),a(this,"_handleEscClose",(function(e){"Escape"===e.key&&n.close()})),a(this,"_handleOverlayClose",(function(e){e.target.classList.contains("popup")&&n.close()})),this._popup=document.querySelector(t),this._popupCloseButton=this._popup.querySelector(".popup__close-button"),this._closeMethod=this.close.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),this._setEventListeners()}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),this._removeEventListeners()}},{key:"_setEventListeners",value:function(){this._popupCloseButton.addEventListener("click",this._closeMethod),document.addEventListener("keyup",this._handleEscClose),this._popup.addEventListener("mousedown",this._handleOverlayClose)}},{key:"_removeEventListeners",value:function(){this._popupCloseButton.removeEventListener("click",this._closeMethod),document.removeEventListener("keyup",this._handleEscClose),this._popup.removeEventListener("mousedown",this._handleOverlayClose)}}])&&s(t.prototype,n),e}();function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t,n){return(p="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=y(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _(e,t){if(t&&("object"===l(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return d(e)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var v=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=y(r);if(o){var n=y(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return _(this,e)});function u(e,t){var n,r,o,s;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),s=function(){n._handleFormSubmit(n._getInputValues()),n._form.reset()},(o="_submit")in(r=d(n=i.call(this,e)))?Object.defineProperty(r,o,{value:s,enumerable:!0,configurable:!0,writable:!0}):r[o]=s,n._handleFormSubmit=t,n._inputList=n._popup.querySelectorAll(".popup__input"),n._submitButton=n._popup.querySelector(".popup__submit-button"),n._form=n._popup.querySelector(".popup__form"),n}return t=u,(n=[{key:"_getInputValues",value:function(){var e=this;return this._inputValues={},this._inputList.forEach((function(t){e._inputValues[t.name]=t.value})),this._inputValues}},{key:"renderLoading",value:function(e){e?(this._submitTextBefore=this._submitButton.textContent,this._submitButton.textContent="Сохранение..."):this._submitButton.textContent=this._submitTextBefore}},{key:"close",value:function(){p(y(u.prototype),"close",this).call(this)}},{key:"_setEventListeners",value:function(){p(y(u.prototype),"_setEventListeners",this).call(this),this._popup.addEventListener("submit",this._submit)}},{key:"_removeEventListeners",value:function(){p(y(u.prototype),"_removeEventListeners",this).call(this),this._popup.removeEventListener("submit",this._submit)}}])&&f(t.prototype,n),u}(c);function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var b=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._usernameElement=t,this._userJobElement=n,this._userAvatarElement=r}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return this._profileData={name:this._usernameElement.textContent,job:this._userJobElement.textContent},this._profileData}},{key:"setUserInfo",value:function(e){e.name&&(this._usernameElement.textContent=e.name),e.about&&(this._userJobElement.textContent=e.about),e.avatar&&(this._userAvatarElement.src=e.avatar)}},{key:"userId",value:function(e){return e._id}}])&&m(t.prototype,n),e}();function k(e){return(k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(e,t,n){return(g="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=L(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function C(e,t){return(C=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function w(e,t){if(t&&("object"===k(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function L(e){return(L=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var S=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&C(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=L(r);if(o){var n=L(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return w(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._name=t._popup.querySelector(".popup__caption"),t._link=t._popup.querySelector(".popup__image"),t}return t=u,(n=[{key:"open",value:function(e,t){g(L(u.prototype),"open",this).call(this),this._name.textContent=e,this._link.src=t,this._link.alt=e}}])&&E(t.prototype,n),u}(c),O={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__submit-button",inactiveButtonClass:"popup__submit-button_inactive",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_active"},B=document.querySelector(".elements__list"),j=document.querySelector(".template-elements"),P=document.querySelector(".profile"),I=P.querySelector(".profile__edit-button"),R=P.querySelector(".profile__title"),q=P.querySelector(".profile__subtitle"),T=P.querySelector(".profile__add-button"),D=P.querySelector(".profile__avatar-edit-button"),x=P.querySelector(".profile__avatar"),V=document.querySelector(".popup_type_edit"),A=V.querySelector(".popup__input_value_name"),U=V.querySelector(".popup__input_value_job"),J=document.querySelector(".popup__form_type_edit"),N=document.querySelector(".popup__form_type_create"),M=document.querySelector(".popup__form_type_update-avatar");function F(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var H=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.url=t.baseUrl,this.headers=t.headers}var t,n;return t=e,(n=[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status," ").concat(e.statusText))}},{key:"getProfileInfo",value:function(){return fetch(this.url+"/users/me",{headers:this.headers}).then(this._checkResponse)}},{key:"getInitialCards",value:function(){return fetch(this.url+"/cards",{headers:this.headers}).then(this._checkResponse)}},{key:"editProfile",value:function(e){return fetch(this.url+"/users/me",{method:"PATCH",headers:this.headers,body:JSON.stringify(e)}).then(this._checkResponse)}},{key:"addNewCard",value:function(e){return fetch(this.url+"/cards",{method:"POST",headers:this.headers,body:JSON.stringify(e)}).then(this._checkResponse)}},{key:"updateAvatar",value:function(e){return fetch(this.url+"/users/me/avatar",{method:"PATCH",headers:this.headers,body:JSON.stringify(e)}).then(this._checkResponse)}},{key:"deleteCard",value:function(e){return fetch(this.url+"/cards/".concat(e),{method:"DELETE",headers:this.headers}).then(this._checkResponse)}},{key:"likeCard",value:function(e){return fetch(this.url+"/cards/likes/".concat(e),{method:"PUT",headers:this.headers}).then(this._checkResponse)}},{key:"unlikeCard",value:function(e){return fetch(this.url+"/cards/likes/".concat(e),{method:"DELETE",headers:this.headers}).then(this._checkResponse)}}])&&F(t.prototype,n),e}();function z(e){return(z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function G(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function K(e,t,n){return(K="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=Y(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function Q(e,t){return(Q=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function W(e,t){if(t&&("object"===z(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return X(e)}function X(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Y(e){return(Y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var Z=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Q(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=Y(r);if(o){var n=Y(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return W(this,e)});function u(e){var t,n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),o=function(e){e.preventDefault()},(r="_submit")in(n=X(t=i.call(this,e)))?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o,t._submitButton=t._popup.querySelector(".popup__submit-button"),t}return t=u,(n=[{key:"renderLoading",value:function(e){e?(this._submitTextBefore=this._submitButton.textContent,this._submitButton.textContent="Удаление..."):this._submitButton.textContent=this._submitTextBefore}},{key:"_setEventListeners",value:function(){K(Y(u.prototype),"_setEventListeners",this).call(this),this._popup.addEventListener("submit",this._submit)}},{key:"_removeEventListeners",value:function(){K(Y(u.prototype),"_removeEventListeners",this).call(this),this._popup.removeEventListener("submit",this._submit)}}])&&G(t.prototype,n),u}(c);function $(e){return new n(e,j,_e,{handleCardClick:re,handleDeleteClick:ie,handleDeleteCard:ue,handleLikeClick:se}).getCard()}var ee=new u({renderer:function(e){var t=$(e);ee.appendItem(t)}},B),te=new v(".popup_type_create",(function(e){te.renderLoading(!0),de.addNewCard({name:e.name,link:e.link}).then((function(e){var t=$(e);ee.prependItem(t),te.close()})).catch((function(e){return console.log(e)})).finally((function(){te.renderLoading(!1)}))})),ne=new S(".popup_type_view"),re=function(e,t){ne.open(e,t)},oe=new Z(".popup_type_delete");function ie(){oe.open()}function ue(e,t){oe.renderLoading(!0),de.deleteCard(t).then((function(){e.remove(),oe.close()})).catch((function(e){return console.log(e)})).finally((function(){oe.renderLoading(!1)}))}function se(e,t,n,r){r.isLiked()?de.unlikeCard(e).then((function(e){t.textContent=e.likes.length,n.classList.remove("element__like-button_active")})).catch((function(e){return console.log(e)})):de.likeCard(e).then((function(e){t.textContent=e.likes.length,n.classList.add("element__like-button_active")})).catch((function(e){return console.log(e)}))}var ae=new v(".popup_type_update-avatar",(function(e){ae.renderLoading(!0),de.updateAvatar({avatar:e.avatar}).then((function(e){ce.setUserInfo(e),ae.close()})).catch((function(e){return console.log(e)})).finally((function(){ae.renderLoading(!1)}))})),ce=new b(R,q,x),le=new v(".popup_type_edit",(function(e){le.renderLoading(!0),de.editProfile({name:e.name,about:e.link}).then((function(e){ce.setUserInfo(e),le.close()})).catch((function(e){return console.log(e)})).finally((function(){le.renderLoading(!1)}))}));I.addEventListener("click",(function(){le.open();var e=ce.getUserInfo();A.value=e.name,U.value=e.job,fe.resetValidation()})),T.addEventListener("click",(function(){te.open(),pe.resetValidation()})),D.addEventListener("click",(function(){ae.open(),he.resetValidation()}));var fe=new o(O,J),pe=new o(O,N),he=new o(O,M);fe.enableValidation(),pe.enableValidation(),he.enableValidation();var _e,de=new H({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-27",headers:{authorization:"df65ab57-8f59-4984-a17c-2f08d584d2db","Content-Type":"application/json"}});de.getProfileInfo().then((function(e){ce.setUserInfo(e),_e=ce.userId(e)})).then((function(){de.getInitialCards().then((function(e){ee.renderItems(e)})).catch((function(e){return console.log(e)}))})).catch((function(e){return console.log(e)}))})();