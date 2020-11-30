# two-spa-same-server

This is just an example of how you could run two web applications in the same server.

The React app is just a plain create-react-app, and the Angular is just the default ```ng new```.

Note that I don't think this is a greate way to make this.
It can be useful to hack something together quickly tho.

## How it works

To run an Angular and a ReactJs application on the same website, or any two apps, for that mather, all we do is register them both on different routes on an express server.

The apps are themselves independent, and they have nothing special.

All that matters is the ```server.js```, that serves both apps build directories on different routes.

To make the deploy easier on Heroku or some other platform, we make ```npm run build``` build both applications.

### Run

```npm start```

cd into both apps and run them

## Deploy

The ```npm run build``` command will build both React and Angular

Then, ```npm start``` will start a server

Angular will be served on route /login, and react on /