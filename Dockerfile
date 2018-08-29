FROM nginx:stable-alpine as builder
WORKDIR '/app'
COPY . .


FROM nginx:stable-alpine
EXPOSE 80
COPY --from=builder /app/ /usr/share/nginx/html