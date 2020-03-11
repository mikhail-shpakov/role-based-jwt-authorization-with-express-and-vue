# Авторизация на основе ролей с использованием express и vue

## Используемые технологии и инструменты
`Frontend`:
- Vue
- Vue-cli(webpack, babel, postcss)
- Pug
- Sass
- Webpack Dev Server
- Axios
- Buefy
- Jest
- Eslint
- Иконки Mdi
- Графика Undraw

`Backend`:
- Node
- Express
- nodemon
- Jest
- supertest
- Eslint
- node-postgres (pg)
- Celebrate (Joi)
- helmet + cors + rate-limit.

`Инфраструктура`:
- Postgresql
- Adminer
- Nginx (ssllabs A+)
- Docker
- docker-compose.

## Загрузка проекта
```
git clone https://gitlab.com/mikhail.n.shpakov/timeweb-test-task.git
```

## Production

Для работы в `production` используется `Docker` и `Docker Compose`.

#### Развёртывание приложения
```
docker-compose up --build -d
```

#### Остановка приложения
```
docker-compose stop
```

## Development

Для разработки используется `webpack dev server` для `frontend` и `nodemon` для `backend`. 

Для установки зависимостей необходимо использовать:

```
npm ci
```

Это позволит гарантировать корректные версии устанавливаемых `npm` пакетов.  
Зависимости требуется установить отдельно для `frontend` и для `backend`.

### Frontend

Вcе команды должны выполняться из директории `/client`.

#### Запуск сервера с горячей перезагрузкой
```
npm run serve
```

Проверка стиля кода будет выполняться во время работы сервера в реальном времени.  
Также можно запустить проверку отдельно.

#### Проверка стиля кода
```
npm run lint
```

#### Запуск тестов
```
npm run unit:test
```

### Backend

Вcе команды должны выполняться из директории `/server`.


#### Запуск сервера с горячей перезагрузкой

Для работы `backend` необходимо подключение к базе данных:

```
npm run db
```

После этого можно запускать `backend` сервер:
```
npm run dev
```

Для администрирования базы данных используется `adminer`. Для подключения к нему запустить:
```
npm run adminer
```

После этого `adminer` будет доступен по адресу `localhost:8085`.

Также, как и для `frontend` проверка стиля кода будет выполняться во время работы сервера в реальном времени,
но возможен ручной запуск.  

#### Проверка стиля кода
```
npm run lint
```

#### Запуск тестов
```
npm run unit:test
```
