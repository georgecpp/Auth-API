const router = require('express').Router();
// MAKE IT PRIVATE
const verify = require('./verifyToken');

router.get('/',verify,(req,res) => {
    res.send(req.user);
});

module.exports = router;