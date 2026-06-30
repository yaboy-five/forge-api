# use official Node image
FROM node:18

# set working directory inside container
WORKDIR /app

# copy package files
COPY package*.json ./

# install dependencies
RUN npm install

# copy rest of the project
COPY . .

# expose API port
EXPOSE 3000

# start the server
CMD ["npm", "start"]