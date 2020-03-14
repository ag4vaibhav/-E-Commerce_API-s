const Joi = require('joi');

function schemafun(req,res,next){
    const schemas = Joi.object().keys({
        name: Joi.string().alphanum().min(5).max(22).required(),
        password: Joi.string().regex(/^[a-zA-Z0-9]{10,30}$/).required(),
        email: Joi.string().email({ minDomainAtoms: 2 }).required(),
        phone: Joi.number().trim().regex(/^[0-9]{6,15}$/).required(),
        status: Joi.string()
    });
    res.locals.schemas=schemas;
   // console.log("Middle ware 1",res.locals.schemas);
    next();
    }

module.exports={
    schemafun
}