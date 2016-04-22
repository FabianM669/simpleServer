var express = require('express');
var bodyParser = require('body-parser');

// making an instance of express
var app = express();
// express.static will take a path to the files 
// we want to serve publicly
app.use(express.static(__dirname + '/public'));

app.listen(process.env.PORT || 8000);

var tables = [];
var tablesIds = 0;
var menuItemIds = 0;
var menuItems = [
    { type: 'Apps', name: 'Guac', description: 'Fresh mashed avocado, red onion, jalapeño, cilantro, ' +
    'salt & fresh lime juice.' },
    { type: 'Apps', name: 'Chile con Queso', description: 'House blend of cheese, onions & red bell peppers.' },
    { type: 'Apps', name: 'Taquitos', description: 'Lightly fried corn tortillas stuffed with chorizo & ' +
    'carnitas, topped with a drizzle of green chile sauce & crema. Served with guacamole & salsa cruda.' }

];
var customerIds = 0;
var customers = [];

app.use(bodyParser());

/**
 * MenuItem Routes
 */

app.get('/menuItems', function (req, res) {
    var items = menuItems;
    if (req.query.type) {
        items = menuItems.filter(function (item) {
            return item.type === req.query.type;
        });
    }

    res.json(items);
});

app.post('/menuItems', function (req, res) {
    var obj = {
        id: ++menuItemIds,
        type: req.body.type || '',
        name: req.body.name || '',
        description: req.body.description || '',
        price: req.body.price || 0,
        options: req.body.options || []
    };

    menuItems.push(obj);

    res.status(201);

    res.json(obj);
});

app.delete('/menuItems/:id', function (req, res) {
    var id = parseInt(req.params.id);

    var item = menuItems.filter(function (item) {
        return item.id === id;
    })[0];

    menuItems.splice(menuItems.indexOf(item), 1);

    res.sendStatus(200);
});

/**
 * Table Routes
 */

app.get('/tables', function (req, res) {
    console.log(tables);
    res.json(tables);
});

app.post('/tables', function (req, res) {
    var obj = {
        id: ++tablesIds,
        name: req.body.name
    };

    tables.push(obj);

    res.status(201);

    res.json(obj);
});

app.put('/tables/:id', function (req, res) {
    var tableId = parseInt(req.params.id);

    var table = tables.find(function (table) {
        return table.id === tableId;
    });

    if (!table) {
        return res.sendStatus(404);
    }

    table.name = req.body.name;

    res.json(table);
});

/**
 * Customer Routes
 */

// eg. GET localhost:3000/customers
// or
// GET localhost:3000/customers?tableId=2

app.get('/customers', function (req, res) {
    var tableId = parseInt(req.query.tableId);

    var results = customers;

    if (tableId) {
        results = results.filter(function (customer) {
            return customer.tableId === tableId;
        });
    }

    res.json(results);
});

// eg. GET localhost:3000/customers/5

app.get('/customers/:id', function (req, res) {
    var customerId = parseInt(req.params.id);

    var customer = customers.find(function (customer) {
        return customer.id === customerId;
    });

    if (!customer) {
        return res.sendStatus(404);
    }

    res.json(customer);
});

app.post('/customers', function (req, res) {
    var obj = {
        id: ++customerIds,
        name: req.body.name || '',
        tableId: parseInt(req.body.tableId) || null,
        order: req.body.order || []
    };

    customers.push(obj);

    res.status(201);

    res.json(obj);
});

app.put('/customers/:id', function (req, res) {
    var customerId = parseInt(req.params.id);

    var customer = customers.find(function (customer) {
        return customer.id === customerId;
    });

    if (!customer) {
        return res.sendStatus(404);
    }

    customer.name = req.body.name;
    customer.order = req.body.order;
    customer.tableId = req.body.tableId;

    res.json(customer);
});