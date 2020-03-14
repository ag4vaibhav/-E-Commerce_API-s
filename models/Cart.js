var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var CartSchema = new Schema({
    product_id:{
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required:true
    },
    quantity:{
        type: String,
        required:true
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
        type:Date
    },
    user_id:{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required:true 
    }
    
});

//UserSchema.index({ email: 1, password: 1 }, { unique: true });
Cart=mongoose.model('Cart',CartSchema);
module.exports=Cart
