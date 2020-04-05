const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const AulaSchema = new mongoose.Schema({
    name:{
        type: String,        
        required: true,
    },

    description:{
        type: String,
        required: true,        
    },

    link:{
        type:String,
        required:true,
    },

    createdAt:{
        type:Date,
        default:Date.now,
    }

});

AulaSchema.plugin(mongoosePaginate);

mongoose.model('Aula',AulaSchema);

