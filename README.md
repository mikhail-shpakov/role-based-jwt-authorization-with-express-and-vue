# Авторизация на основе ролей с использованием Express и Vue
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)
![Heroku](https://heroku-badge.herokuapp.com/?app=role-based-auth-express-vue)

:ru: by Mikhail Shpakov

Пример простого клиент-серверного [SPA](https://ru.wikipedia.org/wiki/%D0%9E%D0%B4%D0%BD%D0%BE%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%87%D0%BD%D0%BE%D0%B5_%D0%BF%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5)
и [PWA](https://web.dev/progressive-web-apps/) приложения,
которое реализует авторизацию на основе [JWT](https://jwt.io/)
с разделением прав пользователей в зависимости от их роли (пользователь/администратор)
и демонстрирует классические [CRUD](https://ru.wikipedia.org/wiki/CRUD) операции.

Имплементация JWT авторизации выполнена в полном соответствии с
[описанием](https://gist.github.com/zmts/802dc9c3510d79fd40f9dc38a12bccfc)
и реализует работу с Access и Refresh токенами, а также мультилогин.

:tada: [Демо](https://role-based-auth-express-vue.herokuapp.com/)

:books: [Swagger](https://role-based-auth-express-vue.herokuapp.com/swagger/)

:hammer: [Используемые технологии и инструменты](#tools)

:wrench: [Локальный запуск проекта](#dev)

:rocket: [Деплой на Heroku](#deploy)

## <a name="tools"></a>Используемые технологии и инструменты

#### Frontend
- [Vue](https://vuejs.org/)
- [Vue Router](https://router.vuejs.org/)
- [Vuex](https://vuex.vuejs.org/) +
[vuex-persistedstate](https://github.com/robinvdvleuten/vuex-persistedstate)
- [Pug](https://pugjs.org/api/getting-started.html)
- [Sass](https://sass-lang.com/)
- [Buefy](https://buefy.org/)
- [Vue-cli](https://cli.vuejs.org/)
([Webpack](https://webpack.js.org/),
[Babel](https://babeljs.io/),
[Postcss](https://postcss.org/))
- [Axios](https://github.com/axios/axios)
- [Jest](https://jestjs.io/)
- [Eslint](https://eslint.org/) ([standard style](https://standardjs.com/))
- [Fingerprintjs2](https://github.com/Valve/fingerprintjs2)
- [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)
- [Иконки mdi](https://materialdesignicons.com/)
- Графика [Undraw](https://undraw.co/)

#### Backend
- [Express](https://expressjs.com/)
- [express-jwt](https://github.com/auth0/express-jwt) +
[express-jwt-permissions](https://github.com/MichielDeMey/express-jwt-permissions)
- [sequelize](https://sequelize.org/) + [sequelize-cli](https://github.com/sequelize/cli)
- [Swagger](https://swagger.io/) ([swagger-ui-express](https://github.com/scottie1984/swagger-ui-express))
- [Jest](https://jestjs.io/) + [supertest](https://github.com/visionmedia/supertest)
- [Eslint](https://eslint.org/) ([standard style](https://standardjs.com/))
- [Celebrate](https://github.com/arb/celebrate) ([Joi](https://github.com/hapijs/joi/tree/master))
- [Helmet](https://helmetjs.github.io/) +
[cors](https://github.com/expressjs/cors) +
[rate-limit](https://github.com/nfriedly/express-rate-limit)

#### Инфраструктура
- [Heroku](https://www.heroku.com/)
- [PostgreSQL](https://www.postgresql.org/)
(при публикации на [Heroku](https://www.heroku.com/) в качестве БД используется
[сервис Postgres](https://www.heroku.com/postgres) с бесплатным тарифом)
- [Adminer](https://www.adminer.org/)
- [Docker](https://www.docker.com/) + [Docker Compose](https://docs.docker.com/compose/)
(используются при локальной разработки для развёртывания PostgreSQL и Adminer)

## <a name="dev"></a>Локальный запуск проекта

Для разработки используется
[Webpack Dev Server](https://github.com/webpack/webpack-dev-server) для `Frontend`
и [nodemon](https://nodemon.io/) для `Backend`. 

1. **Загрузка проекта на локальную машину**

    ```
    git clone https://github.com/mikhail-shpakov/role-based-jwt-authorization-with-express-and-vue
    ```

2. **Установка зависимостей**

    ```
    npm ci
    ```

    Использование `npm ci` вместо `npm i` позволит гарантировать корректные версии устанавливаемых `npm` пакетов,
    так как они будут взяты из `package-lock.json`.  
    Зависимости требуется установить отдельно для `frontend` и для `backend` из их поддиректорий.

3. **Запуск Docker контейнеров с [PostgreSQL](https://www.postgresql.org/) и [Adminer](https://www.adminer.org/)**

    Для локальной разработки используется [Docker](https://www.docker.com/) и
    [Docker Compose](https://docs.docker.com/compose/). Если они у вас ещё не установлены,
    то сперва установите их, воспользовавшись какой-либо инструкцией, например,
    [официальной](https://docs.docker.com/get-docker/).

    Для запуска контейнеров выполните из директории `/server` команду: 

    ```
    docker-compose up
    ```

   После этого [PostgreSQL](https://www.postgresql.org/) будет доступна на `localhost:5432`.

   Для администрирования можно использовать [Adminer](https://www.adminer.org/),
   который станет доступен в браузере на `http://localhost:9090/`.

   Данные для входа:

   ```
   Движок: PostgreSQL
   Сервер: db // имя контейнера PostgreSQL
   Имя пользователя: postgresql
   Пароль: dev_pass
   База данных: // оставьте это поле пустым
    ```

4. **Создание БД и запуск миграций**

   Для начала разработки небходимо создать базу данных,
   добавить таблицы в соответствии с [SQL схемой](#sql_scheme)
   и наполнить эти таблицы тестовыми данными.

   Для автоматизации этого процесса в приложении реализованы механизмы миграций, которые можно запустить
   с помощью [sequelize-cli](https://github.com/sequelize/cli).

   Инструкцию по установки и подробное описание можно найти в официальном [Github репозитории](https://github.com/sequelize/cli).

   Для запуска миграций выполните из директории `/server` следующие команды:

   ```
   npx sequelize-cli db:create
   npx sequelize-cli db:migrate
   npx sequelize-cli db:seed:all 
   ```

5. **Запуск `backend` сервера для разработки**

    В качестве `Backend` сервера для разработки используется [nodemon](https://nodemon.io/). 

    Для его запуска выполните из директории `/server`:

   ```
   npm run dev
   ```

    Сервер будет доступен на `http://localhost:8081/`.

    Описание всех доступных эндпоинтов можно посмотреть на `http://localhost:8081/swagger`

    Во время разработки изменения в файлах будут отслеживаться автоматически,
    при этом будет вызываться линтер и сервер будет перезапускаться.

    Также для `Backend` из директории `/server` доступны следующие команды:

   ```
   npm run start // запуск проекта при деплое на Heroku
   npm run lint // ручной запуск линтера
   npm run test:unit // запуск unit тестов
   ```

6. **Запуск локального `Frontend` сервера**

    В качестве `Frontend` сервера для разработки используется
    [Webpack Dev Server](https://github.com/webpack/webpack-dev-server).

    Для его запуска выполните из директории `/client`:

    ```
    npm run serve
   ```

    Также, как и для `Backend`, во время разработки изменения в файлах будут отслеживаться автоматически,
    будет вызываться линтер и сервер будет перезапускаться.

    Для `Frontend` из директории `/client` доступны следующие команды:

    ```
    npm run build // сборка приложения Vue для развёртывания на production
    npm run lint // ручной запуск линтера
    npm run test:unit // запуск unit тестов
    ```

#### <a name="sql_scheme"></a> SQL схема БД

![SQL схема БД](https://cdn1.savepice.ru/uploads/2020/4/7/768657c7d5009b2915cdff49efbd9ce3-full.png)

SQL схема была разработана с помощью [dbdiagram.io](https://dbdiagram.io).

Вы можете склонировать [схему этого проекта](https://dbdiagram.io/d/5e8725884495b02c3b8933e8).

## <a name="deploy"></a>Деплой на Heroku

Деплой на [Heroku](https://www.heroku.com/) в общем случае
не представляет никаких сложностей и прекрасно описан в
[официальном руководстве](https://devcenter.heroku.com/articles/git). 

Остановимся на специфичных моментах, характерных для этого конкретно приложения:

1. В качестве БД требуется добавить к приложению, которое вы создадите на Heroku, сервис
[Heroku Postgres](https://www.heroku.com/postgres), сделать это можно из
[маркета](https://elements.heroku.com/addons/heroku-postgresql).

2. Для того, чтобы приложение могло подключиться к базе данных,
на Heroku требуется добавить переменные окружения.
Инструкцию, как это сделать, можно найти [здесь](https://devcenter.heroku.com/articles/config-vars).

    Список переменных окружений, которые необходимо добавить:

    ```
   DATABASE_USER
   DATABASE_PASS
   DATABASE_NAME
   DATABASE_HOST
   ```

   Эти переменные должны быть заданы, как ваши данные для подключения к
   [Heroku Postgres](https://www.heroku.com/postgres).

3. Для того, чтобы можно было использовать один проект Heroku для одновременной публикации
    и `Frontend` и `Backend` требуется настроить `Backend` сервер node.js таким образом,
    чтобы он отдавал мог отдавать при запросе статичное Vue приложение.

    Подробнее о таком варианте работы можно узнать в [этом репозитории](https://github.com/mars/heroku-cra-node).

    Для данного приложения настройка уже выполнена и дополнительных действий не требуется.

4. У бесплатного аккаунта Heroku есть 2 особенности:

    1. при отсутствии входящих запросов в течении какого-то времени (как правило, `10-30` минут),
    ваше приложение "засыпает" и при следующем запросе потребуется относительно много времени,
    чтобы оно проснулось (обычно в пределах `10-40` секунд).

    2. на бесплатном тарифе в месяц выделяется `550` машинных часов на аккаунт
    (вне зависимости от количества приложений),
    которые может непрерывно работать приложение,
    по истечению которых приложение полностью отключается до конца месяца.
    Но поскольку в месяце `31 * 24 = 744` часов,
    то получается, что наше приложение в принципе не может работать `24/7`.

    Вариантов решения здесь тоже два.

    1. Если вам не требуется круглосуточная работа, а приложение служит для демострационных целей,
    то будет достаточно, чтобы оно не "засыпало" только в течении основной части дня,
    а ночью могло "засыпать".

        Для реализации такого алгоритма работы необходимо на любом устройстве,
        которое у вас работает в течении всего дня или круглосуточно
        (идеальный вариант - какой-нибудь сервер, но и домашний компьютер подойдёт),
        настроить запросы `curl` с помощью `cron` к вашему приложению раз в 10 минут.
        
        Пример такого запроса:

        ```
       0/10 7-12 * * *  user  curl https://role-based-auth-express-vue.herokuapp.com/login
       ```

        В моём случае я использовал именно этот вариант.

    2. Если вам всё таки нужно, чтобы приложение на бесплатном аккаунте работало `24/7`,
    то можно привязать банковскую карту к аккаунту и тогда количество доступных для аккаунта
    часов будет увеличенно до `1000`, чего уже хватит для круглосуточной работы.

        Для того, чтобы избежать "засыпания" приложения, можно воспользоваться каким-нибудь
        бесплатным сервисом для мониторинга web-приложений,
        который раз в какое-то время (например, раз в 10 минут) будет посылать http запросы,
        тем самым приложение не будет засыпать.

        Таким сервисом может быть, например, [UptimeRobot](https://uptimerobot.com/).
