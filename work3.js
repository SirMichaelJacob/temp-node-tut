const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write(`<h2>Welcome to my home page</h2>`);
    }
    if (req.url === '/about') {
        res.write(
            `<h2>About us Page</h2>
            <p>Learn more</p>
            `
        );
    }
    res.write(`<h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for.</p>
    <a href="/">Go to homepage</a>
    `);

});

server.listen(8514);