# этап сборки (build stage)
FROM node:lts-alpine as build-stage
WORKDIR /app
COPY /client/ /app/
COPY /nginx.conf /app/
RUN npm ci
RUN npm run build

# этап production (production-stage)
FROM nginx:stable-alpine as production-stage
RUN mkdir -p /log
COPY --from=build-stage /app/nginx.conf /etc/nginx/conf.d/nginx.conf
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
EXPOSE 443
CMD ["nginx", "-g", "daemon off;"]
