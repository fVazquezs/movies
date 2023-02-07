FROM node:18-alpine


WORKDIR /opt/generate/
COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

RUN ls


CMD ["npm", "run", "start:docker"]