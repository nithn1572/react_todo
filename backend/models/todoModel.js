import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    title: {type: String, required: true},
    isCompleted: {type: Boolean, default: false},
    isDeleted: {type: Boolean, default: false},
    createdAt: {type: Date, default: Date.now}
});

export const todoModel = mongoose.model("todo", todoSchema); // same as above line