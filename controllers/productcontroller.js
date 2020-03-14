const db= require('../models/')

function addProduct(req,res,model){
    body=req.body;
    body.image=images;

  //  console.log("Request Auth Data in add Category ----",req.authData);
  //  console.log("In add Product",body,"Images",res.locals.images);
    
    var obj=new model(body);
     
    if(req.authData.group_type == "admin")
    {
        obj.save(function (err, result) 
        {    
            if(err)
            {
                //console.log(err);
                res.status(404);
                res.send(err);    
            }
            else
            {
             //   console.log(result);
                res.status(200);
                res.json(result); 
            }
        });
        
    }
    else{
        console.log("Permission Denied!....");
        res.status(401).json({status:"401",Message:'Permission Denied'});
    } 
       
}

module.exports={
    addProduct
}



