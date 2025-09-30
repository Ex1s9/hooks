# 🎣 Learn Hooks

> Изучение и практика создания кастомных React хуков

## 📖 О проекте

**Learn Hooks** — это учебный проект для изучения создания кастомных React хуков. Здесь собраны примеры реализации различных хуков от простых до продвинутых, с подробными комментариями и практическими применениями.

## 🎯 Цели проекта

- 📚 **Изучить принципы** создания кастомных React хуков
- 🛠️ **Попрактиковаться** в написании хуков разной сложности
- 🧠 **Понять паттерны** и лучшие практики
- 📝 **Создать справочник** полезных хуков для будущих проектов

## 🚀 Технологии

- **React 19.1.0** — основная библиотека
- **Next.js 15.5.4** — фреймворк с Turbopack
- **TypeScript** — строгая типизация
- **ESLint** — линтинг кода

## 📂 Структура проекта

```
src/
├── hooks/               # Кастомные хуки
│   ├── useToggle.tsx   # Переключатель состояний
│   ├── useInput.tsx    # Управление инпутами
│   ├── usePrevious.tsx # Предыдущее значение
│   ├── useLocalStorage.tsx # Синхронизация с localStorage
│   ├── useDebounce.tsx # Задержка выполнения
│   ├── useInterval.tsx # Безопасный setInterval
│   ├── useFetch.tsx    # Загрузка данных
│   ├── useDomPath.tsx  # Поиск CSS селекторов элементов
│   └── useLearn.tsx    # Хук для обучения
├── hooks-ideas.txt     # Идеи и план изучения
└── app/                # Next.js приложение
```

## 🎯 Реализованные хуки

### 🟢 Уровень 1 — Простые состояния

- **✅ useToggle** — Переключатель true/false с дополнительными методами
- **✅ useInput** — Управление значением и onChange для форм
- **✅ usePrevious** — Хранение предыдущего значения переменной

### 🟡 Уровень 2 — Работа с эффектами

- **✅ useLocalStorage** — Синхронизация состояния с localStorage
- **✅ useDebounce** — Задержка выполнения (полезно для поиска)
- **✅ useInterval** — Безопасный setInterval для React

### 🔴 Уровень 3 — Продвинутые

- **✅ useFetch** — Загрузка данных с обработкой loading/error
- **✅ useDomPath** — Поиск и генерация CSS селекторов элементов DOM
- **⏳ useOnClickOutside** — Закрытие по клику вне элемента
- **⏳ useWindowSize** — Отслеживание размера окна

### 🚀 Уровень 4 — Сложные

- **⏳ useInfiniteScroll** — Бесконечная прокрутка
- **⏳ useKeyboard** — Обработка горячих клавиш
- **⏳ useAsync** — Универсальный хук для async операций

## 💡 Примеры использования

### useToggle
```tsx
const [isOpen, toggle, setTrue, setFalse] = useToggle(false);

return (
  <div>
    <button onClick={toggle}>
      {isOpen ? 'Закрыть' : 'Открыть'}
    </button>
    {isOpen && <div>Контент модалки</div>}
  </div>
);
```

### useFetch
```tsx
const { data, loading, error, refetch } = useFetch<User[]>('/api/users');

if (loading) return <div>Загрузка...</div>;
if (error) return <div>Ошибка: {error.message}</div>;

return (
  <div>
    {data?.map(user => <div key={user.id}>{user.name}</div>)}
    <button onClick={refetch}>Обновить</button>
  </div>
);
```

### useDebounce
```tsx
const [searchTerm, setSearchTerm] = useState('');
const debouncedSearchTerm = useDebounce(searchTerm, 300);

useEffect(() => {
  if (debouncedSearchTerm) {
    // Выполняем поиск только после задержки
    searchAPI(debouncedSearchTerm);
  }
}, [debouncedSearchTerm]);
```

### useDomPath
```tsx
const { findDomPath, findElementByPath } = useDomPath();
const containerRef = useRef<HTMLDivElement>(null);

const handleClick = (event: React.MouseEvent) => {
  if (containerRef.current && event.target instanceof Element) {
    const cssPath = findDomPath(containerRef.current, event.target);
    console.log('CSS путь:', cssPath); // "div.card > h3.title"
    
    // Найдем элемент обратно по пути
    const foundElement = findElementByPath(containerRef.current, cssPath);
  }
};
```

## 🛠️ Установка и запуск

```bash
# Клонирование репозитория
git clone <repo-url>
cd learnhooks

# Установка зависимостей
npm install

# Запуск в режиме разработки
npm run dev

# Сборка проекта
npm run build

# Линтинг
npm run lint
```

## 📚 Рекомендуемый порядок изучения

1. **Начните с простых:** `useToggle`, `useInput`, `useLocalStorage`
2. **Изучите эффекты:** `useDebounce`, `useInterval`
3. **Переходите к сложным:** `useFetch`, `useAsync`
4. **Практикуйтесь:** создавайте свои хуки для реальных задач

## 🎓 Полезные советы

- ✅ Всегда называйте хуки с приставки `use`
- ✅ Используйте TypeScript для строгой типизации
- ✅ Добавляйте обработку ошибок и граничных случаев
- ✅ Тестируйте каждый хук в реальных компонентах
- ✅ Изучайте исходники популярных библиотек хуков
- ✅ Следуйте правилам React Hooks

## 🤝 Вклад в проект

Этот проект создан в учебных целях. Если у вас есть идеи для новых хуков или улучшений существующих — создавайте Issues или Pull Requests!

## 📄 Лицензия

MIT License — используйте код свободно для обучения и практики.
