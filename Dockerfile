FROM node:10
RUN mkdir -p /user/src/app
WORKDIR  /user/src/app
COPY package.json /user/src/app
RUN npm clean cache
RUN npm install
COPY . /user/src/app
EXPOSE 6000
CMD ["npm","start"]