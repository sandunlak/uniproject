const router = require("express").Router();
let Item = require("../models/item");


router.route("/add").post((req,res)=>{ //Arrow function

    const name = req.body.name;
    const startingPrice = req.body.startingPrice;
    const description = req.body.description;
    const image = req.body.image;
    const category = req.body.category;



    const newItem = new Item({
        name,
        startingPrice,
        description,
        image,
        category

    })

    newItem.save().then(()=>{   //pass values to database(Create)
        res.json("Student Added")
    }).catch((err)=>{
        console.log(err);
    }) 

})


module.exports = router;