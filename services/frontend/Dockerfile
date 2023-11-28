# Build and compile frontend
FROM node:18 as build_stage

RUN echo "Europe/Warsaw" > /etc/timezone \
 && ln -fns /usr/share/zoneinfo/Europe/Warsaw /etc/localtime

WORKDIR /app

COPY frontend/package.json /app
RUN npm install

COPY ./frontend /app

RUN npm run build
RUN npm install -g serve
CMD ["serve", "-s", "build", "-l", "4000"]
