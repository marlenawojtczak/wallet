# Build and compile frontend
FROM node:18 as build_stage

RUN echo "Europe/Warsaw" > /etc/timezone \
 && ln -fns /usr/share/zoneinfo/Europe/Warsaw /etc/localtime

WORKDIR /app

COPY frontend/package.json /app
RUN npm install

COPY ./frontend /app

RUN npm run build

# Add Frontend build to Nginx
FROM nginx:1.24
COPY --from=build_stage /app/build/ /usr/share/nginx/html

COPY services/frontend/nginx.conf /etc/nginx/nginx.conf
COPY services/frontend/sites_enabled/wallet.conf /etc/nginx/sites-enabled/wallet.conf
RUN rm /etc/nginx/conf.d/default.conf
