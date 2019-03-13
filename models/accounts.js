const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const accountsSchema = new Schema({
    
    accountName: { type: String, required: true },
    accountType: { type: String, required: true },
    accountNumber: { type: Number, required: true },
    active: { type: Boolean, required: true },

    owner: { // relation obj has one user
        type: Schema.Types.ObjectId,
        ref: 'Users'
    }

} , { timestamps: true });

module.exports = mongoose.model('Accounts', accountsSchema);