const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const studentSchema = new Schema({

    name : {
        type : String,
        required:true
    },
    mobile : {
        type : Number,
        required:true

    },
    nic : {
        type : String,
        required:true
    }

})

const Student = mongoose.model("Student",studentSchema);

module.exports = Student;