# two-spa-same-server

This is just an example of how you could run two web applications in the same server.

The React app is just a plain create-react-app, and the Angular is just the default ```ng new```. 


Note that I don't think this is a greate way to make this.
It can be useful to hack something together quickly tho.

### Run

```npm start```

cd into both apps and run them

## Deploy

The ```npm run build``` command will build both React and Angular

Then, ```npm start``` will start a server

Angular will be served on route /login, and react on /