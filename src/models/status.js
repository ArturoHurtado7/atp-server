import { Schema, model } from "mongoose";

const statusSchema = new Schema({
    _id: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    }
},
{
    timestamps: false,
    versionKey: false
});

export default model("Status", statusSchema);