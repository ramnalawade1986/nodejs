const express = require('express');
const router = express.Router();

router.get('/test', (async (req, res, next) => {
	res.send('Test Route');
}));

router.get('/auth', (async (req, res, next) => {
	res.send('auth Route');
}));
module.exports = router;