// api/dogs.js
const router = require('express').Router();

// matches GET requests to /api/dogs/
router.get('/', function (req, res, next) { 
    /* etc */
});

// matches POST requests to /api/dogs/
router.post('/', function (req, res, next) { 
    /* etc */
});

// matches PUT requests to /api/dogs/:dogId
router.put('/:catId', function (req, res, next) { 
    /* etc */
});

// matches DELETE requests to /api/cats/:dogId
router.delete('/:catId', function (req, res, next) { 
    /* etc */
});

module.exports = router;

