FROM keymetrics/pm2:16-buster

# Bundle APP files
COPY build build/
COPY app.js .
COPY config.js .
COPY package.json .
COPY ecosystem.json .
COPY .env.production.local .

# Install app dependencies
ENV NPM_CONFIG_LOGLEVEL warn
RUN npm install --omit=dev

# Show current folder structure in logs
RUN ls -al -R

CMD [ "pm2-runtime", "start", "ecosystem.json" ]
