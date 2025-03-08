export const phoneInputFilter = (text:string):string => {
  let value = text.replace(/\D/g, ''); // Удаляем все нечисловые символы

  // Проверяем первый символ и добавляем префиксы
  if (value.startsWith('9')) {
	value = `8${value}`;
  } else if (value.startsWith('7')) {
	value = `+7${value.slice(1)}`;
  } else if (!value.startsWith('8') && !value.startsWith('7')) {
	value = ''; // Если первый символ не 8, 7 или +, сбрасываем значение
  }

  // Ограничиваем длину номера
  const maxLength = value.startsWith('+') ? 12 : 11;
  if (value.length > maxLength) {
	value = value.slice(0, maxLength);
  }

  // Форматируем номер телефона
  if (value.length > 1) {
	value = value.replace(/(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/, '$1-$2-$3-$4-$5');
  }

	return value;
};
