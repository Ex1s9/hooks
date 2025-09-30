Реализовать хук findDomPath(startElement, targetElement):
Возвращает CSS-путь между элементами
Формат: селектор с тегами, классами и порядковыми номерами
Если элементы одинаковые → :scope
Если targetElement не внутри startElement → ошибка
Также реализовать findElementByPath(startElement, path), которая по пути возвращает DOM-элемент.
