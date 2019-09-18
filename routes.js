const router = require('./router/index');
const app = require('express').Router();


function routes () {

    Object.keys(router).forEach(key => {
                const route = `/${key}`;
                app.use(route, router[key]);
    });
    return app;
}

module.exports = routes();
