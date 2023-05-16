# Image that we want to build from
FROM node
# Create app directory
WORKDIR /usr/src/app
# Install app dependencies
#COPY . /usr/src/app/
COPY . ./
# Install package-lock.json and node_modules defined in the dependencies section of the package.json file
RUN npm install
# Bundle app source
#COPY . ./
# My app binds to port 3000
EXPOSE 3000
CMD [ "node", "tasks.js" ]