const articlesRequest = require('../requests/articlesRequest');

const getIdFromReq = (req) => {
    return req.params.id;
};

const getArticleFromReq = (req) => {
    return {title: req.body.title, text: req.body.text, source: req.body.source, author: req.body.author};
};

module.exports = function (app, db) {
    app.get('/articles', (req, res) => {
        articlesRequest.getAllArticles(db)
            .then(response => {
                res.send(response);
            })
            .catch(error => {
                res.send(error);
            });
    });

    app.get('/articles/:id', (req, res) => {
        const id = getIdFromReq(req);

        articlesRequest.getArticle(db, id)
            .then(response => {
                res.send(response);
            })
            .catch(error => {
                res.send(error);
            });
    });

    app.post('/articles', (req, res) => {
        const article = getArticleFromReq(req);

        articlesRequest.createArticle(db, article)
            .then(response => {
                res.send(response);
            })
            .catch(error => {
                res.send(error);
            });
    });

    app.delete('/articles/:id', (req, res) => {
        const id = getIdFromReq(req);

        articlesRequest.removeArticle(db, id)
            .then(response => {
                res.send(response);
            })
            .catch(error => {
                res.send(error);
            });
    });

    app.put('/articles/:id', (req, res) => {
        const id = getIdFromReq(req);
        const article = getArticleFromReq(req);

        articlesRequest.updateArticle(db, id, article)
            .then(response => {
                res.send(response);
            })
            .catch(error => {
                res.send(error);
            });
    });
};