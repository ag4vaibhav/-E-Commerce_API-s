var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var UserSchema = new Schema({
    name:{
        type:String,
        minlength: 10,
        maxlength: 20,
        required:true
    },
    email:{
        type:String,
        match: /.+\@.+\..+/,
        required:true,
        index: true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        min:10,
        index: true,
        unique: true,
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
    }
    
});

//UserSchema.index({ email: 1, password: 1 }, { unique: true });
User=mongoose.model('User',UserSchema);
module.exports=User
