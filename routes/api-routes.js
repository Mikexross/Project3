const Item = require('../backend/models/item');

module.exports = (app) => {
 app.get('api/personas', (req, res) => {
     console.log(req.params);
     res.end('Request received: get - api/item');
 });
 app.get('api/personas:id', (req, res) => {
     console.log(req.params);
     res.end('Request received: get - api/item:id');
 });
};