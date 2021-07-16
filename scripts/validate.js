// Вынесем все необходимые элементы формы в константы
const formElement = document.querySelector('.popup__form');
const inputElement = formElement.querySelector('.popup__input');

// Функция, которая проверяет валидность поля
// Функция isValid теперь принимает formElement и inputElement,
// а не берёт их из внешней области видимости
const isValid = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    // Если поле не проходит валидацию, покажем ошибку
    // showInputError теперь получает параметром форму, в которой
    // находится проверяемое поле, и само это поле
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    // hideInputError теперь получает параметром форму, в которой
    // находится проверяемое поле, и само это поле
    hideInputError(formElement, inputElement);
  }
};

// Функция принимает массив полей
const hasInvalidInput = (inputList) => {
  // проходим по этому массиву методом some
  return inputList.some((inputElement) => {
    // Если поле не валидно, колбэк вернёт true
    // Обход массива прекратится и вся фунцкция
    // hasInvalidInput вернёт true

    return !inputElement.validity.valid;
  })
};

// Функция принимает массив полей ввода
// и элемент кнопки, состояние которой нужно менять
const toggleButtonState = (inputList, buttonElement) => {
  // Если есть хотя бы один невалидный инпут
  if (hasInvalidInput(inputList)) {
    // сделай кнопку неактивной
    buttonElement.classList.add('popup__submit-button_inactive');
    buttonElement.setAttribute('disabled', 'disabled');
  } else {
    // иначе сделай кнопку активной
    buttonElement.classList.remove('popup__submit-button_inactive');
    buttonElement.removeAttribute('disabled');
  }
};

// Функция, которая добавляет класс с ошибкой
const showInputError = (formElement, inputElement, errorMessage) => {
    // Находим элемент ошибки внутри самой функции
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

  inputElement.classList.add('popup__input_type_error');
    // Показываем сообщение об ошибке
    // Заменим содержимое span с ошибкой на переданный параметр
  errorElement.textContent = errorMessage;
  errorElement.classList.add('popup__input-error_active');
};

// const clearErrors = (formElement) => {
//   const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
//   const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//   // console.log(inputList);
//   inputList.forEach((inputElement) => {
//     if (inputElement.classList.contains('popup__input_type_error') || (errorElement.classList.contains('popup__input-error_active'))) {
//       inputElement.classList.remove('popup__input_type_error');
//       errorElement.classList.remove('popup__input-error_active');
//       errorElement.textContent = '';
//     }
//   });
// }

// Функция, которая удаляет класс с ошибкой
const hideInputError = (formElement, inputElement) => {
    // Находим элемент ошибки
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

  inputElement.classList.remove('popup__input_type_error');
    // Скрываем сообщение об ошибке
  errorElement.classList.remove('popup__input-error_active');
  // Очистим ошибку
  errorElement.textContent = '';
};

const setEventListeners = (formElement) => {
  // Находим все поля внутри формы,
  // сделаем из них массив методом Array.from
  const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
  // Найдём в текущей форме кнопку отправки
  const buttonElement = formElement.querySelector('.popup__submit-button');

  // Вызовем toggleButtonState, чтобы не ждать ввода данных в поля
  toggleButtonState(inputList, buttonElement);

  // Обойдём все элементы полученной коллекции
  inputList.forEach((inputElement) => {
    // каждому полю добавим обработчик события input
    inputElement.addEventListener('input', () => {
      // Внутри колбэка вызовем isValid,
      // передав ей форму и проверяемый элемент
      isValid(formElement, inputElement);

      // Вызовем toggleButtonState и передадим ей массив полей и кнопку
      toggleButtonState(inputList, buttonElement);
    });
  });
};

const enableValidation = () => {
  // Найдём все формы с указанным классом в DOM,
  // сделаем из них массив методом Array.from
  const formList = Array.from(document.querySelectorAll('.popup__form'));

  // Переберём полученную коллекцию
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      // У каждой формы отменим стандартное поведение
      evt.preventDefault();
    });

    // Для каждой формы вызовем функцию setEventListeners,
    // передав ей элемент формы
    setEventListeners(formElement);
  });
};

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
});
