import { Schema, model } from "mongoose";

const productSchema = new Schema({
    _id: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: false
    },
    date: {
        type: Date,
        required: false
    },
    important: {
        type: Boolean,
        required: false
    },
    sync: {
        type: Boolean,
        required: false
    },
    title: {
        type: String,
        required: false
    },
    type: {
        type: String,
        required: false
    }
},
{
    timestamps: true,
    versionKey: false
});


export default model("Product", productSchema);