const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usersSchema = new Schema({

    firstName: { 
        type: String, 
        required: true 
    },
    lastName: { 
        type: String, 
        required: true 
    },
    username: { 
        type: String, 
        required: true },
    dob: { 
        type: Date, 
        required: true
    },
    email: { 
        type: String, 
        required: true 
    },
    password: { 
        type: String, 
        required: true 
    },
    active: { 
        type: Boolean, 
        required: true 
    },
    
    // createAccount: [ // relation array has Accounts
    //     {
    //         type: Schema.Types.ObjectId,
    //         ref: 'Accounts' 
    //     }
    // ]

} , { timestamps: true });

module.exports = mongoose.model('Users', usersSchema);