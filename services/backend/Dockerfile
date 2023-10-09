FROM node:18

RUN echo "Europe/Warsaw" > /etc/timezone \
 && ln -fns /usr/share/zoneinfo/Europe/Warsaw /etc/localtime

WORKDIR /app

COPY backend/package.json /app
RUN npm install

COPY ./backend /app

COPY services/backend/entrypoint.sh /app

ENTRYPOINT ["bash", "entrypoint.sh"]
CMD ["npm", "start"]
