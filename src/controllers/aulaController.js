const mongoose  = require('mongoose');

const Aula = mongoose.model('Aula');

module.exports = {
   async index(req,res){
      const { page = 1 } = req.query;
      const aulas = await Aula.paginate({},{page, limit: 5});
      return res.json(aulas);
   },

   async create(req, res){
      const aula = await Aula.create(req.body);
      return res.json(aula);
   },

   async showAula(req,res){
    const aula = await Aula.findById(req.params.id);
    return res.json(aula); 
   },

   async updateAula(req,res){
      const aula = await Aula.findByIdAndUpdate(req.params.id, req.body,{new: true});
      return res.json(aula); 
   },

   async destroyAula(req,res){
      const aula = await Aula.findByIdAndRemove(req.params.id);
      return res.send();     
   }
  
}; 
