FROM nginx:stable-alpine
EXPOSE 80
COPY ./ /usr/share/nginx/html