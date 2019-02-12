FROM node:lts-slim

COPY entrypoint.sh /sbin/

RUN chmod a+x /sbin/entrypoint.sh
ENTRYPOINT ["/sbin/entrypoint.sh"]
EXPOSE 3000

