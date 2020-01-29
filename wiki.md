
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

### Компоненти
С цел преизползване на html блокове ще създадем няколко компонента. Тези компоненти ще използваме на няколко места. Компонентите са Button, Card, Input, List, ListItem, Textarea. Създаваме ги в папката components. Всеки компонент е в отделен файл с разширение .vue. HTML-a на всеки компонент е в template таг. Този template таг може да има само един директен наследник. Имаме и script таг в който пишем функционалности на компонента. Всеки компонент трябва да се експортне с export default. Пример за vue компонента Input
```vue
<template>
    <div class="form-group">
        <label> {{ label }} </label>
        <input :type="type" class="form-control" :class="invalid ? 'is-invalid' : ''" ref="input" @input="update" :value="value">
    </div>
</template>

<script>
export default {
    props:{
        label: String,
        type: String,
        invalid: Boolean,
        value: String
    },
    methods: {
        update() {
            this.$emit('input', this.$refs.input.value)
        }
    }
}
</script>

```

## Vue Router (Рутер)
В router/index.js създаваме инстанция на рутера, а в router/routes.js регистрираме пътищата в приложението. 
routes.js файла изглежда така:
```js
import Home from '../pages/Home.vue'
export default [
    {
      path: '/',
      name: 'home',
      component: Home,
      props: route => ({ query: route.query })
    }
]
```
## Home.vue
В този файл е нашата основна страница на приложението. В нея се сглобяват всички компоненти на приложенито. В нея се извършва и функционалността на приложнието, а именно до добавяне на задачи. Добавените задачи не се съхраняват в с стейта на тази страница, а използване Vue Store. Във всеки vue файла е допустимо добавянето на стилове в style таг. В Home.vue сме добавили всикич създадени компоненти от папката components. Добавят се чрез JavaScript импорт. Част от кода нa Home.vue:
```vue
<script>
import Card from '../components/Card.vue'
import Button from '../components/Button.vue'
import Input from '../components/Input.vue'
import Textarea from '../components/Textarea.vue'
import List from '../components/List.vue'
import ListItem  from '../components/ListItem.vue'

export default {
  components: {
    Card,
    Button,
    Input,
    Textarea,
    List,
    ListItem
  },
  
}
</script>
```
