const db= require('../models/')

function addCategory(req,res,model){
    body=req.body;
    var obj=new model(body);

    //console.log("Request Auth Data in add Category ----",req.authData);
    if(req.authData.group_type == "admin")
    {
        obj.save(function (err, result) 
        {    
            if(err)
            {
                //console.log(err.errmsg);
                res.status(404);
                res.send(err.errmsg)
           }
            else{
                //console.log(result);
                res.status(200).json({result});
            
            }
        });
    }
    else{
        console.log("Permission Denied!....");
        res.status(401).json({status:"401",Message:'Permission Denied'});
    }
        
}

function listCategory(req,res,model){

   // console.log("Request Auth Data in add Category ----",req.authData);

    if(req.authData.group_type == "admin")
    {
        db.Category.aggregate([
            { "$match": {  } },
            { "$limit": 5},
            { "$skip": 0},
        ]).exec((err, locations) => {
            if (err){ 
                res.status(404);
                res.send(err);
            }
            else{
                res.status(200);
                res.json(locations)
            }
        })
    }

    else if(req.authData.group_type == "user")
    {
        db.Product.aggregate([

            {
               $lookup:
                 {
                   from: "categories",
                   localField: "product_id",
                   foreignField: "_id",
                   as: "inventory_docs"
                 }
            },
            { $unwind : "$inventory_docs" },
        //    {$group: {
        //     _id: "$product_id",
        //     name : { $first: '$name' },
        //     stock : { $first: '$stock' },
        //     opening_stock : { $first: '$opening_stock' },
        //     price : { $first: '$price' },
        //     count: { $sum: 1 }
        //  }},
          

        //    { $skip: 0},
          //  { $limit : 5}
         ]).exec((err, locations) => {
            if (err){ 
                res.status(404);
                res.send(err);
            }
            else{
                res.status(200);
                res.send(locations)
            }
        });
    }

    else{
        console.log("Permission Denied!....");
        res.status(401).json({status:"401",Message:'Permission Denied'});

    }
        
}

module.exports={
    addCategory,
    listCategory
}