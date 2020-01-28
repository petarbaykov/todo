
# Todo List App

За създаването на това приложение използваме за база това repository https://github.com/petbaik/vue-js-boilerplate. В него имаме настроен webpack, babel, vuejs, минимизиране на стилове и файлове. 
Използваме VueJS чрез npm пакет, защото смятам, че това е по удачния гъвкав вариант за изграждане на приложения с VueJS.

## Създаване на структурата на проекта
Основните файлове, които ще създадем за нашия проект са:
```
src
│   index.html
│   index.js
|   App.vue
└───components
│   │   Button.vue
│   │   Card.vue
│   │   Input.vue
│   │   List.vue
│   │   ListItem.vue
│   │   Textarea.vue
└───pages
│   │   Home.vue
└───router
│   │   index.js
│   │   routes.js
```
### index.html
Всяко Vue приложение има нужда от основен html файла в който да регистрираме vue компонентите. Създаваме index.html с основна html структура - html, body, head, tille. Важното в случая е създаването на div с id - app. В този div ще заредим нашето Vue приложение. 


### index.js
В index.js създаваме инстнция на Vue, в този файл зареждаме VueJs фреймуърка. Зареждаме и някои от основните стилове. Използваме bootstrap. 

### App.vue
Това е главния компонент на приложението в него регистрираме рутера на приложението. 
