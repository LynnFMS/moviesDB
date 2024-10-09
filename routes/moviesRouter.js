//setup
import {response, Router} from "express";
import Movie from "../models/moviesModel.js";
const router = Router(); //initializing the new router - need this

//add new movie to the movieDB
router.post("/movies", async(req, res) => {
    try {
        const movie = new Movie(req.body); //if movie matches the body set a new movie
        const newMovie = await movie.save(); //new movie
        res.send({ //let's user know new movie was added
            response: "Move was successfully added", //me sending the response! 
            newMovie
        });

    } catch(error) {
        console.log(console.log(console.error.message));
    }
})

export default router; 