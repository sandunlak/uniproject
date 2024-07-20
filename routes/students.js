const router = require("express").Router();
let Student = require("../models/student");


http://Localhost:8070/student/add

router.route("/add").post((req,res)=>{ //Arrow function

    const name = req.body.name; //Get front end value as a request through body
    const mobile = Number(req.body.mobile);
    const nic = req.body.nic;

    const newStudent = new Student({
        name,
        mobile,
        nic



    })

    newStudent.save().then(()=>{   //pass values to database
        res.json("Student Added")
    }).catch((err)=>{
        console.log(err);
    }) 

})

http://Localhost:8070/student
router.route("/").get((req,res)=>{
    Student.find().then((students)=>{  //Get all students details
        
        res.json(students)

    }).catch((err)=>{
        console.log(err)
    })

})

module.exports = router;