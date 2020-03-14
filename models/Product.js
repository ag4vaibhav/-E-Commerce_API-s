var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var ProductSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    image:{
        type: [String]
    },
    price:{
        type:Number,
        required:true
    },
    opening_stock:{
        type:Number,
        default: 0,
        required:true
    },
    stock:{
        type:Number,
        required:true
    },
    closing_stock:{
        type:Number,
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

    product_id: { type: Schema.Types.ObjectId,
        ref: 'Category',
        required:true }

    
});

Product=mongoose.model('Product',ProductSchema);
module.exports=Product