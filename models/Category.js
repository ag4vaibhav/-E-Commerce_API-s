var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var CategorySchema = new Schema({
    category_name:{
        type:String,
        required:true,
        index:true,
        unique:true
    },
    status:{
        type: String,
        enum: ["Active",'Freezed','Deleted'],
        default: "Active"
    },
    created_at:{
        type: Date,
		default:Date.now()
    },
    updated_at:{
        type: Date    
    },

    
});

Category=mongoose.model('Category',CategorySchema);
module.exports=Category