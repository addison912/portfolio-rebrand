FROM keymetrics/pm2:18-buster

# Bundle APP files
WORKDIR /usr/src/app
COPY build .
COPY app.js .
COPY config.js .
COPY package.json .
COPY ecosystem.json .
COPY .env.production.local .

# Install app dependencies
ENV NPM_CONFIG_LOGLEVEL warn
RUN npm install --omit=dev

# Show current folder structure in logs
# RUN ls -al -R

CMD [ "pm2-runtime", "start", "ecosystem.json" ]
