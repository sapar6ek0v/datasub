import mongoose from "mongoose"
import bcrypt from 'bcrypt'

const {Schema, model} = mongoose

const newSchema = new Schema({
    cardNumber: {
        type: Number,
        required: true
    },
    expirationDate: {
        type: String,
        required: true
    },
    cvv: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    }
}, {timestamps: true, versionKey: false})

newSchema.pre('save', function (next)  {
    try {
        this.cvv = bcrypt.hashSync(this.cvv, 10)
    } catch (e) {
        console.log(e)
    }
    next()
})


export default model('cards', newSchema)