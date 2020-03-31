var jwt = require('jsonwebtoken');

module.exports = {
    async generate(id){
        return token = jwt.sign({ id }, process.env.SECRET, {
            expiresIn: 300 // expires in 5min
          });
    },

    async validate(req, res){
        var token = req.headers['x-access-token'];
        if (!token) {
            return res.status(401).send({ auth: false, message: 'No token provided.' });
        }
        jwt.verify(token, process.env.SECRET, function(err, decoded) {
          if (err){
            return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
          } 
          req.userId = decoded.id;
          next();
        })
    }
}
