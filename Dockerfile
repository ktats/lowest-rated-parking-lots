FROM node:latest

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app

ENV API_KEY='Enter Your API KEY here'

# Does your app have any dependencies that should be installed?
RUN npm install

# What port will the container talk to the outside world with once created?
EXPOSE 2000

# How do you start your app?
CMD ["npm", "run", "start-docker"]