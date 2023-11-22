# Add Frontend build to Nginx
FROM nginx:1.24

COPY services/nginx/nginx.conf /etc/nginx/nginx.conf
COPY services/nginx/sites_enabled/wallet.conf /etc/nginx/sites-enabled/wallet.conf
RUN rm /etc/nginx/conf.d/default.conf
