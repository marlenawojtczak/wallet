# Add Frontend build to Nginx
FROM nginx:1.24

COPY services/nginx/nginx.conf /etc/nginx/nginx.conf
COPY services/nginx/sites_enabled/uwallet.conf /etc/nginx/sites-enabled/uwallet.conf
COPY services/nginx/sites_enabled/figma.uwallet.conf /etc/nginx/sites-enabled/figma.uwallet.conf
RUN rm /etc/nginx/conf.d/default.conf
