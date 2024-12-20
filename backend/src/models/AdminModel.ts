import mongoose, { Schema,model } from "mongoose";
import { admin } from "../types/admin";

const AdminSchema = new Schema<admin>({
    ID:{
        type: String,
        required:true
    },
    name:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    image: {type: Buffer}
});

export default model<admin>("admin",AdminSchema);