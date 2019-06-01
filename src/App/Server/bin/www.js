
import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

const app = express();
const port = process.env.SERVER_PORT || 5000;

app.get('/', (req, res) => res.send(ReactDOMServer.renderToString(<h1>Hi, I'm server side rendered!</h1>)));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))