var connect = require('connect'),
    serveStatic = require('serve-static');

var app = connect();

app.use(serveStatic("/js"));
app.listen(80);
