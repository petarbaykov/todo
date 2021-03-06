Vue.js Framework
===


VueJS е JavaScript фреймуърк с отворен код използван за разработването на интерактивни уеб интерфейси. Той е един от известните фреймуърк системи използвани за опростяване на уеб разработката. VueJS се фокусира на изгледа. Лесно може да се интегрира в голям проект за front-end разраборка без проблеми. Инсталацията на VueJs е много лесна. Всеки разработчик лесно може да разбере и създаден интерактивни уеб интерфейски за нула време. VueJS е създаден от Evan You, бивш служител на Google. Първата версия на VueJS e пусната Февруари 2014. Има над 156 хиляди звезди в Github, правейки го много популярен


# Основни характеристики

## Virtual DOM
VueJS използва виртуален DOM, който е използван и от други фреймуърк системи като React, Ember и др. Промените не се правят по DOM, вместо това се създава копие на DOM, който е представен под формата на JavaScript структури от данни. Когато се направят промени, те се правят по JavaScript структурите и след това се сравняват с оригиналните структури. Финалните промени се обновяват в истинския DOM, който потребителя вижда. Това е добро от страна на оптимизация и промените могат да бъдат правени доста бързо

## Компоненти
Компонентите са една от важните характеристики на VueJS, която помага да се създадат персонализирани компоненти, които могат да бъдат преизползвани в HTML.

## Директиви
VueJS има вградени директиви като v-if, v-else, v-show, v-on, v-bind и v-model, които се използват за извършване на различни действия във фронт-енда.

## Data binding
Функцията за свързване на данни помага да се манипулират или присвояват стойности на HTML атрибути, да се променя стила, да се присвояват класове с помощта на директива, наречена v-bind, налична с VueJS.

## Routing
Навигацията между страниците се извършва с помощта на vue-router.

# Предимства
## Малък
Успеха на всеки JavaScript фреймуърк зависи от неговия размер. Колкото по-малък е размер, толкова повече ще бъде използван. Едно от най-големите предимства на VueJS е малкият размер. Размер на фреймуърка е 18-21KB. 

## Лесен за разбиране
Друга причина за популярността на този фреймуърк е че е лесен за разбиране. Има добре дефиниране архитектура за обработка на данните, life-cycle методи и разделяне на персонализираните методи. Има също страхотни функционалностни като watchers, computed properties и дириктиви, които правят разработката на съвременно уеб приложениет много лесно.

## Лесна интеграция
VueJS също популярен сред разработчиците защото ги улеснява при интеграцията със съществуващо приложение. Това е защото е базиран на JavaScript и може да бъде интегриран в други приложение направени с JavaScript и не само.

## Гъвкавост
Позволява на разработчиците да пишат своите темплейти в HTML фаул, JavaScript файл и чист JavaScript файл използвайки виртуални дървета. Лесно може да се добавят инструменит като темплейт енджини, CSS препроцесори, Typescript и други.

## 2-Way Data Binding
Vue.js улеснява двупосочната комуникация поради своята MVVM архитектура, което прави доста лесна работа с HTML блокове. Изглежда много близо до Angular.js, което също ускорява HTML блоковете. Тази функция се нарича и двупосочно обвързване на данни (2-Way Data Binding), което означава, че каквито и промени да направите във вашия потребителски интерфейс, се предадат на вашите данни и промените, направени в данните, се отразяват във вашия потребителски интерфейс. Vue.js се нарича също Реактивен, защото реагира всеки път, когато данните ви се променят. Това е много различно в сравнение с библиотеки като React.js, която поддържа само еднопосочна комуникация.

## Страхотни инструменти
Vue.js разполага с чудесен инструментариум. Новият Vue CLI, 3.x, може би е един от най-добрите инструменти за Javascript Framework. Той ви позволява да стартирате нов проект с неща като маршрутизация (Routing), State Store, Linting, UNIT тестване, CSS препроцесори, Typescript, PWA и др.  Vue CLI предоставя и потребителски интерфейс за управление на вашите проекти.
Създаване на ново приложение
```
vue create app-name
```

## Най-доборото от двата свята
VueJS е вдъхновен от два много добри уеб фреймуърк - React и Angular. Той съчетава най-добрите неща и от двата фреймуърка. Например той е като React, който използва компоненти и Virtual DOM, което го прави невероятно бърз. Като Angular той има директиви и 2-Way Data Binding.

# Недостатъци
## Липса на подкрепа от големи проекти
Vue.js все още е млада фреймуърк система. Размерът на неговата общност и екип за разработка все още е несравним с Angular. Нито се радва на финансова подкрепа от големи предприятия. За да бъде възприета в мащабните проекти, технологията трябва да бъде стабилна и силно подкрепена, така че проблемите да могат да бъдат решени бързо. Въпреки че Vue няма толкова много проблеми с това и дори има търсене от предприятия като IBM и Adobe, той все още се използва в сравнително малки проекти.

## Риск от свръх гъвкавост
Споменахме за гъвкавост, което е спорно качество по отношение на голям проект. Предоставянето на твърде много възможности за разработка може да доведе до философски различни подходи за програмиране, които да се срещат в един екип. 

## Ограничени ресурси
Въпреки че екосистемата е доста широка и има всички необходими инструменти, за да започнете да разработвате с Vue, тя все още не е толкова голям, колкото React или Angular. За да бъдем по-точни, просто сравнете броя на плъгините, налични за React и Vue.js: Разликата е в стотици. Съществуващите плъгини, които могат да се използват с други фреймуърк системи, често не се поддържат, но това може да е само въпрос на време.

# Инсталиране
## Чрез директна употреба на script таг
Просто изтеглете и включете със script таг. Vue ще бъде регистриран като глобална променлива.

## CDN

За целите на прототипирането или обучението можете да използвате най-новата версия с:
```html
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
```
За production среди се препоръчва свързването с конкретна версия, за да се избегнат проблеми с по-нови версии
```html
<script src="https://cdn.jsdelivr.net/npm/vue@2.6.11"></script>
```
## NPM
NPM е препоръчителният метод за инсталиране при изграждане на големи приложения с Vue. Той се съчетава чудесно с модулни пакети като Webpack или Browserify.
```shell
$ npm install vue
```

# Известни копании и проекети, които използват Vue
Част от тези компании използват Vue в малки отделните компоненти от техните продукти или са изградени изцяло с Vue
##### Facebook
##### Netflix
##### Adobe
##### Xiaomi
##### Alibaba
##### WizzAir
##### Laracasts
##### GitLab
##### Behance
