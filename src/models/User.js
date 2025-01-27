//Objetos do banco de dados
const mongoose = require('mongoose');


// Tentativa de gerar um hash na senha
// const bcrypt = require('bcrypt');
 
const UserSchema = new mongoose.Schema({
    name:{
        type: String,        
        required: true,
    },
    email:{
        type: String,
        unique:true,
        required: true,        
        lowercase: true,
    },

    password:{
        type:String,
        required:true,
        select: false,
    },

    createdAt:{
        type:Date,
        default:Date.now,
    }

});

// UserSchema.pre('save', async function(next){
//       const hash = await bcrypt.hash(password, 10);
//       this.password = hash;
//       next();
// });

 mongoose.model('User',UserSchema);

