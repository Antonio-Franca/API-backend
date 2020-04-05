const mongoose  = require('mongoose');

const User = mongoose.model('User');

module.exports = {
   async index(req,res){
      const users = await User.find();
      return res.json(users);
   },
   async create(req, res){
      const users = await User.create(req.body);
      return res.json(users);
   }
};



