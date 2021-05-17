FROM node:alpine

WORKDIR /usr/src/app

#COPY code/package.json .
#COPY code/package-lock.json .
COPY code .

RUN npm install

#COPY . .

EXPOSE 4200

#RUN cd ./code
CMD /usr/src/app/node_modules/.bin/ng serve --host 0.0.0.0 --disableHostCheck
