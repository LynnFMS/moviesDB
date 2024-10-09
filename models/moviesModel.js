import {Schema, model} from "mongoose";

const moviesSchema = new Schema ({
    genre: {
        type: String
        // required: true
    },

    title: {
        type: String,
        required: true
    },

    year: {
        type: Number,
        required: true

    }
});

export default model("Movie", moviesSchema);






