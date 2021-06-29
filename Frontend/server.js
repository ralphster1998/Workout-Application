const express = require('express');
const next = require('next');

const port = 3000;
const dev  = process.env.NODE_ENV !== 'production';

// use next and pass our dev process
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
    .then(() => {
        /*
        once server is ready, we are going to create
        a server with express
        once files are built, then create express
        server. 
        */
        const server = express();

        // Routing to page, we gonna create that
        server.get('/page2', (req, res) =>{
            return app.render(req, res, '/page2');
        })

        server.get('/page3', (req, res) =>{
            return app.render(req, res, '/ohyeah');
        })

        server.get('*', (req, res) =>{
            return handle(req, res);
        })

        server.listen(port, (err) => {
            if (err) throw err;
            console.log(`Ready on http:://localhost:${port}`);
        })
    })